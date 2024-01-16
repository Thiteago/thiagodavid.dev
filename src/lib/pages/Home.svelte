<script>
  import SnakeGame from "$lib/components/SnakeGame.svelte";
  import { isMobile } from "$lib/js/store.js";
  import { onMount } from "svelte";

  let notebookRes = false

  onMount(() => {
    if(typeof window !== 'undefined') {
      window.addEventListener('resize', checkWidth)
    }
    checkWidth()
  })

  const checkWidth = () => {
    if (window.innerWidth < 1023) {
      notebookRes = true
    } else {
      notebookRes = false
    }
  }

</script>


<section class="w-3/4 m-auto flex items-center justify-center">
  <div class="w-full md:w-2/3 flex flex-col gap-16">
    <div>
      <h3 class="font-fira text-2xl md:text-4xl text-white">Hi all. I am</h3>
      <h1 class="font-fira text-5xl md:text-8xl text-white">Thiago David</h1>
      <h2 class="font-fira text-xl md:text-4xl text-secondary-blue mt-3"><span>&gt;</span> Full-Stack Developer</h2>
    </div>
    <div>
      <p class="text-secondary-grey font-fira">// you can also see it on my Github repository.</p>
      <p class="text-white">
        <span class="text-secondary-blue text-sm md:text-md font-fira">const</span> <span class="text-accent-green font-fira text-sm md:text-md">githubLink</span> = <span class="text-accent-red font-fira text-sm md:text-md break-words">"https://github.com/Thiteago/thiagodavid.dev"</span>
      </p>
    </div>
  </div>
  {#if !$isMobile && !notebookRes}
    <div class="w-fit">
      <SnakeGame />
    </div>
  {:else}
    <div class="relative">
      <span class="circle circle-a"></span>
      <span class="circle circle-b"></span>
    </div>
  {/if}
</section>

<style>
  .circle {
    z-index: 1;
    height: 550px;
    width: 550px;
    opacity: 0.3;
    border-radius: 50%;
    display: inline-block;
    filter: blur(4rem);
  }

  .circle-a{
    position: absolute;
    top: 0px;
    left: -200px;
    background-color: #43D9AD;
  }

  .circle-b{
    position: absolute;
    bottom: -45px;
    right: 50%;
    background-color: #4D5BCE;
  }
</style>