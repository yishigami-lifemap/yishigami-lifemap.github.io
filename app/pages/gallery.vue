<template>
  <div class="p-gallery">
    <div class="p-gallery__head">
      <CommonPageTitle>
        <template v-slot:sub>ギャラリー</template>
        <template v-slot:main>Gallery</template>
      </CommonPageTitle>
    </div>
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
