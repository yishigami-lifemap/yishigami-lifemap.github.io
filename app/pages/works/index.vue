<script setup lang="ts">
definePageMeta({
  pageTitle: {
    sub: "制作実績",
    main: "works",
  },
});

// 会社情報のデータ
const companies = ref([
  {
    id: "lifemap",
    name: "株式会社 ライフマップ",
    role: "WF・デザイン・コーディング",
    type: "事業会社",
    status: "現職",
    year: "2025",
    mainTasks:
      "大学情報サイトの機能・UI改善、バックエンドエンジニアとの連携、デザイン業務を担当。ユーザビリティ向上とパフォーマンス最適化に注力し、アクセシビリティの向上にも取り組んでいる。",
    projects: [
      {
        id: "css-refactoring",
        title:
          "CSSのリファクタリング-744KB (約20000行) から 153KB (約7000行)に",
        isExpanded: true,
        description:
          "main.cssファイルで発見された問題点（コーディング規約の不在、重複セレクタ、共通・固有スタイルの分離不足）を解決するため、FLOCSSの導入、Sassへの移行、古い記述の削除を行った。結果として、プレフィックスによる要素の役割明確化、セレクタの簡素化、コード量の大幅削減（約60%減）を実現した。",
      },
      {
        id: "nuxt-rails",
        title: "Nuxt.js x Ruby on Railsによるフロント再構築",
        isExpanded: false,
        description: "",
      },
      {
        id: "wordpress-renovation",
        title: "WordPressを使った特集サイトの改修",
        isExpanded: false,
        description: "",
      },
      {
        id: "accessibility",
        title: "アクセシビリティ向上 (details/summaryタグやaria属性の導入)",
        isExpanded: false,
        description: "",
      },
    ],
    articles: [
      {
        href: "https://zenn.dev/lifemap/articles/scroll-driven-animations",
        title:
          "【CSS】スクロールと連動するアニメーションをJavaScriptを使わずに実装してみる",
      },
      {
        href: "https://zenn.dev/lifemap/articles/nuxt3-page-to-component",
        title: "【Nuxt3】PageからLayoutを経由してComponentに値を渡す方法",
      },
      {
        href: "https://zenn.dev/lifemap/articles/vue3-carousel",
        title: "【Vue3】Vue3-carouselの使い方を解説",
      },
    ],
  },
  {
    id: "studio-nnc",
    name: "合同会社 STUDIO NNC",
    role: "WF・デザイン・コーディング",
    type: "制作会社",
    status: "前職",
    year: "2020",
    mainTasks:
      "コーディング、オリジナルWordPressテーマの作成、デザイン業務を担当。クライアントの要望に応じたカスタマイズと、保守性の高いコードの実装に注力した。",
    projects: [
      {
        id: "studio-nnc-site",
        title: "合同会社 STUDIO NNC",
        year: "2021",
        isExpanded: false,
        description: "",
      },
      {
        id: "nakazato-accounting",
        title: "中里会計事務所",
        year: "2021",
        isExpanded: false,
        description: "",
      },
      {
        id: "kotonoha",
        title: "コトノハ",
        year: "2021",
        isExpanded: false,
        description: "",
      },
    ],
  },
]);

