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
    letter-spacing: 0.15em;
    text-align: center;
  }
  .l-pageTitle__main {
    display: block;
    font-size: 7.2rem;
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
