<script setup lang="ts">
definePageMeta({
  pageTitle: {
    sub: "制作実績",
    main: "works",
  },
});

interface WebPostDetail {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  acf?: {
    web__date?: string;
    web__thumb?: string;
    web__link: string;
    web__image: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const route = useRoute();
const webPostId = computed(() => Number(route.params.id));

const webPost = ref<WebPostDetail | null>(null);
const isWebPostLoading = ref<boolean>(false);
const isWebPostError = ref<string>("");

const fetchWebPost = async () => {
  isWebPostLoading.value = true;
  try {
    webPost.value = await $fetch<WebPostDetail>(
      `https://romanstein.jp/wp-json/wp/v2/web/${webPostId.value}?_embed`
    );
  } catch {
    isWebPostError.value = "データの取得に失敗しました";
  } finally {
    isWebPostLoading.value = false;
  }
};

onMounted(fetchWebPost);
watch(() => route.params.id, fetchWebPost);
</script>

<template>
  <div class="p-post">
    <div class="p-post__wrapper">
      <div class="p-post__container">
        <div class="p-post__inner">
          <div v-if="isWebPostLoading" class="p-post__loading">
            <CommonLoading />
          </div>
          <div v-else-if="isWebPostError" class="p-post__error">
            <p>{{ isWebPostError }}</p>
            <CommonRetryButton @click="fetchWebPost">
              再試行
            </CommonRetryButton>
          </div>
          <div v-else-if="webPost" class="p-post__main">
            <article class="p-post__article">
              <header class="p-post__header">
                <figure class="p-post__figure">
                  <img
                    :src="
                      webPost.acf?.web__thumb ||
                      webPost._embedded?.['wp:featuredmedia']?.[0]?.source_url
                    "
                    :alt="
                      webPost._embedded?.['wp:featuredmedia']?.[0]?.alt_text ||
                      webPost.title.rendered
                    "
                  />
                </figure>
                <div class="p-post__meta">
                  <p class="p-post__date">
                    {{
                      webPost.acf?.web__date ||
                      new Date(webPost.date).toLocaleDateString()
                    }}
                  </p>
                  <h1
                    class="p-post__title"
                    v-html="webPost.title.rendered"
                  ></h1>
                  <a
                    v-if="webPost.link"
                    :href="webPost.acf?.web__link"
                    class="p-post__link"
                    target="_blank"
                    >{{ webPost.acf?.web__link }}</a
                  >
                </div>
              </header>
              <div class="p-post__body">
                <div class="p-post__content">
                  <div
                    class="p-post__description"
                    v-html="webPost.content.rendered"
                  />
                  <div class="p-post__external">
                    <CommonLinkButton :href="webPost.acf?.web__link">
                      サイトを見る
                    </CommonLinkButton>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="p-post__bottom">
            <NuxtLink to="/works" class="p-post__backButton">
              一覧に戻る
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
