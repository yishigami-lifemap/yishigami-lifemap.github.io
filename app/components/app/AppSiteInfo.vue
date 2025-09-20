<template>
  <footer class="l-siteInfo">
    <div class="l-siteInfo__wrapper">
      <div class="l-siteInfo__head">
        <h2 class="l-siteInfo__title">このサイトについて</h2>
      </div>
      <div class="l-siteInfo__body">
        <p class="l-siteInfo__detail">
          フロントエンドエンジニア・Romansteinのポートフォリオサイトです。<br />制作会社での実績や事業会社での担当プロジェクト、スキルセット等を掲載しています。<br />フロントをNuxt.jsで構築し、WordPressで制作した旧ポートフォリオサイトの情報をREST
          APIで取得する、<br />いわゆる「ヘッドレスCMS」の形式を採用しています。
        </p>
        <div class="l-siteInfo__info">
          <section class="l-siteInfo__infoSection">
            <h3 class="l-siteInfo__infoTitle">技術構成</h3>
            <p class="l-siteInfo__infoText">
              Nuxt.js(v4.1), TypeScript, WordPress REST API
            </p>
          </section>
          <section class="l-siteInfo__infoSection">
            <h3 class="l-siteInfo__infoTitle">ホスティング</h3>
            <p class="l-siteInfo__infoText">GitHub Pages</p>
          </section>
        </div>
        <p class="l-siteInfo__note">
          ※ Google Chrome 最新版での閲覧を推奨しています
        </p>
      </div>
      <div class="l-siteInfo__bottom">
        <small class="l-siteInfo__copyright">© 2025 Romanstein </small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.l-siteInfo {
  .l-siteInfo__wrapper {
    position: relative;
    border-top: 1px solid var(--color-border);
    padding-top: var(--size-32);
    text-align: center;
  }
  .l-siteInfo__wrapper::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 1px;
    background-color: var(--color-white-dark);
  }
  .l-siteInfo__body {
    margin-top: var(--size-16);
    text-align: center;
  }
  .l-siteInfo__title {
    color: var(--color-white-dark);
    font-weight: var(--font-weight-medium);
    font-size: 1.6rem;
  }
  .l-siteInfo__detail {
    width: fit-content;
    margin-inline: auto;
  }
  .l-siteInfo__info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: var(--size-12);
    margin-top: var(--size-16);
  }
  .l-siteInfo__infoSection {
    padding: var(--size-16);
    background-color: var(--color-black-light);
    border-radius: var(--radius-md);
    text-align: left;
  }
  .l-siteInfo__infoTitle {
    font-size: 1.2rem;
  }
  .l-siteInfo__infoText {
    margin-top: var(--size-8);
    color: var(--color-white-dark);
  }
  .l-siteInfo__note {
    margin-top: var(--size-8);
    font-size: 1.2rem;
  }
  .l-siteInfo__bottom {
    margin-top: var(--size-48);
  }
  .l-siteInfo__copyright {
    display: block;
    font-size: 1.1rem;
  }
}
</style>
