<template>
  <footer class="l-siteInfo">
    <div class="l-siteInfo__wrapper">
      <div class="l-siteInfo__content">
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
    </div>
  </footer>
</template>

<style scoped>
.l-siteInfo {
  .l-siteInfo__wrapper {
    container: l-siteInfo__wrapper / inline-size;
  }
  .l-siteInfo__content {
    position: relative;
    border-top: 1px solid var(--color-border);
    padding-top: 32px;
    padding-inline: 20px;
    text-align: center;
  }
  .l-siteInfo__content::after {
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
    margin-top: 16px;
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
    gap: 12px;
    margin-top: 16px;
  }
  .l-siteInfo__infoSection {
    padding: 16px;
    background-color: var(--color-black-light);
    border-radius: var(--radius-md);
    text-align: left;
  }
  .l-siteInfo__infoTitle {
    font-size: 1.2rem;
  }
  .l-siteInfo__infoText {
    margin-top: 8px;
    color: var(--color-white-dark);
  }
  .l-siteInfo__note {
    margin-top: 8px;
    font-size: 1.2rem;
  }
  .l-siteInfo__bottom {
    margin-top: 48px;
  }
  .l-siteInfo__copyright {
    display: block;
    font-size: 1.1rem;
  }
  @container l-siteInfo__wrapper (max-width: 670px) {
    .l-siteInfo__content {
      padding-top: 6cqw;
      padding-inline: 6cqw;
    }
    .l-siteInfo__body {
      margin-top: 2cqw;
      font-size: 1.3rem;
      text-align: left;
    }
    .l-siteInfo__info {
      display: grid;
      grid-template-columns: 60% 1fr;
      align-items: normal;
      gap: 1.4cqw;
      margin-top: 3cqw;
    }
    .l-siteInfo__infoSection {
      padding: 2.8cqw;
    }
    .l-siteInfo__infoText {
      margin-top: 1cqw;
    }
    .l-siteInfo__note {
      font-size: 1.1rem;
      text-align: center;
    }
    .l-siteInfo__copyright {
      font-size: 1rem;
    }
  }
}
</style>