// WordPress REST APIのレスポンス型を定義
interface WebPost {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  acf: {
    web__date: string;
    web__thumb: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

// コンポーネントの状態管理
const apiData = ref<WebPost[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

// WordPress REST APIからデータを取得する関数
const fetchWebData = async (): Promise<void> => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await fetch(
      "https://romanstein.jp/wp-json/wp/v2/web?_embed",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as WebPost[];

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

// コンポーネントマウント時にデータを取得
onMounted(() => {
  fetchWebData();
});
</script>

<template>
  <div class="p-works">
    <!-- タイムライン -->
    <div class="p-works__timeline">
      <div class="p-works__timeline-line"></div>
      <div class="p-works__timeline-years">
        <span class="p-works__timeline-year p-works__timeline-year--2025"
          >2025</span
        >
        <span class="p-works__timeline-year p-works__timeline-year--2020"
          >2020</span
        >
      </div>
    </div>

    <!-- 会社情報カード -->
    <div class="p-works__companies">
      <div v-for="company in companies" :key="company.id" class="p-company">
        <div class="p-company__head">
          <!-- タグ -->
          <div class="p-company__tags">
            <span class="p-company__tag">{{ company.type }}</span>
            <span class="p-company__tag">{{ company.status }}</span>
          </div>
          <!-- 会社情報 -->
          <div class="p-company__info">
            <h3 class="p-company__name">{{ company.name }}</h3>
            <p class="p-company__role">{{ company.role }}</p>
          </div>
        </div>

        <div class="p-company__body">
          <!-- 主な業務内容 -->
          <div class="p-company__section">
            <h4 class="p-company__sectionTitle">主な業務内容</h4>
            <div class="p-company__sectionBody">
              <p>{{ company.mainTasks }}</p>
            </div>
          </div>
          <!-- 主な担当プロジェクト -->
          <div v-if="company.id === 'lifemap'">
            <div class="p-company__section">
              <h4 class="p-company__sectionTitle">主な担当プロジェクト</h4>
              <div class="p-company__sectionBody">
                <div class="p-company__projects">
                  <div
                    class="p-project"
                    v-for="project in company.projects"
                    :key="project.id"
                  >
                    <details class="p-project__inner">
                      <summary class="p-project__title">
                        <span>{{ project.title }}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.433"
                          height="8.473"
                          viewBox="0 0 9.433 8.473"
                          class="p-project__arrow"
                        >
                          <path
                            d="M4.651.62a.4.4,0,0,1,.7,0L9.665,8.293a.4.4,0,0,1-.349.6H.684a.4.4,0,0,1-.349-.6Z"
                            transform="translate(9.717 8.889) rotate(180)"
                            fill="#4d4d4d"
                          />
                        </svg>
                      </summary>
                      <div
                        :id="`project-${project.id}`"
                        class="p-project__body"
                      >
                        <p class="p-project__description">
                          {{ project.description }}
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 主な制作実績 -->
          <div v-if="company.id === 'studio-nnc'">
            <div class="p-company__section">
              <h4 class="p-company__sectionTitle">主な制作実績</h4>
              <div class="p-company__sectionBody">
                <div class="p-company__projects">
                  <!-- ローディング状態 -->
                  <div v-if="isLoading" class="loading">
                    <CommonLoading />
                  </div>

                  <!-- エラー状態 -->
                  <div v-else-if="error" class="error">
                    <p>{{ error }}</p>
                    <button @click="fetchWebData" class="retry-button">
                      再試行
                    </button>
                  </div>

                  <!-- データ表示 -->
                  <div v-else class="p-company__projects">
                    <div v-for="post in apiData" :key="post.id">
                      <div class="p-sites">
                        <div class="p-sites__inner">
                          <NuxtLink
                            :to="`/works/${post.id}`"
                            class="p-sites__link"
                          >
                            <div class="p-sites__thumbnail">
                              <img :src="post.acf.web__thumb" alt="" />
                            </div>
                            <div class="p-sites__text">
                              <p class="p-sites__year">
                                {{ post.acf.web__date }}
                              </p>
                              <h3 class="p-sites__title">
                                {{ post.title.rendered }}
                              </h3>
                            </div>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 技術記事 -->
          <div v-if="company.articles">
            <div class="p-company__section">
              <h4 class="p-company__sectionTitle">開発記事</h4>
              <div class="p-company__sectionBody">
                <div class="p-article">
                  <p class="p-article__description">
                    エンジニアのための新しい情報共有コミュニティ<a
                      href="https://zenn.dev/about"
                      target="_blank"
                      >「Zenn」</a
                    >にて、開発記事を執筆・発信。<br />記事の内容は、CSSやVue等のフロントエンドの内容が中心。
                  </p>
                  <ul class="p-article__list">
                    <li
                      v-for="article in company.articles"
                      :key="article.title"
                      class="p-article__item"
                    >
                      <a
                        :href="article.href"
                        class="p-article__link"
                        target="_blank"
                      >
                        {{ article.title }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-works {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--size-40) var(--size-20);
  /* タイムライン */
  .p-works__timeline {
    position: relative;
    margin-bottom: var(--size-80);
  }

  .p-works__timeline-line {
    position: absolute;
    left: var(--size-20);
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--color-border);
  }

  .p-works__timeline-years {
    position: relative;
    z-index: 1;
  }

  .p-works__timeline-year {
    display: block;
    position: relative;
    left: var(--size-20);
    margin-left: -8px;
    width: 16px;
    height: 16px;
    background-color: var(--color-black-base);
    border: 2px solid var(--color-border);
    border-radius: 50%;
    margin-bottom: var(--size-80);
  }

  .p-works__timeline-year--2025 {
    margin-bottom: var(--size-120);
  }

  /* 会社情報カード */
  .p-works__companies {
    display: flex;
    flex-direction: column;
    gap: var(--size-40);
  }
}

.p-company {
  position: relative;
  padding: var(--size-24);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background-color: var(--color-black-dark);
  .p-company__head {
    padding-bottom: var(--size-20);
    border-bottom: 1px solid var(--color-border);
  }
  .p-company__tags {
    display: flex;
    gap: var(--size-8);
  }
  .p-company__tag {
    padding: var(--size-4) var(--size-16);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-base);
    color: var(--color-text-pimary);
    font-size: 1.2rem;
  }
  .p-company__info {
    margin-top: var(--size-8);
  }
  .p-company__name {
    font-size: 2.4rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-white-light);
  }
  .p-company__body {
    margin-top: var(--size-28);
  }
  .p-company__section {
    margin-top: var(--size-24);
  }
  .p-company__sectionTitle {
    font-size: 1.6rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-white-dark);
  }
  .p-company__sectionBody {
    margin-top: var(--size-8);
  }
  .p-company__projects {
    display: flex;
    flex-direction: column;
    gap: var(--size-4);
  }
}
.p-project {
  .p-project__inner {
    border-radius: var(--radius-sm);
    background-color: var(--color-black-light);
    overflow: hidden;
    cursor: pointer;
  }
  .p-project__title {
    position: relative;
    padding: var(--size-12) var(--size-24);
    padding-right: 2em;
    font-weight: var(--font-weight-medium);
    color: var(--color-white-dark);
  }
  .p-project__arrow {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
  }
  .p-project__body {
    padding: 0 var(--size-24) var(--size-20);
  }
}
.p-article {
  .p-article__list {
    margin-top: 0.4em;
  }
  .p-article__item {
    position: relative;
    padding-left: 1em;
    text-indent: -1em;
    margin-bottom: var(--size-8);
    color: var(--color-text-primary);
  }
  .p-article__item::before {
    content: "•";
    margin-right: var(--size-4);
    color: var(--color-text-secondary);
  }
  .p-article__link {
    color: var(--color-white-light);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .p-article__link:hover {
    color: var(--color-text-primary);
    text-decoration: underline;
  }
}
.p-sites {
  .p-sites__inner {
    border-radius: var(--radius-sm);
    background-color: var(--color-black-light);
  }
  .p-sites__link {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--size-24);
    padding: var(--size-16) var(--size-24);
  }
  .p-sites__thumbnail {
    background-color: var(--color-black-light);
    img {
      border-radius: var(--size-4);
    }
  }
  .p-sites__text {
    padding-top: 1em;
  }
  .p-sites__year {
    color: var(--color-text-tertiary);
    font-size: 1.2rem;
    font-weight: var(--font-weight-bold);
  }
  .p-sites__title {
    color: var(--color-white-dark);
    font-size: 1.6rem;
    font-weight: var(--font-weight-medium);
  }
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .p-works {
    padding: var(--size-20) var(--size-16);
  }

  .p-works__timeline-line {
    left: var(--size-16);
  }

  .p-works__timeline-year {
    left: var(--size-16);
  }

  .p-company {
    padding: var(--size-20);
  }

  .p-company__name {
    font-size: 2rem;
  }

  .p-company__project-header {
    padding: var(--size-12) var(--size-16);
  }

  .p-company__project-title {
    font-size: 1.4rem;
  }
}
</style>
