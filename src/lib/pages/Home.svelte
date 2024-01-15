<script>
  import SnakeGame from "$lib/components/SnakeGame.svelte";

</script>


<section class="w-3/4 m-auto flex items-center justify-center">
  <div class="w-2/3 flex flex-col gap-16">
    <div>
      <h3 class="font-fira text-4xl text-white">Hi all. I am</h3>
      <h1 class="font-fira text-8xl text-white">Thiago David</h1>
      <h2 class="font-fira text-4xl text-secondary-blue mt-3"><span>&gt;</span> Full-Stack Developer</h2>
    </div>
    <div>
      <p class="text-secondary-grey font-fira">// you can also see it on my Github repository.</p>
      <p class="text-white">
        <span class="text-secondary-blue font-fira">const</span> <span class="text-accent-green font-fira">githubLink</span> = <span class="text-accent-red font-fira">"https://github.com/Thiteago/thiagodavid.dev"</span>
      </p>
    </div>
  </div>
  <div class="w-1/3">
    <SnakeGame />
  </div>
</section>