<script setup lang="ts">
const props = defineProps<{
  sub?: string;
  main?: string;
}>();
const sub = computed(() => props.sub ?? "");
const main = computed(() => props.main ?? "");
</script>

<template>
  <h1 class="c-pageTitle">
    <span class="c-pageTitle__sub">{{ sub }}</span>
    <span class="c-pageTitle__main">{{ main }}</span>
  </h1>
</template>

<style scoped>
.c-pageTitle {
  .c-pageTitle__sub {
    display: block;
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.15em;
    text-align: center;
  }
  .c-pageTitle__main {
    display: block;
    font-size: 7.2rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-white-light);
    text-align: center;
    line-height: 1;
  }
  .c-pageTitle__main::first-letter {
    text-transform: uppercase;
  }
}
</style>
