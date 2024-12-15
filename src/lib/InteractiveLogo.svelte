<script>
  import { getContext } from "svelte";

  const mode = getContext("mode");
  const onclick = () => {
    $mode = $mode === "light" ? "dark" : "light";
  };
</script>

<div class="relative w-96 h-96 group cursor-pointer" {onclick}>
  <div
    class="absolute bg-logo w-96 h-96 bg-contain duration-400 transition dark:invert"
  ></div>
  <div
    class="duration-400 transition absolute w-96 h-96 inset-0 bg-logoGradient opacity-0 group-hover:opacity-100 mix-blend-lighten dark:mix-blend-darken"
  ></div>
</div>
