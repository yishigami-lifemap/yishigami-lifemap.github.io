<script setup lang="ts">
// WordPress REST APIのレスポンス型を定義
interface GalleryPost {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  acf: { illust__img: string };
}

// コンポーネントの状態管理
const apiData = ref<GalleryPost[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

// WordPress REST APIからデータを取得する関数
const fetchGalleryData = async (): Promise<void> => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch(
      "https://romanstein.jp/wp-json/wp/v2/illust?embed&per_page=100",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // HTTPステータスコードをチェック
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // レスポンスをJSONとして直接パース
    const data = (await response.json()) as GalleryPost[];
    // データの検証
    if (!Array.isArray(data)) {
      throw new Error("API response is not an array");
    }

    apiData.value = data;
  } catch (err) {
    error.value = "データの取得に失敗しました";
    console.error("APIデータの取得エラー:", err);
  } finally {
    isLoading.value = false;
  }
};

// モーダル関連の状態
const isModalActive = ref(false);
const selectedImage = ref("");
// モーダル操作関数
const openModal = (imageSrc: string): void => {
  selectedImage.value = imageSrc;
  isModalActive.value = true;
};
const closeModal = (): void => {
  isModalActive.value = false;
};

// コンポーネントマウント時にデータを取得
onMounted(() => {
  fetchGalleryData();
});
</script>

<template>
  <!-- ギャラリー表示 -->
  <div class="illust">
    <!-- ローディング状態 -->
    <div v-if="isLoading" class="illust__loading">
      <CommonLoading />
    </div>

    <!-- エラー状態 -->
    <div v-else-if="error" class="illust__error">
      <p>{{ error }}</p>
      <button @click="fetchGalleryData" class="retry-button">再試行</button>
    </div>

    <!-- ギャラリー -->
    <div v-else>
      <ul class="illust__list">
        <li class="illust__item" v-for="item in apiData" :key="item.id">
          <div class="illust__thumbnail">
            <img
              :src="item.acf.illust__img"
              :alt="item.title.rendered"
              @click="openModal(item.acf.illust__img)"
              loading="lazy"
            />
          </div>
        </li>
      </ul>
      <div class="illust__bottom">
        <div class="illust__button">
          <CommonLinkButton href="https://www.instagram.com/romanstein_jp/">
            Instagramで見る
          </CommonLinkButton>
        </div>
      </div>
      <!-- モーダル -->
      <transition>
        <div
          id="worksModal"
          class="modal"
          v-if="isModalActive"
          @click="closeModal()"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div class="modal__inner">
            <div class="modal__container">
              <div class="modal__main">
                <div class="modal__img">
                  <img :src="selectedImage" :alt="selectedImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.illust {
  .illust__loading,
  .illust__error {
    text-align: center;
    padding: 2rem;
  }
  .retry-button {
    background-color: var(--color-black-dark);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
  .retry-button:hover {
    background-color: var(--color-black-light);
  }
  .illust__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: var(--size-12);
  }
  .illust__thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    cursor: pointer;
    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: var(--radius-md);
    }
  }
  .illust__thumbnail::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
  }
  .illust__bottom {
    margin-top: var(--size-40);
  }
  .illust__button {
    width: 240px;
    margin-inline: auto;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  .modal__inner {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
  }
  .modal__container {
    max-width: 480px;
    margin: 0 auto;
  }
  .modal__img {
    position: relative;
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
