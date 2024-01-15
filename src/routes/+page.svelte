<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { isMobile } from "$lib/js/store.js";
</script>

<main class="bg-primary-light w-svw h-svh overflow-hidden">
  <Header></Header>
  <div></div>
  {#if !$isMobile}
    <Footer></Footer>
  {/if}
</main>