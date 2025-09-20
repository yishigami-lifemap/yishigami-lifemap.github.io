<script setup lang="ts">
definePageMeta({
  pageTitle: {
    sub: "制作実績",
    main: "works",
  },
});

// 会社情報のデータ
const companies = [
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
      "Ruby on Railsで構築された進学情報サイトのUI改修を担当する。また、WordPressで構築された特集サイトやLPの小規模リニューアルも手がける。デザイナーの稼働状況によっては、簡単なWF・デザインを制作することも。<br>また、Slackの自動化ツール（ワークフロービルダー）を用いて、日報投稿システムや営業の請求書・発注書の承認フローの構築も行うなど、Slackに関わる実装依頼にも対応。",
    projects: [
      {
        id: "css-refactoring",
        title:
          "CSSのリファクタリング-744KB (約20000行) から 153KB (約7000行)に",
        description:
          "サイト共通で読み込んでいるCSSファイルの問題点（コーディング規約の不在、重複セレクタ、共通・固有スタイルの分離不足）を発見。解決策として、FLOCSSの導入、Sassへの移行、古い記述の削除を行った。結果として、プレフィックスによる要素の役割明確化、セレクタの簡素化、コード量の大幅削減（約60%減）を実現した。",
      },
      {
        id: "cvr-optimization",
        title: "CVRに寄与する重要ページの大規模リニューアル(EFO)",
        description:
          "請求や申し込みなどのエントリーフォームのリニューアルを担当。デザインの刷新やバリデーション等の機能の強化により、イベント申し込みフォームの離脱率は57%→54%、資料請求フォームの離脱率は52%→49%まで改善。",
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
          "コードの肥大化やサイトの読み込み速度の低下などの問題の解決策として、フロント部分をNuxt.jsに分割するプロジェクトを担当。動的な情報出力や機能を除く、見た目の部分だけをNuxt.js上で再現することに成功。Piniaによる状態管理とスタイリングの連動、jQueryの記述のバニラJSへの移行などを実現した（現在は会社都合でプロジェクト凍結中）",
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
      "マークアップエンジニアとして、主にコーディングを担当する。デザイナーの稼働状況や案件の特性に応じて、WF・デザインの制作も行う。",
  },
];

// WordPress REST APIで取得したデータ型を定義
interface WebPost {
  id: number;
  title: { rendered: string };
  acf: {
    web__date: string;
    web__thumb: string;
  };
}

const siteDate = ref<WebPost[]>([]);
const isSiteLoading = ref<boolean>(false);
const isSiteError = ref<string>("");

const fetchWebData = async () => {
  isSiteLoading.value = true;
  try {
    siteDate.value = await $fetch<WebPost[]>(
      "https://romanstein.jp/wp-json/wp/v2/web?_embed"
    );
  } catch {
    isSiteError.value = "データの取得に失敗しました";
  } finally {
    isSiteLoading.value = false;
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
            <WorksTimeline />
          </div>
          <!-- 会社情報カード -->
          <div class="p-works__companies">
            <WorksCompany
              v-for="company in companies"
              :key="company.id"
              :company="company"
              :site-data="siteDate"
              :is-site-loading="isSiteLoading"
              :is-site-error="isSiteError"
              :on-retry="fetchWebData"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-works {
  .p-works__wrapper {
    container: p-works__wrapper / inline-size;
  }
  .p-works__inner {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 2em;
  }
  .p-works__companies {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 2em;
  }
  @container p-works__wrapper (max-width: 500px) {
    .p-works__inner {
      grid-template-columns: 14cqw 1fr;
      gap: 2cqw;
    }
    .p-works__companies {
      gap: 10cqw;
    }
  }
}
</style>
