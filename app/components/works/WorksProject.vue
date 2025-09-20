<script setup lang="ts">
defineProps<Props>();
interface Props {
  project: Project;
}

interface Project {
  id: string;
  title: string;
  description: string;
}
</script>

<template>
  <div class="p-project" :id="`project-${project.id}`">
    <details class="p-project__inner">
      <summary class="p-project__title">
        <span>{{ project.title }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9.433"
          height="8.473"
          viewBox="0 0 9.433 8.473"
          class="p-project__arrow"
        >
          <path
            d="M4.651.62a.4.4,0,0,1,.7,0L9.665,8.293a.4.4,0,0,1-.349.6H.684a.4.4,0,0,1-.349-.6Z"
            transform="translate(9.717 8.889) rotate(180)"
            fill="#4d4d4d"
          />
        </svg>
      </summary>
      <div class="p-project__body">
        <p class="p-project__description">
          {{ project.description }}
        </p>
      </div>
    </details>
  </div>
</template>

<style scoped>
.p-project {
  .p-project__inner {
    border-radius: var(--radius-sm);
    background-color: var(--color-black-light);
    overflow: hidden;
    cursor: pointer;
  }
  .p-project__arrow {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    transition: transform 0.2s ease;
  }
  .p-project__inner[open] .p-project__arrow {
    transform: translateY(-50%) rotate(180deg);
  }
  .p-project__title {
    position: relative;
    padding: 12px 24px;
    padding-right: 2em;
    font-weight: var(--font-weight-medium);
    color: var(--color-white-dark);
  }
  .p-project__body {
    padding: 0 24px 20px;
  }
}
</style>
