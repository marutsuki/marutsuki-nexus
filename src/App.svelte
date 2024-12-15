<script lang="ts">
  import ListMenu from "./lib/ListMenu.svelte";
  import { config, type NexusMenuItem } from "./config/nexus.config";
  import InteractiveLogo from "./lib/InteractiveLogo.svelte";
  import { writable } from "svelte/store";
  import clsx from "clsx";
  import { getContext, setContext } from "svelte";

  const TypedListMenu = ListMenu<NexusMenuItem>;

  const { items, renderer } = config;

  const mode = writable("light");

  setContext("mode", mode);
</script>

<main class={clsx("flex flex-col gap-12", $mode)}>
  <section class="place-items-center">
    <InteractiveLogo />
    <h1 class="font-display dark:text-white">marutsuki</h1>
    <h2 class="font-text dark:text-white">NEXUS</h2>
  </section>

  <TypedListMenu {items} {renderer} />
</main>
