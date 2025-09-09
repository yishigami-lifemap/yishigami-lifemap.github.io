<template>
  <div>
    <CommonPageTitle>
      <template v-slot:sub>制作実績</template>
      <template v-slot:main>Works</template>
    </CommonPageTitle>

    <div v-if="pending">読み込み中...</div>
    <div v-else-if="error">エラー: {{ error.message }}</div>
    <div v-else>
      <div v-for="post in data" :key="post.id">
        <h2 v-html="post.title.rendered"></h2>

        <!-- ACF データの表示 -->
        <div v-if="post.acf">
          <a :href="`/works/${post.id}`">
            <img
              v-if="post.acf.web__thumb"
              :src="post.acf.web__thumb"
              :alt="post.title.rendered"
              width="400"
            />
          </a>
        </div>
        <!-- <a :href="post.link" target="_blank">WordPressで見る</a> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch(
  "https://romanstein.jp/wp-json/wp/v2/web",
  {
    query: { per_page: 10, orderby: "date", order: "desc" },
    server: false,
  }
);
</script>
