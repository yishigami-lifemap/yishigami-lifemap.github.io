<template>
  <div>
    <CommonPageTitle>
      <template v-slot:sub>制作実績</template>
      <template v-slot:main>Works</template>
    </CommonPageTitle>

    <div v-if="pending">読み込み中...</div>
    <div v-else-if="error">エラー: {{ error.message }}</div>
    <div v-else-if="data">
      <h1>
        {{ data.title.rendered }}
      </h1>

      <!-- ACF データの表示 -->
      <div v-if="data.acf">
        <img
          v-if="data.acf.web__image"
          :src="data.acf.web__image"
          :alt="data.title.rendered"
        />
        <a v-if="data.acf.web__link" :href="data.acf.web__link" target="_blank">
          サイトを見る
        </a>
      </div>

      <div v-html="data.content.rendered"></div>

      <a href="/works">← 作品一覧に戻る</a>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const { data, pending, error } = await useFetch(
  `https://romanstein.jp/wp-json/wp/v2/web/${id}`,
  {
    server: false,
  }
);
</script>
