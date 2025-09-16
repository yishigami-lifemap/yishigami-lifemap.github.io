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
      <div class="p-profile__bio">
        <ProfileBio />
      </div>
      <div class="p-profile__timeline">
        <ProfileTimeline />
      </div>
      <div class="p-profile__skill">
        <ProfileSkill />
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-profile {
  .p-profile__container {
    max-width: 600px;
    margin-inline: auto;
  }
  .p-profile__timeline {
    margin-top: var(--size-40);
  }
  .p-profile__skill {
    margin-top: var(--size-24);
  }
}
</style>
