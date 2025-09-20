<script lang="ts" setup></script>

<template>
  <div class="p-home">
    <div class="p-home__wrapper">
      <!-- アカウント(GitHub Instagram) -->
      <div class="p-home__account">
        <HomeAccount />
      </div>
      <!-- 下層ページへのリンク -->
      <div class="p-home__links">
        <HomeLinks />
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-home {
  .p-home__wrapper {
    container: p-home__wrapper / inlinie-size;
  }
  .p-home__links {
    max-width: 600px;
    margin-top: 24px;
    margin-inline: auto;
  }
}
</style>
