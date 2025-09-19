<template>
  <div class="c-retryButton">
    <button class="c-retryButton__content">
      <slot />
    </button>
  </div>
</template>

<style scoped>
.c-retryButton {
  .c-retryButton__content {
    display: block;
    padding: 4px 24px;
    background: var(--color-black-light);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    cursor: pointer;
  }
}
</style>
