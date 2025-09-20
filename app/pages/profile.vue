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
    <div class="p-profile__wrapper">
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
  </div>
</template>

<style scoped>
.p-profile {
  .p-profile__wrapper {
    container: p-profile__wrapper / inline-size;
  }
  .p-profile__container {
    max-width: 640px;
    margin-inline: auto;
  }
  .p-profile__history {
    max-width: 520px;
    margin-inline: auto;
    margin-top: 40px;
  }
  .p-profile__skill {
    margin-top: 24px;
  }
  @container p-profile__wrapper (max-width: 520px) {
    .p-profile__history {
      margin-top: 10cqw;
    }
    .p-profile__skill {
      margin-top: 4cqw;
    }
  }
}
</style>
