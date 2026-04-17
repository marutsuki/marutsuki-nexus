import { createRawSnippet, type ComponentProps, type Snippet } from "svelte";
import ListMenu from "../lib/ListMenu.svelte";

export type NexusMenuItem = {
  label: string;
  href: string;
};
export type NexusConfig = {
  items: ComponentProps<ListMenu<NexusMenuItem>>["items"];
};

export const config: NexusConfig = {
  items: [
    {
      label: "General Portfolio",
      href: "https://portfolio.marutsuki.com",
    },
    {
      label: "Professional Portfolio",
      href: "https://lucienlu.marutsuki.com",
    },
    {
      label: "Tutoring Portfolio",
      href: "https://tutoring.marutsuki.com",
    },
    {
      label: "Art Portfolio",
      href: "https://art.marutsuki.com",
    },
  ],
};
