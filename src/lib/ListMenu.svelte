<script lang="ts" generics="T">
  import type { Snippet } from "svelte";

  type ListMenuItem = {
    label: T;
    onClick: () => void;
  };

  type Props = {
    items: ListMenuItem[];
    renderer: (item: T) => Snippet;
  };

  let { items }: Props = $props();
</script>

<menu>
  {#each items as item}
    <menuitem onclick={item.onClick}>
      {item.label}
    </menuitem>
  {/each}
</menu>
