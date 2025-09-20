<script setup lang="ts">
interface TextLink {
  to: string;
  label: string;
}

const route = useRoute();

const textLinks: TextLink[] = [
  { to: "/", label: "Home" },
  { to: "/works", label: "Works" },
  { to: "/profile", label: "Profile" },
  { to: "/gallery", label: "Gallery" },
];

const isActive = (path: string) => {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
};
</script>

<template>
  <nav class="c-navigation">
    <div class="c-navigation__wrapper">
      <div class="c-navigation__container">
        <div class="c-navigation__inner">
          <div class="c-navigation__content">
            <!-- テキストリンク -->
            <div class="c-navigation__textLinks">
              <NuxtLink
                v-for="link in textLinks"
                :key="link.to"
                :to="link.to"
                class="c-navigation__link"
                :class="{ 'is-current': isActive(link.to) }"
              >
                {{ link.label }}
              </NuxtLink>
            </div>

            <!-- アイコンリンク -->
            <dic class="c-navigation__icons">
              <div class="c-navigation__github">
                <CommonGitHubIcon />
              </div>
              <div class="c-navigation__instagram">
                <CommonInstagramIcon />
              </div>
            </dic>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.c-navigation {
  .c-navigation__wrapper {
    container: c-navigation__wrapper / inline-size;
  }
  .c-navigation__container {
    padding: 4px;
    padding-right: 20px;
    background: var(--color-black-dark);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
  }
  .c-navigation__content {
    display: grid;
    grid-template-columns: 84% 1fr;
    align-items: center;
    gap: 8px;
  }
  .c-navigation__textLinks {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
  }
  .c-navigation__link {
    padding: 8px;
    border-radius: var(--radius-full);
    text-align: center;
    transition: all 0.3s var(--easing-outExpo);
  }
  .c-navigation__link.is-current,
  .c-navigation__link:hover {
    background-color: var(--color-black-base);
    font-weight: var(--font-weight-medium);
  }
  .c-navigation__icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
  @container c-navigation__wrapper (max-width: 550px) {
    .c-navigation__container {
      border-radius: 12px 12px 0 0;
      padding: 4px;
    }
    .c-navigation__content {
      grid-template-columns: 100%;
    }
    .c-navigation__textLinks {
      border-radius: 9px;
    }
    .c-navigation__link {
      border-radius: 6px;
    }
    .c-navigation__icons {
      display: none;
    }
  }
}
</style>
