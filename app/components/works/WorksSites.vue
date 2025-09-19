<script lang="ts" setup>
defineProps<Props>();
interface Props {
  site: Site;
}

interface Site {
  id: string;
  title: {
    rendered: string;
  };
  acf: {
    web__thumb: string;
    web__date: string;
  };
}
</script>

<template>
  <div class="p-sites">
    <NuxtLink :to="`/works/${site.id}`" class="p-sites__link">
      <div class="p-sites__thumbnail">
        <img :src="site.acf.web__thumb" alt="" />
      </div>
      <div class="p-sites__text">
        <p class="p-sites__year">
          {{ site.acf.web__date }}
        </p>
        <h3 class="p-sites__title">
          {{ site.title.rendered }}
        </h3>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.p-sites {
  .p-sites__link {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--size-24);
    padding: var(--size-12) var(--size-24);
    border-radius: var(--radius-sm);
    background-color: var(--color-black-light);
    transition: background-color 0.24s var(--easing-outExpo);
  }
  .p-sites__link:hover {
    background-color: var(--color-black-base);
  }
  .p-sites__thumbnail {
    background-color: var(--color-black-light);
    img {
      border-radius: var(--size-4);
    }
  }
  .p-sites__text {
    padding-top: 1em;
  }
  .p-sites__year {
    color: var(--color-text-tertiary);
    font-size: 1.2rem;
    font-weight: var(--font-weight-bold);
  }
  .p-sites__title {
    color: var(--color-white-dark);
    font-size: 1.6rem;
    font-weight: var(--font-weight-medium);
  }
}
</style>
