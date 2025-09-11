<template>
  <h2 class="c-pageTitle">
    <span class="sub">
      <slot name="sub" />
    </span>
    <span class="main">
      <slot name="main" />
    </span>
  </h2>
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
