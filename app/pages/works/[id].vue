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
const router = useRouter();
const postId = computed(() => Number(route.params.id));

const post = ref<WebPostDetail | null>(null);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);

const fetchPost = async () => {
  if (!postId.value || Number.isNaN(postId.value)) {
    error.value = "不正なIDです";
    return;
  }
  isLoading.value = true;
  error.value = null;
  try {
    const res = await fetch(
      `https://romanstein.jp/wp-json/wp/v2/web/${postId.value}?_embed`,
      { headers: { "Content-Type": "application/json" } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as WebPostDetail;
    post.value = data;
  } catch (e) {
    console.error(e);
    error.value = "データの取得に失敗しました";
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchPost);
watch(() => route.params.id, fetchPost);
</script>

<template>
  <div class="p-work">
    <div class="p-work__wrapper">
      <div class="p-work__container">
        <div class="p-work__inner">
          <div v-if="isLoading" class="p-work__loading">
            <CommonLoading />
          </div>
          <div v-else-if="error" class="p-work__error">
            <p>{{ error }}</p>
            <button class="p-work-detail__retry" @click="fetchPost">
              再試行
            </button>
          </div>
          <div v-else-if="post" class="p-work__main">
            <article class="p-work__article">
              <header class="p-work__header">
                <figure class="p-work__figure">
                  <img
                    :src="
                      post.acf?.web__thumb ||
                      post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                    "
                    :alt="
                      post._embedded?.['wp:featuredmedia']?.[0]?.alt_text ||
                      post.title.rendered
                    "
                  />
                </figure>
                <div class="p-work__meta">
                  <p class="p-work__date">
                    {{
                      post.acf?.web__date ||
                      new Date(post.date).toLocaleDateString()
                    }}
                  </p>
                  <h1 class="p-work__title" v-html="post.title.rendered"></h1>
                  <a
                    v-if="post.link"
                    :href="post.acf?.web__link"
                    class="p-work__link"
                    target="_blank"
                    >{{ post.acf?.web__link }}</a
                  >
                </div>
              </header>
              <div class="p-work__body">
                <div class="p-work__content">
                  <div
                    class="p-work__description"
                    v-html="post.content.rendered"
                  />
                  <div class="p-work__external">
                    <CommonLinkButton :href="post.acf?.web__link">
                      サイトを見る
                    </CommonLinkButton>
                  </div>
                </div>
              </div>
            </article>
            <div class="p-work__bottom">
              <NuxtLink to="/works" class="p-work__backButton">
                一覧に戻る
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-work {
  .p-work__container {
    max-width: 640px;
    margin-inline: auto;
  }
  .p-work__article {
    position: relative;
    padding: var(--size-28);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background-color: var(--color-black-dark);
  }
  .p-work__header {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: var(--size-20);
    padding-bottom: var(--size-20);
    border-bottom: 1px solid var(--color-border);
  }
  .p-work__date {
    display: inline-block;
    padding: 0 var(--size-16);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-base);
    color: var(--color-text-tertiary);
    font-size: 1.2rem;
    font-weight: var(--font-weight-medium);
  }
  .p-work__title {
    margin-top: var(--size-4);
    color: var(--color-white-light);
    font-size: 2.2rem;
    font-weight: var(--font-weight-medium);
  }
  .p-work__link {
    display: inline-block;
    text-decoration: underline;
  }
  .p-work__figure img {
    width: 100%;
    border-radius: var(--radius-sm);
  }
  .p-work__body {
    margin-top: var(--size-20);
  }
  .p-work__external {
    width: 80%;
    max-width: 240px;
    margin-inline: auto;
    margin-top: var(--size-20);
  }
  .p-work__bottom {
    margin-top: var(--size-32);
  }
  .p-work__backButton {
    position: relative;
    display: flex;
    justify-content: center;
    gap: var(--size-4);
    width: fit-content;
    margin-inline: auto;
    text-align: center;
    text-decoration: underline;
  }
}
</style>
