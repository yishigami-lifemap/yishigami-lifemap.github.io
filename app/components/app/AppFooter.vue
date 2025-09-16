<template>
  <footer class="l-footer">
    <div class="l-footer__wrapper">
      <div class="l-footer__head">
        <h2 class="l-footer__title">このサイトについて</h2>
      </div>
      <div class="l-footer__body">
        <p class="l-footer__detail">
          フロントエンドエンジニア・Romansteinのポートフォリオサイトです。<br />制作会社での実績や事業会社での担当プロジェクト、スキルセット等を掲載しています。
        </p>
        <div class="l-footer__info">
          <section class="l-footer__infoSection">
            <h3 class="l-footer__infoTitle">技術構成</h3>
            <p class="l-footer__infoText">
              Nuxt.js(v4.1), TypeScript, WordPress REST API
            </p>
          </section>
          <section class="l-footer__infoSection">
            <h3 class="l-footer__infoTitle">ホスティング</h3>
            <p class="l-footer__infoText">GitHub Pages</p>
          </section>
        </div>
        <p class="l-footer__note">
          ※ Google Chrome 最新版での閲覧を推奨しています
        </p>
      </div>
      <div class="l-footer__bottom">
        <small class="l-footer__copyright">© 2025 Romanstein </small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.l-footer {
  .l-footer__wrapper {
    position: relative;
    border-top: 1px solid var(--color-border);
    padding-block: var(--size-32) var(--size-80);
    text-align: center;
  }
  .l-footer__wrapper::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 1px;
    background-color: var(--color-white-dark);
  }
  .l-footer__body {
    margin-top: var(--size-16);
    text-align: center;
  }
  .l-footer__title {
    color: var(--color-white-dark);
    font-weight: var(--font-weight-medium);
    font-size: 1.6rem;
  }
  .l-footer__info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: var(--size-12);
    margin-top: var(--size-16);
  }
  .l-footer__infoSection {
    padding: var(--size-16);
    background-color: var(--color-black-light);
    border-radius: var(--radius-md);
    text-align: left;
  }
  .l-footer__infoTitle {
    font-size: 1.2rem;
  }
  .l-footer__infoText {
    margin-top: var(--size-8);
    color: var(--color-white-dark);
  }
  .l-footer__note {
    margin-top: var(--size-8);
    font-size: 1.2rem;
  }
  .l-footer__bottom {
    margin-top: var(--size-48);
  }
  .l-footer__copyright {
    display: block;
    font-size: 1.1rem;
  }
}
</style>
