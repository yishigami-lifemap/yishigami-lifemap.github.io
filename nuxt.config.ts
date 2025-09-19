// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
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
    head: {
      title: "Romanstein's Portfolio",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/reset.css", "~/assets/css/base.css"],
  // GitHub Pages用の追加設定
  experimental: {
    payloadExtraction: false,
  },
});
