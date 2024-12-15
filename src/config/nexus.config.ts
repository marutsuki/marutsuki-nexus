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
      onClick: () => {},
    },
    {
      value: {
        label: "Art Portfolio",
      },
      onClick: () => {},
    },
    {
      value: {
        label: "Modelling Portfolio",
      },
      onClick: () => {},
    },
  ],
  renderer: (item: NexusMenuItem) =>
    createRawSnippet(() => ({
      render: () => item.label,
    })),
};
