<script setup lang="ts">
// データの型を指定
interface ApiItem {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  acf: { illust__img: string };
}
const apiData = ref<ApiItem[]>([]);
onMounted(async () => {
  try {
    // REST APIからデータを取得
    const response = await fetch(
      "https://romanstein.jp/wp-json/wp/v2/illust?_embed&per_page=100&page=1"
    );

    // レスポンスのバイナリデータを取得
    const buffer = await response.arrayBuffer();

    // TextDecoderを使用してUTF-8でデコード
    const decoder = new TextDecoder("UTF-8");
    const dataString = decoder.decode(buffer);

    // 取得したデータをJSONとしてパース
    const data = JSON.parse(dataString) as ApiItem[];

    // 取得したデータをリアクティブな変数にセット
    apiData.value = data;
  } catch (error) {
    console.error("APIデータの取得に失敗しました", error);
  }
});

const isModalActive = ref(false);
const selectedImage = ref("");

const openModal = (imageSrc: string): void => {
  selectedImage.value = imageSrc;
  isModalActive.value = true;
};
const closeModal = (): void => {
  isModalActive.value = false;
};
</script>

<template>
  <div>
    <h1>gallery</h1>
    <div class="works">
      <ul class="works__list">
        <li class="works__item" v-for="item in apiData" :key="item.id">
          <div class="works__thumbnail">
            <img
              :src="item.acf.illust__img"
              :alt="item.title.rendered"
              v-on:click="openModal(item.acf.illust__img)"
            />
          </div>
        </li>
      </ul>
    </div>
    <transition>
      <div
        id="worksModal"
        class="modal"
        v-if="isModalActive"
        v-on:click="closeModal()"
      >
        <div class="modal__inner">
          <div class="modal__container">
            <div class="modal__main">
              <div class="modal__img">
                <img :src="selectedImage" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.works {
  .works__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .works__thumbnail {
    width: 100%;
    aspect-ratio: 1/1;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .modal__inner {
    display: flex;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
  }
  .modal__container {
    max-width: 560px;
    margin: 0 auto;
  }
  .modal__img {
    width: 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
