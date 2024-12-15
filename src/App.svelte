<script lang="ts">
  import ListMenu from "./lib/ListMenu.svelte";
  import { config, type NexusMenuItem } from "./config/nexus.config";

  const TypedListMenu = ListMenu<NexusMenuItem>;

  const { items, renderer } = config;
</script>

<main class="flex flex-col gap-12">
  <section>
    <h1>marutsuki</h1>
    <h2>NEXUS</h2>
  </section>

  <TypedListMenu {items} {renderer} />
</main>
