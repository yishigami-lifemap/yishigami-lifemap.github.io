<script setup lang="ts">
definePageMeta({
  pageTitle: {
    sub: "ギャラリー",
    main: "Gallery",
  },
});

// WordPress REST APIで取得したデータ型を定義
interface IllustPost {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  acf: { illust__img: string };
}

const illustDate = ref<IllustPost[]>([]);
const isIllustLoading = ref<boolean>(false);
const isIllustError = ref<string>("");

const fetchIllustData = async () => {
  isIllustLoading.value = true;
  try {
    illustDate.value = await $fetch<IllustPost[]>(
      "https://romanstein.jp/wp-json/wp/v2/illust?embed&per_page=100"
    );
  } catch {
    isIllustError.value = "データの取得に失敗しました";
  } finally {
    isIllustLoading.value = false;
  }
};

// コンポーネントマウント時にデータを取得
onMounted(() => {
  fetchIllustData();
});
</script>

<template>
  <div class="p-gallery">
    <div class="p-gallery__container">
      <div class="p-gallery__inner">
        <div class="p-gallery__viewer">
          <GalleryIllust
            :illust-data="illustDate"
            :is-illust-loading="isIllustLoading"
            :is-illust-error="isIllustError"
            :on-retry="fetchIllustData"
          />
        </div>
        <div class="p-gallery__bottom">
          <div class="p-gallery__link">
            <CommonLinkButton href="https://www.instagram.com/romanstein_jp/">
              Instagramで見る
            </CommonLinkButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-gallery {
  .p-gallery__bottom {
    margin-top: 24px;
  }
  .p-gallery__link {
    width: 90%;
    max-width: 240px;
    margin-inline: auto;
  }
}
</style>
