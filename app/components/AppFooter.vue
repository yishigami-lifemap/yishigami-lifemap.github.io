<template>
  <footer class="l-footer">
    <div class="wrapper">
      <div class="head">
        <h2 class="title">当サイトについて</h2>
      </div>
      <div class="body">
        <p class="detail">
          フロントエンドエンジニア・Romansteinのポートフォリオサイトです。<br />制作会社での実績や事業会社での担当プロジェクト、スキルセット等を掲載しています。
        </p>
        <div class="info">
          <section class="infoSection">
            <h3 class="infoTitle">技術構成</h3>
            <p class="infoText">Nuxt.js, TypeScript, WordPress REST API</p>
          </section>
          <section class="infoSection">
            <h3 class="infoTitle">ホスティング</h3>
            <p class="infoText">GitHub Pages</p>
          </section>
        </div>
        <p class="note">※ Google Chrome 最新版での閲覧を推奨しています</p>
      </div>
      <div class="bottom">
        <small class="copyright">© 2025 Romanstein </small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.l-footer {
  .wrapper {
    position: relative;
    border-top: 1px solid var(--color-border);
    padding-block: var(--size-32) var(--size-80);
    text-align: center;
  }
  .wrapper::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 1px;
    background-color: var(--color-white-light);
  }
  .body {
    margin-top: var(--size-16);
    text-align: center;
  }
  .title {
    color: var(--color-white-dark);
    font-weight: var(--font-weight-medium);
    font-size: 1.6rem;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: var(--size-12);
    margin-top: var(--size-16);
  }
  .infoSection {
    padding: var(--size-16);
    background-color: var(--color-black-light);
    border-radius: var(--radius-md);
    text-align: left;
  }
  .infoTitle {
    font-size: 1.2rem;
  }
  .infoText {
    margin-top: var(--size-8);
    color: var(--color-white-dark);
  }
  .note {
    margin-top: var(--size-8);
    font-size: 1.2rem;
  }
  .bottom {
    margin-top: var(--size-48);
  }
  .copyright {
    display: block;
    font-size: 1.1rem;
  }
}
</style>
