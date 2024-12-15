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
      label: {
        label: "General Portfolio",
      },
      onClick: () => {},
    },
  ],
  renderer: (item: NexusMenuItem) =>
    createRawSnippet(() => ({
      render: () => item.label,
    })),
};
