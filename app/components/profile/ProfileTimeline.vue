<script setup lang="ts">
interface TimelineItem {
  year: string;
  paragraphs: string[];
}

const items: TimelineItem[] = [
  {
    year: "2023",
    paragraphs: [
      "株式会社ライフマップに入社。既存サイトのUI改修が主な業務で、デザインからコーディングまでを担当。また、WordPressで構築された特集サイトの改修も担当。",
    ],
  },
  {
    year: "2021",
    paragraphs: [
      "「合同会社 STUDIO NNC」として法人化。業務では、主にコーディング・CMS構築を担当する。映画やアニメの公式サイト・キャンペーンサイトの実装経験あり。デジタルハリウッド池袋・大宮校においてWebデザインコースのトレーナーとしても勤務を開始。",
    ],
  },
  {
    year: "2020",
    paragraphs: [
      "Webデザイナー・中里寛氏と「Web制作スタジオ・NNC」を共同で立ち上げる。フリーランス同士の提携という形で、受託制作などを行う。",
    ],
  },
];
</script>

<template>
  <!-- Timeline -->
  <section class="p-timeline">
    <div class="p-timeline__container">
      <ol class="p-timeline__list">
        <li v-for="item in items" :key="item.year" class="p-timeline__item">
          <p class="p-timeline__year">{{ item.year }}</p>
          <div class="p-timeline__paragraph">
            <p v-for="(paragraph, index) in item.paragraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.p-timeline {
  .p-timeline__container {
    max-width: 560px;
    margin-inline: auto;
  }
  .p-timeline__list {
    display: flex;
    flex-direction: column;
    gap: var(--size-16);
  }
  .p-timeline__item {
    position: relative;
    border-top: 1px solid var(--color-border);
  }
  .p-timeline__year {
    position: absolute;
    top: -14px;
    left: 0;
    width: fit-content;
    padding: var(--size-4) var(--size-20);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-light);
    color: var(--color-text-tertiary);
    font-style: italic;
    font-weight: var(--font-weight-bold);
  }
  .p-timeline__paragraph {
    padding: var(--size-28) var(--size-32) var(--size-24);
  }
}
</style>
