<script setup lang="ts">
const props = defineProps<{
  sub: string;
  main: string;
}>();
</script>

<template>
  <h1 class="l-pageTitle">
    <span class="l-pageTitle__sub">{{ sub }}</span>
    <span class="l-pageTitle__main">{{ main }}</span>
  </h1>
</template>

<style scoped>
.l-pageTitle {
  .l-pageTitle__sub {
    display: block;
    font-weight: var(--font-weight-medium);
    font-size: clamp(1cqw, 1.4rem, 5cqw);
    letter-spacing: 0.15em;
    text-align: center;
  }
  .l-pageTitle__main {
    display: block;
    font-size: clamp(4cqw, 7.2rem, 12cqw);
    font-weight: var(--font-weight-bold);
    color: var(--color-white-light);
    text-align: center;
    line-height: 1;
  }
  .l-pageTitle__main::first-letter {
    text-transform: uppercase;
  }
}
</style>
