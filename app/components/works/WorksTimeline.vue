<template>
  <div class="p-timeline">
    <div class="p-timeline__list">
      <div class="p-timeline__year">2025</div>
      <div class="p-timeline__line"></div>
      <div class="p-timeline__year">2020</div>
    </div>
  </div>
</template>

<style scoped>
.p-timeline {
  height: 100%;
  container: p-timeline / inline-size;
  .p-timeline__list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .p-timeline__line {
    width: 1px;
    height: 100%;
    margin-inline: auto;
    background-color: var(--color-border);
  }
  .p-timeline__year {
    position: relative;
    display: block;
    width: 100%;
    padding-inline: 16px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    background-color: var(--color-black-light);
    font-weight: var(--font-weight-bold);
    font-style: italic;
    text-align: center;
  }
  @container p-timeline (max-width: 79px) {
    .p-timeline__year {
      font-size: 1.2rem;
      padding-inline: 2cqw;
    }
  }
}
</style>
