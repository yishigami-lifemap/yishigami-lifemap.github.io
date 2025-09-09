<template>
  <AppHeader />
  <div>
    <NuxtPage />
  </div>
  <div style="margin-top: 120px">
    <AppFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10px);
  transform: translateX(10px);
}
</style>
