<script setup lang="ts">
interface TimelineItem {
  year: string;
  paragraphs: string[];
}

const items: TimelineItem[] = [
  {
    year: "2023",
    paragraphs: [
      "株式会社ライフマップに入社。既存サイトのUI改善が主な業務で、デザインからコーディングまでを担当。また、WordPressで構築された特集サイトの改修も担当。",
    ],
  },
  {
    year: "2021",
    paragraphs: [
      "「合同会社 STUDIO NNc」 として法人化。業務では、主にコーディング・CMS構築を担当する。映画やアニメの公式サイト・キャンペーンサイトの実装経験あり。",
      "デジハリONLINEカレッジ・大宮校においてWebデザインコースのトレーナーとしても勤務を開始。",
    ],
  },
  {
    year: "2020",
    paragraphs: [
      "Webデザイナー・中里健氏と「Web制作スタジオ・NNc」を共同で立ち上げる。フリーランス同士の提携という形で、受託制作を行う。",
    ],
  },
];
</script>
<template>
  <!-- Timeline -->
  <section class="p-timeline" aria-labelledby="timeline-heading">
    <ol class="p-timeline__years" aria-label="経歴">
      <li v-for="item in items" :key="item.year" class="p-timeline__item">
        <p class="p-timeline__year">{{ item.year }}</p>
        <div class="p-timeline__paragraph">
          <p v-for="(paragraph, index) in item.paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.p-timeline {
  margin-top: var(--size-32);
}
.p-timeline__item {
  position: relative;
  margin-bottom: var(--size-12);
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
</style>
