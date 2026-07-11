<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
    import {
        Navbar,
        NavBrand,
        NavUl,
        NavHamburger,
        Avatar,
    } from "flowbite-svelte";
    import "../app.css";
    import persistent_store from "$lib/stores/persistentstore";
    import logo_dark from "$lib/images/logo-dark.png";
    import logo_light from "$lib/images/logo-light.png";

    function setThemeClass(transition = true) {
        if (transition) {
            document.documentElement.classList.add("theme-transitioning");
        }
        
        if ($persistent_store.darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        
        if (transition) {
            setTimeout(() => {
                document.documentElement.classList.remove("theme-transitioning");
            }, 300);
        }
    }

    onMount(() => {
        // Disable transitioning on initial load to avoid flash
        setThemeClass(false);
        goto($persistent_store.activeUrl);
    });

    function toggledarkMode() {
        $persistent_store.darkMode = !$persistent_store.darkMode;
        localStorage.setItem(
            "persistent_store",
            JSON.stringify($persistent_store),
        );
        setThemeClass(true);
    }

    const routes = [
        { url: "/", name: "Home" },
        { url: "/achievements", name: "Achievements" },
        { url: "/projects", name: "Projects" },
        { url: "/skills", name: "Skills" },
        { url: "/education", name: "Education" },
    ];
</script>

<div
    class="min-h-screen min-w-screen dark:bg-primary_dark dark:text-ink_dark bg-primary_light text-ink_light"
>
    <main class="max-w-4xl p-4 mx-auto">
        <Navbar>
            <NavBrand href="/">
                {#if $persistent_store.darkMode}
                    <Avatar id="avatar-menu" src={logo_dark} border />
                {:else}
                    <Avatar id="avatar-menu" src={logo_light} border />
                {/if}
            </NavBrand>
            <div class="flex items-center md:order-2">
                <button
                    on:click={toggledarkMode}
                    class="p-2 mx-3 bg-gray-200 rounded dark:bg-gray-700 transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    <span class="text-gray-800 dark:text-gray-200">
                        {#if $persistent_store.darkMode}
                            <SunSolid />
                        {:else}
                            <MoonSolid />
                        {/if}
                    </span>
                </button>
                <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
            </div>
            <NavUl>
                {#each routes as { url, name }}
                    <li>
                        {#if $persistent_store.activeUrl === url}
                            <button
                                class="relative group block py-2 px-1 text-sm font-semibold transition-colors md:p-0 text-secondary_light dark:text-secondary_dark"
                                on:click|stopPropagation={() => {
                                    $persistent_store.activeUrl = url;
                                    localStorage.setItem(
                                        "persistent_store",
                                        JSON.stringify($persistent_store),
                                    );
                                    goto(url);
                                }}
                            >
                                {name}
                                <span class="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary_light dark:bg-secondary_dark transition-transform duration-300 scale-x-100 origin-left"></span>
                            </button>
                        {:else}
                            <button
                                class="relative group block py-2 px-1 text-sm font-medium transition-colors md:p-0 text-ink_light/70 hover:text-secondary_light dark:text-ink_dark/70 dark:hover:text-secondary_dark"
                                on:click|stopPropagation={() => {
                                    $persistent_store.activeUrl = url;
                                    localStorage.setItem(
                                        "persistent_store",
                                        JSON.stringify($persistent_store),
                                    );
                                    goto(url);
                                }}
                            >
                                {name}
                                <span class="absolute -bottom-1 left-0 w-full h-[2px] bg-secondary_light dark:bg-secondary_dark transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
                            </button>
                        {/if}
                    </li>
                {/each}
            </NavUl>
        </Navbar>

        <slot />
    </main>
</div>
