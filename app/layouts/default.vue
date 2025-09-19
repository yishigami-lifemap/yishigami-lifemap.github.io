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
  <div class="l-app">
    <div class="l-app__wrapper">
      <div class="l-app__container">
        <div class="l-app__inner">
          <header class="l-app__header">
            <div class="l-app__navigation">
              <CommonNavigation />
            </div>
            <div class="l-app__pageTitle">
              <AppPageTitle :sub="pageTitle.sub" :main="pageTitle.main" />
            </div>
          </header>
          <main class="l-app__main">
            <slot />
          </main>
          <footer class="l-app__footer">
            <div class="l-app__siteInfo">
              <AppSiteInfo />
            </div>
            <div class="l-app__navigation l-app__navigation--bottom">
              <CommonNavigation />
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.l-app {
  .l-app__wrapper {
    position: relative;
    padding-block: 32px 124px;
  }
  .l-app__wrapper::before {
    content: "Romanstein";
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: var(--font-weight-bold);
    font-style: italic;
    font-size: 12rem;
    color: hsla(0, 0%, 24%, 0.2);
  }
  .l-app__container {
    position: relative;
  }
  .l-app__navigation {
    width: 100%;
    max-width: 580px;
    margin-inline: auto;
  }
  .l-app__navigation--bottom {
    position: fixed;
    bottom: var(--size-20);
    left: 50%;
    transform: translateX(-50%);
  }
  .l-app__pageTitle {
    margin-top: var(--size-40);
  }
  .l-app__main {
    position: relative;
    max-width: var(--container-md);
    margin-top: 80px;
    margin-inline: auto;
  }
  .l-app__footer {
    margin-top: 100px;
  }
}
</style>
