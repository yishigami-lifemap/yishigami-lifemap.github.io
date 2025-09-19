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
                :class="{ 'c-navigation__link--active': isActive(link.to) }"
              >
                {{ link.label }}
              </NuxtLink>
            </div>

            <!-- アイコンリンク -->
            <dic class="c-navigation__icons">
              <CommonGitHubIcon />
              <CommonInstagramIcon />
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
    background: var(--color-black-dark);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
  }
  .c-navigation__container {
    padding: var(--size-4);
    padding-right: var(--size-20);
  }
  .c-navigation__content {
    display: grid;
    grid-template-columns: 84% 1fr;
    align-items: center;
    gap: var(--size-8);
  }
  .c-navigation__textLinks {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: var(--size-4);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
  }
  .c-navigation__link {
    padding: var(--size-8);
    border-radius: var(--radius-full);
    text-align: center;
    transition: all 0.3s var(--easing-outExpo);
  }
  .c-navigation__link:hover {
    background-color: var(--color-black-base);
    font-weight: var(--font-weight-medium);
  }
  .c-navigation__icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--size-4);
  }
}
</style>
