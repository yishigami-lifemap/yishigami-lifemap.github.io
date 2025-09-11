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
  .p-home__account {
    margin-top: 0em;
  }
  .p-home__links {
    margin-top: var(--size-32);
  }
}
</style>
