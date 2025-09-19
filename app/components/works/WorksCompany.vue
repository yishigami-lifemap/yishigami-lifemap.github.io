<script setup lang="ts">
// 会社情報の型定義
interface Company {
  id: string;
  name: string;
  role: string[];
  type: string;
  status: string;
  year: string;
  mainTasks: string;
  projects?: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  articles?: Array<{
    href: string;
    title: string;
  }>;
}

// WordPress REST APIで取得したデータの型を定義
interface WebPost {
  id: number;
  title: { rendered: string };
  acf: {
    web__date: string;
    web__thumb: string;
  };
}

// Props定義
interface Props {
  company: Company;
  siteData?: WebPost[];
  isSiteLoading?: boolean;
  isSiteError?: string;
  onRetry?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="p-company">
    <div class="p-company__wrapper">
      <div class="p-company__head">
        <!-- タグ -->
        <div class="p-company__tags">
          <span class="p-company__tag">{{ company.type }}</span>
          <span class="p-company__tag">{{ company.status }}</span>
        </div>
        <!-- 会社情報 -->
        <div class="p-company__info">
          <h3 class="p-company__name">{{ company.name }}</h3>
          <ul class="p-company__role">
            <li v-for="role in company.role" :key="role">
              {{ role }}
            </li>
          </ul>
        </div>
      </div>
      <div class="p-company__body">
        <!-- 主な業務内容 -->
        <div class="p-company__section">
          <h4 class="p-company__sectionTitle">主な業務内容</h4>
          <div class="p-company__sectionBody">
            <p v-html="company.mainTasks"></p>
          </div>
        </div>

        <!-- 主な担当プロジェクト -->
        <div v-if="company.projects">
          <div class="p-company__section">
            <h4 class="p-company__sectionTitle">主な担当プロジェクト</h4>
            <div class="p-company__sectionBody">
              <div class="p-company__projects">
                <WorksProject
                  v-for="project in company.projects"
                  :key="project.id"
                  :project="project"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 主な制作実績 -->
        <div v-if="company.id === 'studio-nnc'">
          <div class="p-company__section">
            <h4 class="p-company__sectionTitle">主な制作実績</h4>
            <div class="p-company__sectionBody">
              <div class="p-company__projects">
                <!-- ローディング状態 -->
                <div v-if="isSiteLoading">
                  <CommonLoading />
                </div>
                <!-- エラー状態 -->
                <div v-else-if="isSiteError">
                  <p>{{ isSiteError }}</p>
                  <CommonRetryButton @click="onRetry">
                    データを再取得する
                  </CommonRetryButton>
                </div>
                <!-- データ表示 -->
                <div v-else class="p-company__projects">
                  <WorksSites
                    v-for="site in siteData"
                    :key="site.id"
                    :site="site"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 技術記事 -->
        <div v-if="company.articles">
          <div class="p-company__section">
            <h4 class="p-company__sectionTitle">開発記事</h4>
            <div class="p-company__sectionBody">
              <WorksArticle :articles="company.articles" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-company {
  .p-company__wrapper {
    position: relative;
    padding: var(--size-24);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background-color: var(--color-black-dark);
  }
  .p-company__wrapper::before {
    content: "";
    position: absolute;
    top: var(--size-40);
    right: 100%;
    display: block;
    width: 69px;
    height: 1px;
    background-color: var(--color-border);
  }
  .p-company__head {
    padding-bottom: var(--size-20);
    border-bottom: 1px solid var(--color-border);
  }
  .p-company__tags {
    display: flex;
    gap: var(--size-8);
  }
  .p-company__tag {
    padding: var(--size-4) var(--size-16);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-base);
    color: var(--color-text-pimary);
    font-size: 1.2rem;
  }
  .p-company__info {
    margin-top: var(--size-8);
  }
  .p-company__name {
    font-size: 2.4rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-white-light);
  }
  .p-company__role {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.24rem;
  }
  .p-company__role > li + li::before {
    content: "/";
    margin: 0 0.5em;
    color: var(--color-text-tertiary);
  }
  .p-company__body {
    margin-top: var(--size-28);
  }
  .p-company__section {
    margin-top: var(--size-24);
  }
  .p-company__sectionTitle {
    font-size: 1.6rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-white-dark);
  }
  .p-company__sectionBody {
    margin-top: var(--size-8);
  }
  .p-company__projects {
    display: flex;
    flex-direction: column;
    gap: var(--size-4);
  }
}
</style>
