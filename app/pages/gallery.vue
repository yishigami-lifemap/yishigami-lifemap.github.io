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
    <div class="p-gallery__wrapper">
      <div class="p-gallery__container">
        <div class="p-gallery__inner">
          <GalleryViewer />
          <div class="p-gallery__bottom">
            <div class="p-gallery__link">
              <CommonLinkButton href="https://www.instagram.com/romanstein_jp/">
                Instagramで見る
              </CommonLinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-gallery {
  .p-gallery__bottom {
    margin-top: var(--size-24);
  }
  .p-gallery__link {
    max-width: 240px;
    margin-inline: auto;
  }
}
</style>
