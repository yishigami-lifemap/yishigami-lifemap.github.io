<script setup lang="ts">
defineProps<{ href: string }>();
</script>

<template>
  <a :href="href" target="_blank" class="c-linkButton">
    <span class="c-linkButton__label">
      <slot />
    </span>
    <span class="c-linkButton__icon">
      <slot name="icon">
        <svg
          v-if="!$slots.icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </slot>
    </span>
  </a>
</template>

<style scoped>
.c-linkButton {
  position: relative;
  display: block;
  gap: 8px;
  padding: 12px 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background-color: var(--color-black-light);
  color: var(--color-white-light);
  font-size: 1.3rem;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;

  /* フォーカス状態 */
  &:focus-visible {
    outline: 2px solid var(--color-white-light);
    outline-offset: 2px;
  }
}
.c-linkButton__icon {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: var(--color-text-primary);
  transition: transform 0.2s ease;
}
.c-linkButton:hover .c-linkButton__icon {
  transform: translateY(-60%);
}
</style>
