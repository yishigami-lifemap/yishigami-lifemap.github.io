<template>
  <div>
    <CommonPageTitle>
      <template v-slot:sub>ギャラリー</template>
      <template v-slot:main>Gallery</template>
    </CommonPageTitle>

    <GalleryViewer />
  </div>
</template>

<style scoped>
.loading,
.error {
  text-align: center;
  padding: 2rem;
}

.retry-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.retry-button:hover {
  background-color: #2980b9;
}

.works {
  .works__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .works__thumbnail {
    width: 100%;
    aspect-ratio: 1/1;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  .modal__inner {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.48);
    backdrop-filter: blur(2px);
  }
  .modal__container {
    max-width: 480px;
    margin: 0 auto;
  }
  .modal__img {
    position: relative;
    width: 100%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
