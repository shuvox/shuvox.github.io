<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let words = [
    "Full-Stack Developer",
    "Machine Learning Enthusiast",
    "BUET CSE Undergrad"
  ];
  export let typeSpeed = 80;
  export let eraseSpeed = 40;
  export let delayBetween = 2500;

  let currentWordIndex = 0;
  let displayedText = "";
  let isDeleting = false;
  let timeoutId: any;

  function tick() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      displayedText = currentWord.substring(0, displayedText.length - 1);
    } else {
      displayedText = currentWord.substring(0, displayedText.length + 1);
    }

    let nextSpeed = isDeleting ? eraseSpeed : typeSpeed;

    if (!isDeleting && displayedText === currentWord) {
      nextSpeed = delayBetween;
      isDeleting = true;
    } else if (isDeleting && displayedText === "") {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      nextSpeed = 500;
    }

    timeoutId = setTimeout(tick, nextSpeed);
  }

  onMount(() => {
    tick();
  });

  onDestroy(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });
</script>

<span class="inline-flex items-center min-h-[1.5em]">
  {#key currentWordIndex}
    <span class="animate-fade-in-up text-primary_dark dark:text-primary_light inline-block">
      {displayedText}
    </span>
  {/key}
  <span class="w-[3px] h-[1.2em] bg-secondary_light dark:bg-secondary_dark ml-1.5 animate-pulse rounded-full" aria-hidden="true"></span>
</span>
