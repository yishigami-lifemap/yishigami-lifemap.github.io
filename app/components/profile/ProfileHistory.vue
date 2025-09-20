<script setup lang="ts">
interface HistoryItem {
  year: string;
  description: string;
}

const historyItems: HistoryItem[] = [
  {
    year: "2023",
    description:
      "株式会社ライフマップに入社。既存サイトのUI改修が主な業務で、デザインからコーディングまでを担当。また、WordPressで構築された特集サイトの改修も担当。",
  },
  {
    year: "2021",
    description:
      "「合同会社 STUDIO NNC」として法人化。業務では、主にコーディング・CMS構築を担当する。映画やアニメの公式サイト・キャンペーンサイトの実装経験あり。デジタルハリウッド池袋・大宮校においてWebデザインコースのトレーナーとしても勤務を開始。",
  },
  {
    year: "2020",
    description:
      "Webデザイナー・中里寛氏と「Web制作スタジオ・NNC」を共同で立ち上げる。フリーランス同士の提携という形で、受託制作などを行う。",
  },
];
</script>

<template>
  <div class="p-history">
    <div class="p-history__wrapper">
      <ol class="p-history__list">
        <li
          v-for="item in historyItems"
          :key="item.year"
          class="p-history__item"
        >
          <p class="p-history__year">{{ item.year }}</p>
          <div class="p-history__paragraph">
            <p>
              {{ item.description }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.p-history {
  .p-history__wrapper {
    container: p-history__wrapper / inline-size;
  }
  .p-history__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .p-history__item {
    position: relative;
    border-top: 1px solid var(--color-border);
  }
  .p-history__year {
    position: absolute;
    top: -14px;
    left: 0;
    width: fit-content;
    padding: 2px 20px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: var(--color-black-light);
    color: var(--color-text-tertiary);
    font-style: italic;
    font-weight: var(--font-weight-bold);
  }
  .p-history__paragraph {
    padding: 28px 32px 24px;
  }
  @container p-history__wrapper (max-width: 510px) {
    .p-history__list {
      padding-inline: 4cqw;
    }
    .p-history__year {
      font-size: 1.3rem;
    }
    .p-history__paragraph {
      padding: 6cqw 8cqw 4cqw;
      font-size: 1.2rem;
    }
  }
}
</style>
