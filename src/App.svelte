<script lang="ts">
  import ListMenu from "./lib/ListMenu.svelte";
  import { config, type NexusMenuItem } from "./config/nexus.config";
  import InteractiveLogo from "./lib/InteractiveLogo.svelte";

  const TypedListMenu = ListMenu<NexusMenuItem>;

  const { items, renderer } = config;
</script>

<main class="flex flex-col gap-12">
  <section class="place-items-center">
    <InteractiveLogo />
    <h1 class="font-display">marutsuki</h1>
    <h2 class="font-text">NEXUS</h2>
  </section>

  <TypedListMenu {items} {renderer} />
</main>
