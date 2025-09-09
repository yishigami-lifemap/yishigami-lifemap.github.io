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
      "https://romanstein.jp/wp-json/wp/v2/illust?_embed&per_page=100&page=1",
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
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";
    error.value = `データの取得に失敗しました: ${errorMessage}`;
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
  <div>
    <CommonPageTitle>
      <template v-slot:sub>ギャラリー</template>
      <template v-slot:main>Gallery</template>
    </CommonPageTitle>

    <!-- ローディング状態 -->
    <div v-if="isLoading" class="loading">
      <p>
        <svg width="60" height="60" viewBox="0 0 38 38">
          <g transform="translate(19 19)">
            <g transform="rotate(0)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.125">
                <animate
                  attributeName="opacity"
                  from="0.125"
                  to="0.125"
                  dur="1.2s"
                  begin="0s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0.125"
                ></animate>
              </circle>
            </g>
            <g transform="rotate(45)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.25">
                <animate
                  attributeName="opacity"
                  from="0.25"
                  to="0.25"
                  dur="1.2s"
                  begin="0.15s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0.25"
                ></animate>
              </circle>
            </g>
            <g transform="rotate(90)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.375">
                <animate
                  attributeName="opacity"
                  from="0.375"
                  to="0.375"
                  dur="1.2s"
                  begin="0.3s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0.375"
                ></animate>
              </circle>
            </g>
            <g transform="rotate(135)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.5">
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0.5"
                  dur="1.2s"
                  begin="0.44999999999999996s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0.5"
                ></animate>
              </circle>
            </g>
            <g transform="rotate(180)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.625">
                <animate
                  attributeName="opacity"
                  from="0.625"
                  to="0.625"
                  dur="1.2s"
                  begin="0.6s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0.625"
                ></animate>
              </circle>
            </g>
            <g transform="rotate(225)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.75">
                <animate
                  attributeName="opacity"
                  from="0.75"
                  to="0.75"
                  dur="1.2s"
                  begin="0.75s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0.75"
                ></animate>
              </circle>
            </g>
            <g transform="rotate(270)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="0.875">
                <animate
                  attributeName="opacity"
                  from="0.875"
                  to="0.875"
                  dur="1.2s"
                  begin="0.8999999999999999s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;0.875"
                ></animate>
              </circle>
            </g>
            <g transform="rotate(315)">
              <circle cx="0" cy="12" r="3" fill="#60A5FA" opacity="1">
                <animate
                  attributeName="opacity"
                  from="1"
                  to="1"
                  dur="1.2s"
                  begin="1.05s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="1;1"
                ></animate>
              </circle>
            </g>
          </g>
        </svg>
      </p>
    </div>

    <!-- エラー状態 -->
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="fetchGalleryData" class="retry-button">再試行</button>
    </div>

    <!-- ギャラリー表示 -->
    <div v-else class="works">
      <ul class="works__list">
        <li class="works__item" v-for="item in apiData" :key="item.id">
          <div class="works__thumbnail">
            <img
              :src="item.acf.illust__img"
              :alt="item.title.rendered"
              @click="openModal(item.acf.illust__img)"
              loading="lazy"
            />
          </div>
        </li>
      </ul>
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
</template>

<style scoped>
.loading,
.error {
  text-align: center;
  padding: 2rem;
}

.retry-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.retry-button:hover {
  background-color: #2980b9;
}

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
  z-index: 9;
  .modal__inner {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
    backdrop-filter: blur(2px);
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
