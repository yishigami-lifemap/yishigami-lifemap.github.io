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
            <div class="l-app__navigation l-app__navigation--header">
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
    container: l-app__wrapper / inline-size;
  }
  .l-app__wrapper::before {
    content: "Romanstein";
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
    text-align: center;
    font-weight: var(--font-weight-bold);
    font-style: italic;
    font-size: clamp(4cqw, 12rem, 14cqw);
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
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .l-app__pageTitle {
    margin-top: 30px;
  }
  .l-app__main {
    position: relative;
    width: 92%;
    max-width: var(--container-md);
    margin-top: 64px;
    margin-inline: auto;
  }
  .l-app__footer {
    margin-top: 100px;
  }
  @container l-app__wrapper (max-width: 580px) {
    .l-app__navigation--header {
      display: none;
    }
    .l-app__navigation--bottom {
      bottom: 0;
    }
    .l-app__pageTitle {
      margin-top: 2cqw;
    }
    .l-app__main {
      margin-top: 10cqw;
    }
    .l-app__footer {
      margin-top: 20cqw;
    }
  }
}
</style>
