<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Home from '$lib/pages/Home.svelte';
  import AboutMe from '$lib/pages/AboutMe.svelte';
  import { isMobile } from "$lib/js/store.js";
  import Container from '$lib/components/Container.svelte';

  let actual_page = "about_me"

</script>

<main class="bg-primary-light w-svw h-svh overflow-hidden">
  <Header bind:actual_page />
  <Container alignWithFlex={actual_page == "home"} limit_witdth={actual_page == "home"}>
    {#if actual_page == "home"}
      <Home />
    {:else if actual_page == "about_me"}
      <AboutMe />
    {/if}
  </Container>
  {#if !$isMobile}
    <Footer />
  {/if}
</main>

<style>
  .container-content{
    min-height: calc(100svh - 7rem);
  }
</style>