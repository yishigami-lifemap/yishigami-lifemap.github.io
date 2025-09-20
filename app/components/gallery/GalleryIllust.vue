<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  illustData: {
    id: number;
    date: string;
    link: string;
    title: { rendered: string };
    acf: { illust__img: string };
  }[];
  isIllustLoading: boolean;
  isIllustError: string;
  onRetry: () => void;
}

// モーダル関連の状態
const isModalActive = ref(false);
const selectedImage = ref("");
const selectedTitle = ref("");
// モーダル操作関数
const openModal = (imageSrc: string, title: string): void => {
  selectedImage.value = imageSrc;
  selectedTitle.value = title;
  isModalActive.value = true;
};
const closeModal = (): void => {
  isModalActive.value = false;
};
</script>

<template>
  <div class="p-illust">
    <div class="p-illust__wrapper">
      <div v-if="isIllustLoading" class="p-illust__loading">
        <CommonLoading />
      </div>

      <!-- エラー状態 -->
      <div v-else-if="isIllustError" class="p-illust__error">
        <p>{{ isIllustError }}</p>
        <CommonRetryButton @click="onRetry">
          データを再取得する
        </CommonRetryButton>
      </div>

      <!-- ギャラリー一覧 -->
      <div v-else>
        <ul class="p-illust__list">
          <li class="p-illust__item" v-for="item in illustData" :key="item.id">
            <div class="p-illust__thumbnail">
              <img
                :src="item.acf.illust__img"
                :alt="item.title.rendered"
                @click="openModal(item.acf.illust__img, item.title.rendered)"
                loading="lazy"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- モーダル -->
  <transition>
    <div
      id="worksModal"
      class="p-modal"
      v-if="isModalActive"
      @click="closeModal()"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div class="p-modal__inner">
        <div class="p-modal__container">
          <div class="p-modal__main">
            <div class="p-modal__img">
              <img :src="selectedImage" :alt="selectedImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.p-illust {
  .p-illust__wrapper {
    container: p-illust__wrapper / inline-size;
  }
  .p-illust__loading,
  .p-illust__error {
    text-align: center;
    padding: 2rem;
  }
  .p-illust__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  .p-illust__thumbnail {
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
  .p-illust__thumbnail::before {
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
  @container p-illust__wrapper (max-width: 600px) {
    .p-illust__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
.p-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  .p-modal__inner {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
  }
  .p-modal__container {
    max-width: 480px;
    margin: 0 auto;
  }
  .p-modal__img {
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
