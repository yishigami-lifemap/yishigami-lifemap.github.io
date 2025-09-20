<script setup lang="ts">
defineProps<Props>();
interface Props {
  articles: Article[];
}
interface Article {
  title: string;
  href: string;
}
</script>

<template>
  <div class="p-article">
    <p class="p-article__description">
      Zennにて技術記事を執筆・公開。CSSやVueなどのフロントエンドに関する内容が中心。
    </p>
    <ul class="p-article__list">
      <li
        v-for="article in articles"
        :key="article.href"
        class="p-article__item"
      >
        <a :href="article.href" class="p-article__link" target="_blank">
          {{ article.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.p-article {
  .p-article__list {
    margin-top: 0.4em;
  }
  .p-article__item {
    position: relative;
    padding-left: 1em;
    text-indent: -1em;
    margin-bottom: 8px;
    color: var(--color-text-primary);
  }
  .p-article__item::before {
    content: "•";
    margin-right: 4px;
    color: var(--color-text-secondary);
  }
  .p-article__link {
    color: var(--color-white-light);
    text-decoration: underline;
    transition: color 0.2s ease;
  }
  .p-article__link:hover {
    color: var(--color-text-primary);
  }
}
</style>
