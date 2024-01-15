<script>
  export let isMobile = false
</script>


{#if !isMobile}

{:else}
  <footer class="flex justify-between items-center border-2 border-lines-default">
    <div class="p-4 font-fira text-secondary-grey">
      find me in:
    </div>
    <div class="flex">
      <div class="border-l-2 border-lines-default px-6 py-4 h-full"><i class="ri-twitter-fill text-secondary-grey text-2xl"></i></div>
      <div class="border-x-2 border-lines-default px-6 py-4"><i class="ri-facebook-fill text-secondary-grey text-2xl"></i></div>
      <div class="border-lines-default px-6 py-4"><i class="ri-github-fill text-secondary-grey text-2xl"></i></div>
    </div>
  </footer>
{/if}
