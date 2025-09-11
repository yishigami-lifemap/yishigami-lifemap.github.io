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
    <span class="sub">{{ sub }}</span>
    <span class="main">{{ main }}</span>
  </h1>
</template>

<style scoped>
.c-pageTitle {
  .sub {
    display: block;
    font-weight: var(--font-weight-medium);
    letter-spacing: 0.15em;
    text-align: center;
  }
  .main {
    display: block;
    font-size: 7.2rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-white-light);
    text-align: center;
  }
  .main::first-letter {
    text-transform: uppercase;
  }
}
</style>
