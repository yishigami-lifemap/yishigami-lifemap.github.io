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
    position: relative;
    min-height: 100dvh;
    padding-block: var(--size-48) var(--size-120);
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
</style>
