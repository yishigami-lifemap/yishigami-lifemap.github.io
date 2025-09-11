<template>
  <div class="p-gallery">
    <CommonPageTitle>
      <template v-slot:sub>ギャラリー</template>
      <template v-slot:main>Gallery</template>
    </CommonPageTitle>
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
