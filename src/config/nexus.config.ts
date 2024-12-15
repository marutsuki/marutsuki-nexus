import { createRawSnippet, type ComponentProps, type Snippet } from "svelte";
import ListMenu from "../lib/ListMenu.svelte";

export type NexusMenuItem = {
  label: string;
};
export type NexusConfig = {
  items: ComponentProps<ListMenu<NexusMenuItem>>["items"];
  renderer: (item: NexusMenuItem) => Snippet;
};

export const config: NexusConfig = {
  items: [
    {
      value: {
        label: "General Portfolio",
      },
      onClick: () => window.open("https://main.marutsuki.io"),
    },
    {
      value: {
        label: "Art Portfolio",
      },
      onClick: () => window.open("https://art.marutsuki.io"),
    },
    {
      value: {
        label: "Modelling Portfolio",
      },
      onClick: () => window.open("https://modelling.marutsuki.io"),
    },
  ],
  renderer: (item: NexusMenuItem) =>
    createRawSnippet(() => ({
      render: () => item.label,
    })),
};
