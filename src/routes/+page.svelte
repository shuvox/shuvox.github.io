<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import dp from "$lib/images/black.png";
  import persistent_store from "$lib/stores/persistentstore";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import SocialLinks from "$lib/components/SocialLinks.svelte";

  let name = "Shadman Shuvo";
  let title = "BUET CSE Undergrad";
  let subtitle = "";

  let isVisible = false;
  let aboutVisible = false;

  onMount(() => {
    // Trigger animations after component mounts
    setTimeout(() => (isVisible = true), 100);

    // Intersection observer for about section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById("about-section");
    if (aboutSection) observer.observe(aboutSection);

    return () => observer.disconnect();
  });

  let prevUrl = "/education";
  let nextUrl = "/achievements";
</script>

<div class="min-h-[80vh] flex flex-col overflow-hidden">
  <!-- Hero Section -->
  <section class="flex-1 flex items-center justify-center py-8 md:py-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <!-- Left Column - Text Content -->
        <div
          class="space-y-6 text-center lg:text-left order-2 lg:order-1 transform transition-all duration-1000 ease-out {isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0'}"
        >
          <!-- Name and Title -->
          <div class="space-y-3">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary_dark dark:text-primary_light leading-tight animate-fade-in-up"
            >
              {name}
            </h1>
            <h2
              class="text-xl md:text-2xl lg:text-3xl font-medium text-secondary_light dark:text-secondary_dark animate-fade-in-up animate-delay-200"
            >
              {title}
            </h2>
            <p
              class="text-base md:text-lg text-ink_light/80 dark:text-ink_dark/80 animate-fade-in-up animate-delay-400"
            >
              {subtitle}
            </p>
          </div>

          <!-- Current Role Highlight -->
          <div
            class="bg-gradient-to-r from-secondary_light/10 to-secondary_light/5 dark:from-secondary_dark/10 dark:to-secondary_dark/5 border-l-4 border-secondary_light dark:border-secondary_dark p-4 rounded-r-lg animate-slide-in-left animate-delay-600 hover:scale-105 transition-transform duration-300"
          >
            <div class="flex items-center space-x-2">
              <div
                class="w-2 h-2 bg-secondary_light dark:bg-secondary_dark rounded-full animate-pulse"
              ></div>
              <span
                class="text-sm font-medium text-secondary_light dark:text-secondary_dark uppercase tracking-wide"
                >Currently</span
              >
            </div>
            <div class="mt-1 font-semibold text-lg">
              <Typewriter words={["Full-Stack Developer", "Machine Learning Enthusiast", "BUET CSE Undergrad"]} />
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-3 animate-fade-in-up animate-delay-800">
            <div
              class="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-ink_light/70 dark:text-ink_dark/70"
            >
              <div
                class="flex items-center space-x-2 hover:text-secondary_light dark:hover:text-secondary_dark transition-colors duration-300"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <span><a href="mailto:sdmnsvo@gmail.com">sdmnsvo@gmail.com</a></span>
              </div>
              <div
                class="flex items-center space-x-2 hover:text-secondary_light dark:hover:text-secondary_dark transition-colors duration-300"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pt-2">
            <SocialLinks />
          </div>
        </div>

        <!-- Right Column - Image -->
        <div
          class="flex justify-center order-1 lg:order-2 transform transition-all duration-1200 ease-out {isVisible
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-10 opacity-0 scale-95'}"
        >
          <div class="relative group">
            <!-- Decorative background -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-secondary_light/20 to-secondary_light/5 dark:from-secondary_dark/20 dark:to-secondary_dark/5 rounded-2xl rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
            ></div>
            <!-- Main image -->
            <img
              src={dp}
              alt="Shadman Shuvo - BUET CSE Undergrad"
              class="relative z-10 rounded-2xl w-64 md:w-80 lg:w-96 h-auto aspect-[3/4] object-cover shadow-2xl border-4 border-white dark:border-gray-800 transition-all duration-500 group-hover:scale-105"
            />
            <!-- Floating elements -->
            <div
              class="absolute -top-4 -right-4 w-8 h-8 bg-secondary_light dark:bg-secondary_dark rounded-full opacity-80 animate-float"
            ></div>
            <div
              class="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary_light dark:bg-secondary_dark rounded-full opacity-60 animate-float animate-delay-1000"
            ></div>
            <div
              class="absolute top-1/2 -left-8 w-4 h-4 bg-secondary_light dark:bg-secondary_dark rounded-full opacity-40 animate-float animate-delay-2000"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Bento Box About Section -->
  <section
    id="about-section"
    class="py-12 md:py-16 border-t border-gray-200 dark:border-gray-700 relative"
  >
    <div class="max-w-6xl mx-auto px-4">
      <div
        class="text-center mb-10 transform transition-all duration-800 {aboutVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'}"
      >
        <h3
          class="text-3xl md:text-4xl font-bold text-primary_dark dark:text-primary_light mb-4"
        >
          About Me
        </h3>
        <div
          class="w-20 h-1 bg-secondary_light dark:bg-secondary_dark mx-auto rounded-full animate-expand-width"
        ></div>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 {aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}">
        <!-- 1. Academic Journey Card (BUET) - Spans 2 columns, 2 rows -->
        <div class="md:col-span-2 md:row-span-2 p-6 bg-gradient-to-br from-primary_light to-gray-50 dark:from-primary_dark dark:to-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-all duration-300">
          <!-- Subtle technical background pattern -->
          <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1.5"/>
                  <circle cx="40" cy="40" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div class="relative z-10 space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold uppercase tracking-wider text-secondary_light dark:text-secondary_dark">Education</span>
              <!-- Graduation Cap Icon -->
              <svg class="w-6 h-6 text-secondary_light dark:text-secondary_dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21l-4.83-3.943a12.083 12.083 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            
            <h4 class="text-2xl font-bold text-primary_dark dark:text-primary_light">
              Bangladesh University of Engineering and Technology
            </h4>
            
            <p class="text-ink_light/80 dark:text-ink_dark/80 leading-relaxed text-sm md:text-base">
              I am a <span class="font-semibold text-secondary_light dark:text-secondary_dark">Computer Science & Engineering (CSE) Undergraduate</span> at BUET. My academic journey has been centered on building a solid foundation in algorithm design, software engineering, databases, and machine learning.
            </p>
            
            <div class="pt-2 flex flex-wrap gap-2">
              <span class="px-2.5 py-1 text-xs rounded-full bg-secondary_light/10 text-secondary_light dark:bg-secondary_dark/10 dark:text-secondary_dark font-medium">HSC batch 2023</span>
              <span class="px-2.5 py-1 text-xs rounded-full bg-secondary_light/10 text-secondary_light dark:bg-secondary_dark/10 dark:text-secondary_dark font-medium">Major in CSE</span>
              <span class="px-2.5 py-1 text-xs rounded-full bg-secondary_light/10 text-secondary_light dark:bg-secondary_dark/10 dark:text-secondary_dark font-medium">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        <!-- 2. Philosophy Card - Spans 1 col, 1 row -->
        <div class="p-6 bg-gradient-to-br from-primary_light to-gray-50 dark:from-primary_dark dark:to-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
          <div class="space-y-3">
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary_light dark:text-secondary_dark">Philosophy</span>
            <blockquote class="text-lg font-medium italic text-secondary_light dark:text-secondary_dark animate-pulse-gentle">
              "Always be happy"
            </blockquote>
          </div>
          <p class="text-xs text-ink_light/70 dark:text-ink_dark/70 leading-relaxed mt-2">
            I believe life is a precious gift meant to be lived with purpose, integrity, and a constant desire to learn. I value meaningful connections, sports, and technical exploration.
          </p>
        </div>

        <!-- 3. Brewing Coffee Card - Spans 1 col, 1 row -->
        <div class="p-6 bg-gradient-to-br from-primary_light to-gray-50 dark:from-primary_dark dark:to-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary_light dark:text-secondary_dark">Interests</span>
            <!-- Coffee Cup Icon -->
            <svg class="w-6 h-6 text-secondary_light dark:text-secondary_dark group-hover:bounce transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 8a3 3 0 013 3v2a3 3 0 01-3 3h-1V8h1zm-4-2c0-1.5-1-2.5-1-2.5S12 5 12 6M10 6c0-1.5-1-2.5-1-2.5S8 5 8 6M6 6c0-1.5-1-2.5-1-2.5S4 5 4 6" />
              <rect x="3" y="8" width="11" height="8" rx="2" />
            </svg>
          </div>
          <div>
            <h5 class="text-base font-bold text-primary_dark dark:text-primary_light mb-1">Brewing Coffee</h5>
            <p class="text-xs text-ink_light/75 dark:text-ink_dark/75">
              Crafting the perfect espresso to fuel late-night coding sessions and debugging sprints.
            </p>
          </div>
        </div>

        <!-- 4. Baking Card - Spans 1 col, 1 row -->
        <div class="p-6 bg-gradient-to-br from-primary_light to-gray-50 dark:from-primary_dark dark:to-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary_light dark:text-secondary_dark">Creative</span>
            <!-- Whisk/Baking Icon -->
            <svg class="w-6 h-6 text-secondary_light dark:text-secondary_dark group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v12M9 6v6M15 6v6M12 15a3 3 0 100 6 3 3 0 000-6zM6 12c0-3.3 2.7-6 6-6s6 2.7 6 6" />
            </svg>
          </div>
          <div>
            <h5 class="text-base font-bold text-primary_dark dark:text-primary_light mb-1">Baking</h5>
            <p class="text-xs text-ink_light/75 dark:text-ink_dark/75">
              The precise science of sourdough, cookies, and pastries—where culinary precision meets design.
            </p>
          </div>
        </div>

        <!-- 5. Science Fiction Literature Card - Spans 1 col, 1 row -->
        <div class="p-6 bg-gradient-to-br from-primary_light to-gray-50 dark:from-primary_dark dark:to-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary_light dark:text-secondary_dark">Reading</span>
            <!-- Book Icon -->
            <svg class="w-6 h-6 text-secondary_light dark:text-secondary_dark group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13" />
            </svg>
          </div>
          <div>
            <h5 class="text-base font-bold text-primary_dark dark:text-primary_light mb-1">Sci-Fi Literature</h5>
            <p class="text-xs text-ink_light/75 dark:text-ink_dark/75">
              Exploring alternate realities, cybernetics, and future worlds.
            </p>
          </div>
        </div>

        <!-- 6. Sports & Active Life Card - Spans 1 col, 1 row -->
        <div class="p-6 bg-gradient-to-br from-primary_light to-gray-50 dark:from-primary_dark dark:to-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary_light dark:text-secondary_dark">Sports</span>
            <!-- Basketball Icon -->
            <svg class="w-6 h-6 text-secondary_light dark:text-secondary_dark group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M6.2 6.2c2.4 2.4 2.4 6.4 0 8.8M17.8 6.2c-2.4 2.4-2.4 6.4 0 8.8M2 12h20M12 2v20" />
            </svg>
          </div>
          <div>
            <h5 class="text-base font-bold text-primary_dark dark:text-primary_light mb-1">Active Life</h5>
            <p class="text-xs text-ink_light/75 dark:text-ink_dark/75">
              Unwinding on the basketball court, playing fast-paced table tennis, or enjoying a good superhero movie.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

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
