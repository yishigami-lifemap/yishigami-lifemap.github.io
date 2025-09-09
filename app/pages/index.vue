<template>
  <div>
    <!-- タイトル -->
    <CommonPageTitle>
      <template v-slot:sub>Web Developer</template>
      <template v-slot:main>Romanstein</template>
    </CommonPageTitle>

    <!-- アカウント(GitHub Instagram) -->
    <HomeAccount />

    <!-- 下層ページへのリンク -->
    <HomeLinks />
  </div>
</template>

<style scoped></style>
