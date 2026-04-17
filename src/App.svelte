<script lang="ts">
  import ListMenu from "./lib/ListMenu.svelte";
  import { config, type NexusMenuItem } from "./config/nexus.config";
  import InteractiveLogo from "./lib/InteractiveLogo.svelte";
  import { writable } from "svelte/store";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import Icons from './lib/Icons.svelte';
  
  const TypedListMenu = ListMenu<NexusMenuItem>;

  const { items } = config;

  const mode = writable("light");

  setContext("mode", mode);
</script>

<main class={clsx("flex flex-col gap-4", $mode)}>
  <section class="flex flex-col items-center place-items-center animate-fadein">
    <InteractiveLogo />
    <h1 class="font-display dark:text-white flex flex-col items-center">marutsuki</h1>
    <h2 class="font-display text-xl dark:text-white">Engineer | Digital Artist | Musician</h2>
    <div class="my-2 flex gap-2 justify-center">
      <a
        href="https://github.com/marutsuki"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer duration-150 hover:fill-active active:scale-110 dark:invert"
      >
        <Icons name="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/lucienlu2000"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer duration-150 hover:fill-active active:scale-110 dark:invert"
      >
        <Icons name="linkedin" />
      </a>
      <a
        href="https://www.pixiv.net/en/users/125480560"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer duration-150 hover:fill-active active:scale-110 dark:invert"
      >
        <Icons name="pixiv" />
      </a>
      <a
        href="https://twitter.com/marutsuki_"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer duration-150 hover:fill-active active:scale-110 dark:invert"
      >
        <Icons name="twitter" />
      </a>
      <a
        href="https://www.instagram.com/marutsuki_/"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer duration-150 hover:fill-active active:scale-110 dark:invert"
      >
        <Icons name="insta" />
      </a>
    </div>
  </section>

  <section class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
    <h2 class="sr-only">Core Disciplines</h2>
    <p>
      Engineering software systems and processes through controlled sub-agent orchestration when possible and by hand when critical.
    </p>
    <p>
      Cutting away at the hours lost to predictable BAU work through automation, and enabling the capacity for innovation beyond maintenance.
    </p>
    <p>
      Exploring the intersection of immersive digital art and music, blending technology with creativity to craft unique experiences.
    </p>
  </section>
  <section class="animate-fadein"><TypedListMenu {items} /></section>

</main>

<footer class="fixed left-0 bottom-0 px-8 py-4 w-full flex flex-row justify-between items-center text-base">
  <p class="text-center dark:text-white">
    &copy; 2025-2026 Marutsuki. All rights reserved.
  </p>
  <div class="flex flex-row gap-4">
    <div>
      <a href="https://bucket.marutsuki.com/sitemap.xml" target="_blank" rel="noopener noreferrer" class="dark:text-white hover:underline">
        Sitemap
      </a>
      <a href="https://bucket.marutsuki.com/robots.txt" target="_blank" rel="noopener noreferrer" class="dark:text-white hover:underline">
        Robots.txt
      </a>
    </div>
  </div>
</footer>