<script lang="ts" setup></script>

<template>
  <div class="p-home">
    <!-- アカウント(GitHub Instagram) -->
    <div class="p-home__account">
      <HomeAccount />
    </div>
    <!-- 下層ページへのリンク -->
    <div class="p-home__links">
      <HomeLinks />
    </div>
  </div>
</template>

<style scoped>
.p-home {
  container-type: inline-size;
  container-name: p-home;
  .p-home__links {
    max-width: 600px;
    margin-top: 3cqw;
    margin-inline: auto;
  }
}
</style>
