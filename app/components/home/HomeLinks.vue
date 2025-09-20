<script lang="ts" setup>
// リンクデータの型定義
interface LinkItem {
  to: string;
  en: string;
  jp: string;
  description: string;
}
// リンクデータの定義
const links: LinkItem[] = [
  {
    to: "/works",
    en: "works",
    jp: "制作実績",
    description: "制作実績や担当したプロジェクトの詳細について",
  },
  {
    to: "/profile",
    en: "profile",
    jp: "プロフィール",
    description: "経歴やスキルセット、Romansteinのことについて",
  },
  {
    to: "/gallery",
    en: "gallery",
    jp: "ギャラリー",
    description: "趣味で描いているイラストの一覧",
  },
];
</script>

<template>
  <section class="p-links">
    <div class="p-links__wrapper">
      <ul class="p-links__list">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" class="p-links__anchor">
            <dl class="p-links__item">
              <dt class="p-links__head">
                <p class="p-links__main">{{ link.en }}</p>
                <p class="p-links__sub">{{ link.jp }}</p>
              </dt>
              <dd class="p-links__body">
                <p class="p-links__description">{{ link.description }}</p>
              </dd>
            </dl>
            <span class="p-links__arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="11.696"
                viewBox="0 0 12 11.696"
              >
                <path
                  d="M5.1,3.431,5.7,2.836a.64.64,0,0,1,.908,0l5.207,5.2a.64.64,0,0,1,0,.908L6.6,14.154a.64.64,0,0,1-.908,0L5.1,13.56a.644.644,0,0,1,.011-.919L8.34,9.567H.643A.641.641,0,0,1,0,8.924V8.067a.641.641,0,0,1,.643-.643h7.7L5.113,4.349A.639.639,0,0,1,5.1,3.431Z"
                  transform="translate(0 -2.647)"
                  fill="rgba(135,135,135,0.4)"
                />
              </svg>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.p-links {
  .p-links__wrapper {
    container: p-links__wrapper / inline-size;
  }
  .p-links__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .p-links__anchor {
    position: relative;
    display: block;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-dark);
  }
  .p-links__anchor:hover .p-links__arrow {
    transform: translateX(8px) translateY(-50%);
  }
  .p-links__item {
    position: relative;
    display: grid;
    grid-template-columns: 140px 1fr;
    align-items: center;
    padding: 20px 24px;
  }
  .p-links__head {
    position: relative;
    border-right: 1px solid var(--color-border);
    text-align: center;
  }
  .p-links__main {
    color: var(--color-white-dark);
    font-size: 2rem;
    font-weight: var(--font-weight-bold);
  }
  .p-links__main:first-letter {
    text-transform: uppercase;
  }
  .p-links__sub {
    letter-spacing: 0.1em;
  }
  .p-links__body {
    padding-left: 32px;
  }
  .p-links__description {
    color: var(--color-white-dark);
  }
  .p-links__arrow {
    position: absolute;
    top: 50%;
    right: 5cqw;
    transform: translateY(-50%);
    transition: transform 0.24s var(--easing-outExpo);
  }
  @container p-links__wrapper (max-width: 580px) {
    .p-links__head {
      display: flex;
      align-items: center;
      gap: 2cqw;
      border-right: none;
    }
    .p-links__sub {
      position: relative;
      top: 2px;
      font-size: 1.2rem;
    }
    .p-links__body {
      margin-top: 0.4cqw;
      padding-left: 0;
    }
    .p-links__item {
      display: block;
      padding: 4cqw 8.4cqw 5cqw;
    }
    .p-links__description {
      font-size: 1.3rem;
    }
  }
}
</style>
