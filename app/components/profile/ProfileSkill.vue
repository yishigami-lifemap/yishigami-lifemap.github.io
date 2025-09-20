<script setup lang="ts">
interface Skill {
  name: string;
  level: "expert" | "intermediate" | "beginner";
}
interface Tool {
  label: string;
  value: string[];
}

// 全スキル
// 業務レベルで利用できる：expert
// 業務で使用した経験はあるがもっと習熟が必要：intermediate
// 業務での使用経験なし：beginner
const allSkills: Skill[] = [
  { name: "HTML", level: "expert" },
  { name: "CSS", level: "expert" },
  { name: "Sass", level: "expert" },
  { name: "Tailwind CSS", level: "intermediate" },
  { name: "JavaScript", level: "expert" },
  { name: "jQuery", level: "expert" },
  { name: "TypeScript", level: "beginner" },
  { name: "Vue.js", level: "intermediate" },
  { name: "Nuxt.js", level: "intermediate" },
  { name: "GSAP", level: "expert" },
  { name: "WordPress", level: "expert" },
  { name: "AdobeXD", level: "expert" },
  { name: "Figma", level: "intermediate" },
];
// ツール
const tools: Tool[] = [
  { label: "バージョン管理", value: ["GitHub"] },
  { label: "タスク管理", value: ["Jooto", "Zoho Projects"] },
  { label: "チャットツール", value: ["Chatwork", "Slack"] },
];

// 習熟度ごとにグループ化
const skillGroups = computed(() => {
  // 各レベルのスキル名を取得する関数
  const getSkillNamesByLevel = (targetLevel: string) => {
    const result = [];
    for (const skill of allSkills) {
      if (skill.level === targetLevel) {
        result.push(skill.name);
      }
    }
    return result;
  };
  // レベル別のグループを作成
  const groups = [
    {
      title: "業務レベルで利用できる",
      level: "expert" as const,
      skills: getSkillNamesByLevel("expert"),
    },
    {
      title: "業務で使用した経験はあるがもっと習熟が必要",
      level: "intermediate" as const,
      skills: getSkillNamesByLevel("intermediate"),
    },
    {
      title: "業務での使用経験なし",
      level: "beginner" as const,
      skills: getSkillNamesByLevel("beginner"),
    },
  ];
  // 空のグループを除外
  return groups.filter((group) => group.skills.length > 0);
});
</script>

<template>
  <div class="p-skill">
    <div class="p-skill__wrapper">
      <div class="p-skill__main">
        <div class="p-skill__head">
          <h2 id="skills-heading" class="p-skill__title">Skills</h2>
          <ul class="p-skill__list">
            {{
              allSkills.map((skill) => skill.name).join(" / ")
            }}
          </ul>
        </div>
        <div class="p-skill__body">
          <!-- skill -->
          <div class="p-skill__cards">
            <div
              v-for="group in skillGroups"
              :key="group.title"
              class="p-skill__card"
            >
              <h3 class="p-skill__cardTitle">{{ group.title }}</h3>
              <div class="p-skill__cardMain">
                <ul class="p-skill__chips">
                  <li
                    v-for="skill in group.skills"
                    :key="skill"
                    class="p-skill__chip"
                  >
                    {{ skill }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- tool -->
          <div class="p-skill__tools">
            <div
              v-for="tool in tools"
              :key="tool.label"
              class="p-skill__toolItem"
            >
              <div class="p-skill__toolCard">
                <p class="p-skill__toolLabel">{{ tool.label }}</p>
                <p class="p-skill__toolValue">{{ tool.value.join(" / ") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-skill {
  .p-skill__wrapper {
    container: p-skill__wrapper / inline-size;
  }
  .p-skill__main {
    padding: 24px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background-color: var(--color-black-dark);
  }
  .p-skill__head {
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    gap: 24px;
  }
  .p-skill__title {
    border-right: 1px solid var(--color-border);
    color: var(--color-white-dark);
    font-size: 2.6rem;
    font-weight: var(--font-weight-bold);
    text-align: center;
  }
  .p-skill__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    color: var(--color-text-tertiary);
    font-size: 1.2rem;
    font-weight: var(--font-weight-medium);
  }
  .p-skill__body {
    margin-top: 20px;
  }
  .p-skill__cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .p-skill__card {
    padding: 16px 24px;
    border-radius: var(--radius-sm);
    background-color: var(--color-black-light);
  }
  .p-skill__cardTitle {
    color: var(--color-text-tertiary);
    font-size: 1.2rem;
    font-weight: var(--font-weight-medium);
  }
  .p-skill__cardMain {
    margin-top: 12px;
    margin-left: 1em;
  }
  .p-skill__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .p-skill__chip {
    display: inline-block;
    padding: 4px 12px;
    border-radius: var(--radius-full);
    border: 1px solid var(--color-border);
    background-color: var(--color-black-base);
    color: var(--color-white-dark);
    font-size: 1.2rem;
  }
  /* tools */
  .p-skill__tools {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 20px;
    padding-top: 12px;
    border-top: 1px solid var(--color-border);
  }
  .p-skill__toolCard {
    padding: 8px 16px 12px;
    border-right: 1px solid var(--color-border);
  }
  .p-skill__toolLabel {
    color: var(--color-text-tertiary);
    font-size: 1.2rem;
  }
  .p-skill__toolValue {
    margin-top: 8px;
    color: var(--color-white-light);
    font-size: 1.3rem;
  }
  @container p-skill__wrapper (max-width: 550px) {
    .p-skill__head {
      grid-template-columns: 1fr;
      gap: 1cqw;
    }
    .p-skill__title {
      border-right: unset;
    }
    .p-skill__body {
      margin-top: 4cqw;
    }
    .p-skill__card {
      padding: 3cqw 5cqw;
    }
    .p-skill__cardMain {
      margin-top: 1cqw;
    }
    .p-skill__chips {
      gap: 4px;
    }
    .p-skill__tools {
      grid-template-columns: 1fr;
    }
    .p-skill__toolCard {
      display: grid;
      grid-template-columns: 36% 1fr;
      padding: 2cqw;
    }
    .p-skill__toolValue {
      margin-top: 0;
    }
  }
}
</style>
