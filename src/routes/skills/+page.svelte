<script lang="ts">
    import { goto } from "$app/navigation";
    import persistent_store from "$lib/stores/persistentstore";

    import SkillCard from "./SkillCard.svelte";
    import { skills } from "$lib/data/skills";
  let isVisible = true;
    let prevUrl = "/projects";
    let nextUrl = "/education";
</script>

<div class="container mx-auto p-4">
  <!-- Hero Section -->
  <section class="relative py-16 px-4 overflow-hidden">
    <!-- Background decorative elements -->
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-secondary_light/10 dark:bg-secondary_dark/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-secondary_light/5 dark:bg-secondary_dark/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
    ></div>

    <div class="max-w-6xl mx-auto text-center relative z-10">
      <div
        class="transform transition-all duration-1000 ease-out {isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'}"
      >
        <!-- Title with gradient text -->
        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary_dark via-secondary_light to-primary_dark dark:from-primary_light dark:via-secondary_dark dark:to-primary_light bg-clip-text text-transparent animate-fade-in-up"
        >
          Skills
        </h1>

        <!-- Subtitle -->
        <p
          class="text-xl md:text-2xl text-ink_light/80 dark:text-ink_dark/80 mb-8 animate-fade-in-up animate-delay-200"
        >
          A showcase of technical proficiencies and expertise
        </p>
      </div>
    </div>
  </section>
    

    <!-- Skills Cards (Vertical Layout) -->
    <div class="space-y-6">
        {#each skills as skill}
            <SkillCard {skill} />
        {/each}
    </div>

    <!-- Navigation -->
  <div
    class="flex justify-between items-center py-8 border-t border-gray-200 dark:border-gray-700"
  >
    <button
      class="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-ink_light dark:text-ink_dark group hover:scale-105 hover:shadow-lg"
      on:click|stopPropagation={() => {
        $persistent_store.activeUrl = prevUrl;
        localStorage.setItem(
          "persistent_store",
          JSON.stringify($persistent_store)
        );
        goto(prevUrl);
      }}
    >
      <svg
        class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Previous</span>
    </button>

    <button
      class="flex items-center space-x-2 px-6 py-3 rounded-lg bg-secondary_light dark:bg-secondary_dark hover:bg-secondary_light/90 dark:hover:bg-secondary_dark/90 transition-all duration-300 text-white group hover:scale-105 hover:shadow-lg"
      on:click|stopPropagation={() => {
        $persistent_store.activeUrl = nextUrl;
        localStorage.setItem(
          "persistent_store",
          JSON.stringify($persistent_store)
        );
        goto(nextUrl);
      }}
    >
      <span>Next</span>
      <svg
        class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>
