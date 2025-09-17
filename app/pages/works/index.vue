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
    role: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "jQuery",
      "Vue.js",
      "Nuxt.js",
      "Ruby on Rails",
      "WordPress",
      "Adobe XD",
      "Figma",
    ],
    type: "事業会社",
    status: "現職",
    year: "2025",
    mainTasks:
      "Ruby on Railsで構築された進学情報サイトのUI改修を担当。また、WordPressで構築された特集サイトやLPの改修も担当する。他部署の関係者との要件定義、バックエンドエンジニアへの引き継ぎなど、社内の人間と連携してコーディングを進める。また、デザイナーの稼働状況に応じてWF・デザインを担当することも。",
    projects: [
      {
        id: "css-refactoring",
        title:
          "CSSのリファクタリング-744KB (約20000行) から 153KB (約7000行)に",
        description:
          "サイト共通で読み込んでいるCSSファイルで発見された問題点（コーディング規約の不在、重複セレクタ、共通・固有スタイルの分離不足）を発見。解決策として、FLOCSSの導入、Sassへの移行、古い記述の削除を行った。結果として、プレフィックスによる要素の役割明確化、セレクタの簡素化、コード量の大幅削減（約60%減）を実現した。",
      },
      {
        id: "cvr-optimization",
        title: "CVRに寄与する重要ページの大規模リニューアル(EFO)",
        description:
          "請求や申し込みなどのエントリーフォームのリニューアルを担当。バリデーション等の機能も改めて強化することで、申し込みフォームの離脱率は57%→54%、請求フォームは52%→49%まで改善することに成功。",
      },
      {
        id: "wordpress-renovation",
        title: "WordPressを使った特集サイトのデザインリニューアル",
        description:
          "WordPressで構築された特集サイトのデザイン改修を担当。古いテーマに改修が重ねられていたが、コードの整理を行いつつ新規ページの作成やCSSの改修を行い、新デザインへの移行を実現した。",
      },
      {
        id: "nuxt-rails",
        title: "Nuxt.js x Ruby on Railsによるフロント再構築",
        description:
          "コードの肥大化やサイトの読み込み速度の低下などの問題の解決策として、フロント部分をNuxt.jsに分割するプロジェクトを担当。動的な情報出力や機能を除く、見た目の部分だけをNuxt.js上で再現することに成功。Piniaによる状態管理とスタイリングの連動などを実現した（現在は会社都合でプロジェクト凍結中）",
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
    role: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "jQuery",
      "Vue.js",
      "WordPress",
      "Adobe XD",
    ],
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
    <div class="p-works__wrapper">
      <div class="p-works__container">
        <div class="p-works__inner">
          <!-- タイムライン -->
          <div class="p-works__timeline">
            <div class="p-works__year">2025</div>
            <div class="p-works__line"></div>
            <div class="p-works__year">2020</div>
          </div>
          <!-- 会社情報カード -->
          <div class="p-works__companies">
            <div
              v-for="company in companies"
              :key="company.id"
              class="p-company"
            >
              <div class="p-company__wrapper">
                <div class="p-company__head">
                  <!-- タグ -->
                  <div class="p-company__tags">
                    <span class="p-company__tag">{{ company.type }}</span>
                    <span class="p-company__tag">{{ company.status }}</span>
                  </div>
                  <!-- 会社情報 -->
                  <div class="p-company__info">
                    <h3 class="p-company__name">{{ company.name }}</h3>
                    <ul class="p-company__role">
                      <li v-for="role in company.role" :key="role">
                        {{ role }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="p-company__body">
                  <!-- 主な業務内容 -->
                  <div class="p-company__section">
                    <h4 class="p-company__sectionTitle">主な業務内容</h4>
                    <div class="p-company__sectionBody">
                      <p v-html="company.mainTasks"></p>
                    </div>
                  </div>
                  <!-- 主な担当プロジェクト -->
                  <div v-if="company.id === 'lifemap'">
                    <div class="p-company__section">
                      <h4 class="p-company__sectionTitle">
                        主な担当プロジェクト
                      </h4>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-works {
  .p-works__inner {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 2em;
  }
  /* タイムライン */
  .p-works__timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .p-works__line {
    width: 1px;
    height: 100%;
    margin-inline: auto;
    background-color: var(--color-border);
  }
  .p-works__year {
    position: relative;
    display: block;
    width: 100%;
    padding: 0 var(--size-16);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    background-color: var(--color-black-light);
    font-weight: var(--font-weight-bold);
    font-style: italic;
    text-align: center;
  }
  /* 会社情報カード */
  .p-works__companies {
    display: flex;
    flex-direction: column;
    gap: var(--size-40);
    padding-top: 2em;
  }
}
.p-company {
  .p-company__wrapper {
    position: relative;
    padding: var(--size-24);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background-color: var(--color-black-dark);
  }
  .p-company__wrapper::before {
    content: "";
    position: absolute;
    top: var(--size-40);
    right: 100%;
    display: block;
    width: 5em;
    height: 1px;
    background-color: var(--color-border);
  }
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
  .p-company__role {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.24rem;
  }
  .p-company__role > li + li::before {
    content: "/";
    margin: 0 0.5em;
    color: var(--color-text-tertiary);
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
  .p-project__arrow {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    transition: transform 0.2s ease;
  }
  .p-project__inner[open] .p-project__arrow {
    transform: translateY(-50%) rotate(180deg);
  }
  .p-project__title {
    position: relative;
    padding: var(--size-12) var(--size-24);
    padding-right: 2em;
    font-weight: var(--font-weight-medium);
    color: var(--color-white-dark);
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
</style>
