<script lang="ts" generics="T">
  import type { Snippet } from "svelte";

  type ListMenuItem = {
    value: T;
    onClick: () => void;
  };

  type Props = {
    items: ListMenuItem[];
    renderer: (item: T) => Snippet<[]>;
  };

  let { items, renderer }: Props = $props();
</script>

<menu class="flex flex-col gap-2">
  {#each items as item}
    <menuitem class="cursor-pointer p-4 relative group" onclick={item.onClick}>
      <div
        class="duration-200 opacity-0 bg-gradient1 group-hover:opacity-100 absolute inset-0 -z-10"
      ></div>
      <h2 class="invert mix-blend-difference text-lg">
        {@render renderer(item.value)()}
      </h2>
    </menuitem>
  {/each}
</menu>
