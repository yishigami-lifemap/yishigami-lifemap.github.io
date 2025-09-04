// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  // 静的サイト生成の設定
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  // GitHub Pages用の設定
  app: {
    baseURL: "/yishigami-lifemap.github.io/", // リポジトリ名に合わせて調整
    buildAssetsDir: "assets",
  },
});
