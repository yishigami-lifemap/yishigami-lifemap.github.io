// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  // 静的サイト生成の設定
  nitro: {
    // prerender: {
    //   routes: ["/", "/about"],
    // },
    // 静的生成時のアセットパス設定
    output: {
      publicDir: "docs",
    },
  },
  // GitHub Pages用の設定（ルートドメインの場合）
  app: {
    baseURL: "/", // ルートドメインの場合は "/" に変更
    buildAssetsDir: "assets",
  },
  // GitHub Pages用の追加設定
  experimental: {
    payloadExtraction: false,
  },
  // 静的生成の最適化
  // generate: {
  //   fallback: true,
  // },
  css: ["~/assets/css/reset.css"],
});
