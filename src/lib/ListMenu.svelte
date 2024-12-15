<script lang="ts" generics="T">
  import type { Snippet } from "svelte";
  import clsx from "clsx";

  type ListMenuItem = {
    value: T;
    onClick: () => void;
  };

  type Props = {
    items: ListMenuItem[];
    renderer: (item: T) => Snippet<[]>;
  };

  let { items, renderer }: Props = $props();

  const rotateStyles = [
    "group-hover:rotate-[5deg]",
    "group-hover:rotate-[-5deg]",
  ];

  const gradientStyles = [
    "bg-gradient1 after:bg-gradient1",
    "bg-gradient2 after:bg-gradient2",
    "bg-gradient3 after:bg-gradient3",
  ];
</script>

<menu class="flex flex-col gap-2 place-self-center">
  {#each items as item, index}
    <menuitem class="cursor-pointer p-4 relative group" onclick={item.onClick}>
      <div
        class={clsx(
          `duration-500 opacity-0 group-hover:opacity-100 absolute inset-0 z-10 ease-overshoot
        group-hover:scale-y-[90%] group-hover:scale-x-[110%]
        after:content-normal after:absolute after:-inset-2 after:drop-shadow-lg after:opacity-50 after:blur-md`,
          {
            [rotateStyles[0]]: index % 2 === 0,
            [rotateStyles[1]]: index % 2 === 1,
          },
          {
            [gradientStyles[0]]: index % 3 === 0,
            [gradientStyles[1]]: index % 3 === 1,
            [gradientStyles[2]]: index % 3 === 2,
          }
        )}
      ></div>
      <h2
        class="dark:text-white text-lg z-20 relative group-hover:text-white drop-shadow-lg font-text"
      >
        {@render renderer(item.value)()}
      </h2>
    </menuitem>
  {/each}
</menu>
