<script lang="ts">
  import { onMount } from "svelte";

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;
    }, 200);
  });
</script>

<div class="flex justify-center lg:justify-start space-x-4 min-h-[32px]">
  {#if isLoaded}
    <a
      href="https://www.linkedin.com/in/ShadmanSShuvo"
      target="_blank"
      aria-label="LinkedIn"
      class="group transform hover:scale-110 transition-all duration-300 hover:rotate-3 animate-fade-in-up"
    >
      <img
        src="https://img.shields.io/badge/LinkedIn-0ea5e9?style=flat&logo=linkedin&logoColor=white"
        alt="LinkedIn"
        class="h-8 w-auto transition-all duration-300 group-hover:shadow-lg"
      />
    </a>
    <a
      href="https://github.com/ShadmanSShuvo"
      target="_blank"
      aria-label="GitHub"
      class="group transform hover:scale-110 transition-all duration-300 hover:-rotate-3 animate-fade-in-up animate-delay-200"
    >
      <img
        src="https://img.shields.io/badge/Github-0ea5e9?style=flat&logo=github&logoColor=white"
        alt="GitHub"
        class="h-8 w-auto transition-all duration-300 group-hover:shadow-lg"
      />
    </a>
    <a
      href="https://www.youtube.com/@Shadman_Shuvo"
      target="_blank"
      aria-label="Youtube"
      class="group transform hover:scale-110 transition-all duration-300 hover:rotate-3 animate-fade-in-up animate-delay-400"
    >
      <img
        src="https://img.shields.io/badge/Youtube-0ea5e9?style=flat&logo=youtube&logoColor=white"
        alt="Youtube"
        class="h-8 w-auto transition-all duration-300 group-hover:shadow-lg"
      />
    </a>
  {/if}
</div>
