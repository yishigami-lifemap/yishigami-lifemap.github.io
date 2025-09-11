<script setup lang="ts">
definePageMeta({
  pageTitle: {
    sub: "プロフィール",
    main: "profile",
  },
});
</script>
<template>
  <div>
    <!-- Profile header: avatar, name, icons -->
    <section class="p-profile" aria-labelledby="profile-heading">
      <h2 id="profile-heading" class="p-profile__srOnly">Profile</h2>
      <div class="p-profile__head">
        <figure class="p-profile__avatar" aria-hidden="true">
          <img src="/favicon.ico" alt="" loading="lazy" decoding="async" />
        </figure>
        <div class="p-profile__summary">
          <p class="p-profile__role">Web Developer</p>
          <p class="p-profile__name">Romanstein</p>
          <div class="p-profile__icons">
            <CommonGitHubIcon />
            <CommonInstagramIcon />
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <ProfileTimeline />

    <!-- Skill & Tools -->
    <section class="p-skill" aria-labelledby="skills-heading">
      <h2 id="skills-heading" class="p-skill__title">Skills</h2>

      <div class="p-skill__group">
        <h3 class="p-skill__groupTitle">業務レベルで利用できる</h3>
        <div class="p-skill__card">
          <ul class="p-skill__chips" role="list">
            <li class="p-skill__chip">HTML</li>
            <li class="p-skill__chip">CSS</li>
            <li class="p-skill__chip">Sass</li>
            <li class="p-skill__chip">JavaScript</li>
            <li class="p-skill__chip">jQuery</li>
            <li class="p-skill__chip">GSAP</li>
            <li class="p-skill__chip">Vue.js</li>
            <li class="p-skill__chip">Nuxt.js</li>
            <li class="p-skill__chip">WordPress</li>
            <li class="p-skill__chip">AdobeXD</li>
          </ul>
        </div>
      </div>

      <div class="p-skill__group">
        <h3 class="p-skill__groupTitle">
          業務で使用した経験はあるがもっと習熟が必要
        </h3>
        <div class="p-skill__card">
          <ul class="p-skill__chips" role="list">
            <li class="p-skill__chip">Vue.js</li>
            <li class="p-skill__chip">Nuxt.js</li>
            <li class="p-skill__chip">Figma</li>
          </ul>
        </div>
      </div>

      <div class="p-skill__group">
        <h3 class="p-skill__groupTitle">業務での使用経験なし</h3>
        <div class="p-skill__card">
          <ul class="p-skill__chips" role="list">
            <li class="p-skill__chip">TypeScript</li>
          </ul>
        </div>
      </div>

      <div class="p-skill__tools">
        <div class="p-skill__toolItem">
          <div class="p-skill__toolCard">
            <p class="p-skill__toolLabel">バージョン管理</p>
            <p class="p-skill__toolValue">GitHub</p>
          </div>
        </div>
        <div class="p-skill__toolItem">
          <div class="p-skill__toolCard">
            <p class="p-skill__toolLabel">タスク管理</p>
            <p class="p-skill__toolValue">Jooto / Zoho Projects</p>
          </div>
        </div>
        <div class="p-skill__toolItem">
          <div class="p-skill__toolCard">
            <p class="p-skill__toolLabel">チャットツール</p>
            <p class="p-skill__toolValue">Chatwork / Slack</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* profile header */
.p-profile {
  margin-top: var(--size-16);
}
.p-profile__srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.p-profile__head {
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: center;
  gap: var(--size-16);
}
.p-profile__avatar {
  width: 96px;
  height: 96px;
  margin: 0;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-black-light);
}
.p-profile__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.p-profile__summary {
  display: grid;
  gap: var(--size-8);
}
.p-profile__role {
  margin: 0;
  color: var(--color-text-secondary);
}
.p-profile__name {
  margin: 0;
  color: var(--color-white-light);
  font-size: 2.8rem;
  font-weight: var(--font-weight-bold);
}
.p-profile__icons {
  display: flex;
  gap: 10px;
  align-items: center;
}

/* skill */
.p-skill {
  margin-top: var(--size-32);
}
.p-skill__title {
  margin: 0;
  font-size: 1.6rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
}
.p-skill__group {
  margin-top: var(--size-20);
}
.p-skill__groupTitle {
  margin: 0 0 var(--size-8);
  font-size: 1.4rem;
  color: var(--color-text-secondary);
}
.p-skill__card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-black-light);
  padding: var(--size-16);
}
.p-skill__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-8);
  margin: 0;
  padding: 0;
  list-style: none;
}
.p-skill__chip {
  display: inline-block;
  padding: 6px 10px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  background: var(--color-black-light);
  color: var(--color-text-primary);
  font-size: 1.2rem;
}

/* tools */
.p-skill__tools {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--size-12);
  margin-top: var(--size-20);
}
.p-skill__toolCard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--size-8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-black-light);
  padding: var(--size-12) var(--size-16);
}
.p-skill__toolLabel {
  margin: 0;
  color: var(--color-text-secondary);
}
.p-skill__toolValue {
  margin: 0;
  text-align: right;
  color: var(--color-white-light);
}

@media (min-width: 720px) {
  .p-profile__head {
    grid-template-columns: 112px 1fr;
  }
  .p-profile__avatar {
    width: 112px;
    height: 112px;
  }
  .p-skill__tools {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
