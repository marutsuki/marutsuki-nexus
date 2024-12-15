<script lang="ts">
  import ListMenu from "./lib/ListMenu.svelte";
  import { config, type NexusMenuItem } from "./config/nexus.config";

  const TypedListMenu = ListMenu<NexusMenuItem>;

  const { items, renderer } = config;
</script>

<main>
  <h1>marutsuki</h1>
  <h2>NEXUS</h2>
  <TypedListMenu {items} {renderer} />
</main>
