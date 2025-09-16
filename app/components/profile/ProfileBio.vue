<template>
  <section class="p-bio">
    <div class="p-bio__wrapper">
      <div class="p-bio__container">
        <div class="p-bio__inner">
          <div class="p-bio__content">
            <figure class="p-bio__figure">
              <img
                src="assets/images/profile/p-bio__figure@2x.png"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
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
  </section>
</template>

<style scoped>
.p-bio {
  .p-bio__inner {
    padding: var(--size-16) var(--size-24);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-dark);
  }
  .p-bio__content {
    display: grid;
    grid-template-columns: 148px 1fr;
    align-items: center;
    gap: var(--size-24);
  }
  .p-bio__figure {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
  .p-bio__role {
    color: var(--color-text-tertiary);
    font-weight: var(--font-weight-bold);
  }
  .p-bio__name {
    color: var(--color-white-light);
    font-size: 4.4rem;
    font-weight: var(--font-weight-bold);
    line-height: 1.4;
  }
  .p-bio__icons {
    display: flex;
    gap: var(--size-8);
    align-items: center;
  }
}
</style>
