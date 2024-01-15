<script>
  import { onMount } from "svelte"
  import Footer from '$lib/components/Footer.svelte'

  let actual_page = 'home'
  let isMobile = false
  let mobileMenu = false

  const checkWidth = () => {
    if (window.innerWidth < 768) {
      isMobile = true
    } else {
      isMobile = false
    }
  }

  onMount(() => {
    if(typeof window !== 'undefined') {
      window.addEventListener('resize', checkWidth)
    }
    checkWidth()
  })
</script>

{#if !isMobile}
  <header class="w-full sm:hidden md:flex">
    <nav class="w-full">
      <ul class="flex w-full text-white border-b-2 border-lines-default items-center">
        <li class="w-1/6 mx-6 text-secondary-grey font-fira text-nowrap">thiago-david</li>
        <div class="w-3/6 flex items-center">
          <div tabindex="-1" role="button" on:click={() => actual_page="home"} on:keydown={() => actual_page="home"} class="cursor-pointer border-x-2 border-lines-default px-4 py-3 font-fira {actual_page == 'home' ? "text-white relative" : 'text-secondary-grey'} ">
            <span class="{actual_page == 'home' ? "after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0 " : ''}text-nowrap">_hello</span>
          </div>
          <div tabindex="-2" role="button" on:click={() => actual_page="about_me"} on:keydown={() => actual_page="about_me"} class="cursor-pointer px-4 py-3 font-fira {actual_page == 'about_me' ? "text-white relative" : 'text-secondary-grey'}">
            <span class="{actual_page == 'about_me' ? "after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0 " : ''}text-nowrap">_about-me</span>
          </div>
          <div tabindex="-3" role="button" on:click={() => actual_page="projects"} on:keydown={() => actual_page="projects"} class=" cursor-pointer border-x-2 border-lines-default px-4 py-3 font-fira {actual_page == 'projects' ? "text-white relative" : 'text-secondary-grey'} ">
            <span class="{actual_page == 'projects' ? "after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0 " : ''} text-nowrap">_projects</span>
          </div>
        </div>
        <li class="sm:w-fit md:w-3/6"></li>
        <li class="font-fira border-l-2 border-lines-default px-4 py-3 flex justify-end text-secondary-grey text-nowrap"><a href="/contact">_contact-me</a></li>
      </ul>
    </nav>
  </header>
{:else}
  <header class="flex flex-col justify-between items-center">
    <div class="flex w-full justify-between items-center p-4 border-b-2 border-lines-default">
      <div class="text-secondary-grey font-fira text-nowrap text-xl">
        thiago-david
      </div>
      <div on:click={() => {mobileMenu = !mobileMenu}} on:keydown={() => mobileMenu = true} role="button" tabindex="-5">
        <i class="{mobileMenu ? 'ri-close-fill' : 'ri-menu-line'} text-secondary-grey text-3xl"></i>
      </div>
    </div>
    {#if mobileMenu}
      <div class="w-svw mobile-menu flex flex-col justify-between">
        <nav class="w-full">
          <div class="flex flex-col w-full text-white items-start">
            <div tabindex="-1" role="button" on:click={() => actual_page="home"} on:keydown={() => actual_page="home"} class="w-full cursor-pointer border-b-2 border-lines-default px-4 py-3 font-fira {actual_page == 'home' ? " relative" : ''} text-white ">
              <span class="{actual_page == 'home' ? "after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0 " : ''}text-nowrap">_hello</span>
            </div>
            <div tabindex="-2" role="button" on:click={() => actual_page="about_me"} on:keydown={() => actual_page="about_me"} class="w-full border-b-2 border-lines-default cursor-pointer px-4 py-3 font-fira {actual_page == 'about_me' ? " relative" : ''} text-white">
              <span class="{actual_page == 'about_me' ? "after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0 " : ''}text-nowrap">_about-me</span>
            </div>
            <div tabindex="-3" role="button" on:click={() => actual_page="projects"} on:keydown={() => actual_page="projects"} class="w-full border-b-2 border-lines-default cursor-pointer px-4 py-3 font-fira {actual_page == 'projects' ? " relative" : ''}  text-white">
              <span class="{actual_page == 'projects' ? "after:content-[''] after:w-full after:bg-accent-orange after:h-1 after:absolute after:flex after:right-0 after:bottom-0 " : ''} text-nowrap">_projects</span>
            </div>
            <div class="cursor-pointer w-full font-fira border-b-2 border-lines-default px-4 py-3 text-white text-nowrap">_contact-me</div>
          </div>
        </nav>
        <Footer isMobile={true}></Footer>
      </div>
    {/if}
  </header>
{/if}

<style>
  .mobile-menu{
    height: calc(100svh - 4rem);
  }
</style>