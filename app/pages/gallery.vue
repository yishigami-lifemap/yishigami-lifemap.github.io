<script setup lang="ts">
definePageMeta({
  pageTitle: {
    sub: "ギャラリー",
    main: "Gallery",
  },
});
</script>

<template>
  <div class="p-gallery">
    <div class="p-gallery__body">
      <GalleryViewer />
    </div>
  </div>
</template>

<style scoped>
.p-gallery {
  .p-gallery__body {
    margin-top: var(--size-80);
  }
}
</style>
