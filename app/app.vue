<template>
  <AppHeader />
  <main class="l-main">
    <div class="wrapper">
      <div class="container">
        <NuxtPage />
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.24s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(2px);
  transform: translateX(4px);
}

.l-main {
  .wrapper {
    padding-block: var(--size-48) var(--size-120);
  }
  .container {
    max-width: var(--container-md);
    margin-inline: auto;
  }
}
</style>
