<script setup lang="ts">
definePageMeta({
  pageTitle: {
    sub: "プロフィール",
    main: "profile",
  },
});
</script>
<template>
  <div class="p-profile">
    <div class="p-profile__container">
      <div class="p-profile__inner">
        <section class="p-profile__bio">
          <ProfileBio />
        </section>
        <section class="p-profile__history">
          <ProfileHistory />
        </section>
        <section class="p-profile__skill">
          <ProfileSkill />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-profile {
  .p-profile__container {
    max-width: 640px;
    margin-inline: auto;
  }
  .p-profile__history {
    max-width: 520px;
    margin-inline: auto;
    margin-top: var(--size-40);
  }
  .p-profile__skill {
    margin-top: var(--size-24);
  }
}
</style>
