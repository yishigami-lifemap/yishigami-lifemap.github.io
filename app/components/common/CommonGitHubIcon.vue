<template>
  <div class="c-githubIcon">
    <a
      href="https://github.com/romansteinjp"
      target="_blank"
      class="c-githubIcon__anchor"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13.549"
        height="14.353"
        viewBox="0 0 13.549 14.353"
      >
        <path
          d="M7.308,12.553C4.231,13.476,4.231,11.015,3,10.707M11.615,14.4V12.018a2.074,2.074,0,0,0-.578-1.606C12.969,10.2,15,9.464,15,6.1A3.347,3.347,0,0,0,14.077,3.8a3.12,3.12,0,0,0-.056-2.32s-.726-.215-2.406.911a8.234,8.234,0,0,0-4.308,0C5.628,1.261,4.9,1.476,4.9,1.476A3.12,3.12,0,0,0,4.846,3.8a3.348,3.348,0,0,0-.923,2.326c0,3.335,2.031,4.068,3.963,4.308a2.074,2.074,0,0,0-.578,1.588V14.4"
          transform="translate(-2.151 -0.746)"
          fill="none"
          stroke="#7e7e7e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.4"
        />
      </svg>
    </a>
  </div>
</template>

<style scoped>
.c-githubIcon {
  .c-githubIcon__anchor {
    display: grid;
    place-content: center;
    padding: 8px 12px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    transition: background-color 0.2s var(--easing-outExpo);
  }
  .c-githubIcon__anchor:hover {
    background-color: var(--color-black-light);
  }
}
</style>
