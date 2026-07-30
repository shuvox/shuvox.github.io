<script lang="ts">
    import { GithubSolid, YoutubeSolid, FilePdfSolid } from "flowbite-svelte-icons";

    export let project: {
        title: string;
        imageUrl: string;
        githubUrl: string;
        youtubeUrl?: string;
        fileUrl?: string;
        tags: string[];
        year: string;
        description: string;
    };

    // Determine if it is a featured project
    const isFeatured = project.title.toLowerCase() === 'eduverse' || project.title.toLowerCase() === 'ashroy';
</script>

<div
    class="p-4 bg-primary_light dark:bg-white/5 dark:backdrop-blur-md dark:border dark:border-white/10 shadow-md rounded-lg flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] dark:hover:shadow-[0_10px_25px_-5px_rgba(56,189,248,0.4)] group"
>
    <!-- Featured Ribbon Overlay -->
    {#if isFeatured}
        <div class="absolute top-0 right-0 overflow-hidden w-24 h-24 pointer-events-none z-20">
            <div class="bg-gradient-to-r from-secondary_light to-teal-400 dark:from-secondary_dark dark:to-cyan-400 text-white dark:text-gray-900 text-[10px] font-bold text-center uppercase py-1 px-4 absolute top-4 -right-8 w-28 rotate-45 shadow-md tracking-wider">
                Featured
            </div>
        </div>
    {/if}

    <!-- Image -->
    <div class="relative overflow-hidden rounded-t-lg mb-4 h-48 w-full">
        <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            class="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
    </div>

    <!-- Title and Links -->
    <div class="flex justify-between items-center mb-2 z-10">
        <h3 class="text-lg font-bold text-primary_dark dark:text-primary_light">
            {project.title}
        </h3>
        <div class="flex gap-3 text-ink_light/80 dark:text-ink_dark/80">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="hover:text-secondary_light dark:hover:text-secondary_dark transition-colors">
                <GithubSolid size="lg" />
            </a>
            {#if project.youtubeUrl}
                <a
                    href={project.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    class="hover:text-secondary_light dark:hover:text-secondary_dark transition-colors"
                >
                    <YoutubeSolid size="lg" />
                </a>
            {/if}
            {#if project.fileUrl}
                <a
                    href={project.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="PDF File"
                    class="hover:text-secondary_light dark:hover:text-secondary_dark transition-colors"
                >
                    <FilePdfSolid size="lg" />
                </a>
            {/if}
        </div>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-1.5 mb-3 items-center z-10">
        {#each project.tags as tag}
            {@const lowerTag = tag.toLowerCase()}
            <span
                class="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-750 dark:text-gray-200 border border-gray-200/50 dark:border-white/5 font-medium transition-all"
            >
                <!-- Next.js Icon -->
                {#if lowerTag === 'next.js'}
                    <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 15.586l-4.502-5.748V16H10.5V8h1.275l4.851 6.191V8h1.586v9.586z" />
                    </svg>
                <!-- PostgreSQL Icon -->
                {:else if lowerTag === 'postgresql' || lowerTag === 'postgres'}
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                    </svg>
                <!-- Node.js Icon -->
                {:else if lowerTag === 'node.js' || lowerTag === 'node'}
                    <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm1 14.5c0 .8-.7 1.5-1.5 1.5S10 17.3 10 16.5V11c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v5.5z" />
                    </svg>
                <!-- React Native / React Icon -->
                {:else if lowerTag === 'react native' || lowerTag === 'react'}
                    <svg class="w-3 h-3 stroke-current animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke-width="2" aria-hidden="true">
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"></ellipse>
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse>
                        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse>
                        <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
                    </svg>
                {/if}
                {tag}
            </span>
        {/each}
    </div>

    <!-- Year & Description -->
    <div class="mt-auto z-10 flex flex-col gap-2">
        <p class="text-xs font-semibold uppercase tracking-wider text-secondary_light dark:text-secondary_dark">
            {project.year}
        </p>
        <p class="text-sm text-ink_light/80 dark:text-ink_dark/80 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
        </p>
    </div>
</div>
