<script>
  import {isMobile} from "$lib/js/store.js";
</script>


{#if !$isMobile}
  <footer class="fixed bottom-0 w-full flex justify-between items-center border-t-2 border-lines-default">
    <div class="flex justify-between items-center font-fira text-secondary-grey">
      <span class="p-4">find me in:</span>
      <a href="https://twitter.com/leuthiago" target="_blank" class="group border-l-2 border-lines-default px-6 py-4 h-full"><i class="ri-twitter-fill group-hover:text-white text-secondary-grey text-2xl"></i></a>
      <a href="https://www.linkedin.com/in/thiago-david/" target="_blank" class="group border-x-2 border-lines-default px-6 py-4"><i class="ri-linkedin-fill group-hover:text-white text-secondary-grey text-2xl"></i></a>
    </div>
    <a href="https://github.com/Thiteago" target="_blank" class="group border-lines-default px-6 py-4 font-fira hover:text-white text-secondary-grey flex items-center gap-2 border-l-2">@Thiteago<i class="ri-github-fill group-hover:text-white text-secondary-grey text-2xl"></i></a>
  </footer>
{:else}
  <footer class="flex justify-between items-center border-2 border-lines-default">
    <div class="p-4 font-fira text-secondary-grey">
      find me in:
    </div>
    <div class="flex">
      <a href="https://twitter.com/leuthiago" target="_blank" class="group border-l-2 border-lines-default px-6 py-4 h-full"><i class="ri-twitter-fill group-hover:text-white text-secondary-grey text-2xl"></i></a>
      <a href="https://www.linkedin.com/in/thiago-david/" target="_blank" class="group border-x-2 border-lines-default px-6 py-4"><i class="ri-linkedin-fill group-hover:text-white text-secondary-grey text-2xl"></i></a>
      <a href="https://github.com/Thiteago" target="_blank" class="group border-lines-default px-6 py-4"><i class="ri-github-fill group-hover:text-white text-secondary-grey text-2xl"></i></a>
    </div>
  </footer>
{/if}
