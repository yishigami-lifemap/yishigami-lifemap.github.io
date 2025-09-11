<template>
  <div>
    <AppHeader />
    <main class="l-main">
      <div class="wrapper">
        <div class="container">
          <slot />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
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
