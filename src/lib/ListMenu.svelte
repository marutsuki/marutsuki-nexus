<script lang="ts" generics="T">
  import type { Snippet } from "svelte";
  import clsx from "clsx";

  type ListMenuItem = {
    label: string;
    href: string;
  };

  type Props = {
    items: ListMenuItem[];
    renderer: (item: T) => Snippet<[]>;
  };

  let { items }: Props = $props();

  const rotateStyles = [
    "group-hover:rotate-[5deg]",
    "group-hover:rotate-[-5deg]",
  ];

  const gradientStyles = [
    "bg-gradient1 after:bg-gradient1",
    "bg-gradient2 after:bg-gradient2",
    "bg-gradient3 after:bg-gradient3",
  ];

  const animateStyles = ["animate-slidein", "animate-slidein-right"];
</script>

<ul class="flex flex-col gap-2 place-self-center">
  {#each items as item, index}
    <li
      class={clsx("cursor-pointer relative group w-96 h-16", {
        [animateStyles[0]]: index % 2 === 0,
        [animateStyles[1]]: index % 2 === 1,
      })}
    >
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
      <a
        href={item.href} target="_blank" rel="noopener noreferrer"
        class="flex w-full h-full dark:text-white text-lg z-20 relative group-hover:text-white drop-shadow-lg font-text flex-col items-center justify-center"
      >
        <span class="block align-middle">
          {item.label}
        </span>
      </a>
    </li>
  {/each}
</ul>
