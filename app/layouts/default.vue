<script setup lang="ts">
const route = useRoute();
const pageTitle = computed(() => {
  const meta = route.meta as { pageTitle?: { sub?: string; main?: string } };
  return {
    sub: meta.pageTitle?.sub ?? "Web Developer",
    main: meta.pageTitle?.main ?? "Romanstein",
  };
});
</script>

<template>
  <div>
    <header class="l-header">
      <div class="l-header__navigation">
        <CommonNavigation />
      </div>
      <div class="l-header__pageTitle">
        <CommonPageTitle :sub="pageTitle.sub" :main="pageTitle.main" />
      </div>
    </header>

    <main class="l-main">
      <div class="wrapper">
        <div class="container">
          <slot />
        </div>
      </div>
    </main>
    <AppFooter />
    <div class="l-footer__navigation">
      <CommonNavigation />
    </div>
  </div>
</template>

<style scoped>
.l-main {
  .wrapper {
    position: relative;
    min-height: 50dvh;
    padding-block: var(--size-40) var(--size-120);
  }
  /* .wrapper::before {
    content: "Romanstein";
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    font-weight: var(--font-weight-bold);
    font-style: italic;
    font-size: 12rem;
    color: hsla(0, 0%, 24%, 0.2);
  } */
  .container {
    position: relative;
    max-width: var(--container-md);
    margin-inline: auto;
  }
}
.l-header {
  .l-header__navigation {
    width: 100%;
    max-width: 580px;
    margin-inline: auto;
  }
  .l-header__pageTitle {
    margin-top: var(--size-24);
  }
}
.l-footer__navigation {
  position: fixed;
  bottom: var(--size-20);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 580px;
}
</style>
