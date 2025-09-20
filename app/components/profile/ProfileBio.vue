<template>
  <div class="p-bio">
    <div class="p-bio__wrapper">
      <div class="p-bio__main">
        <div class="p-bio__content">
          <div class="p-bio__figure">
            <img
              src="assets/images/profile/p-bio__figure@2x.png"
              alt="Romanstein"
              width="140"
              height="140"
            />
          </div>
          <div class="p-bio__summary">
            <p class="p-bio__role">Web Developer</p>
            <p class="p-bio__name">Romanstein</p>
            <div class="p-bio__icons">
              <CommonGitHubIcon />
              <CommonInstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-bio {
  .p-bio__wrapper {
    container: p-bio__wrapper / inline-size;
  }
  .p-bio__main {
    padding: 16px 20px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-dark);
  }
  .p-bio__content {
    display: grid;
    grid-template-columns: 148px 1fr;
    align-items: center;
    gap: 24px;
  }
  .p-bio__figure {
    display: grid;
    place-content: center;
    width: 100%;
  }
  .p-bio__role {
    color: var(--color-text-tertiary);
    font-weight: var(--font-weight-bold);
  }
  .p-bio__name {
    color: var(--color-white-light);
    font-size: 4.4rem;
    font-weight: var(--font-weight-bold);
    line-height: 1;
  }
  .p-bio__icons {
    display: flex;
    gap: 8px;
    margin-top: 10px;
    align-items: center;
  }
  @container p-bio__wrapper (max-width: 480px) {
    .p-bio__main {
      padding: 2cqw 3cqw;
    }
    .p-bio__content {
      grid-template-columns: 30cqw 1fr;
      gap: 4cqw;
    }
    .p-bio__name {
      font-size: 8cqw;
    }
    .p-bio__icons {
      margin-top: 2cqw;
    }
  }
}
</style>
