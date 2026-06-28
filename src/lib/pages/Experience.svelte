<script>
  import GitGraph from "$lib/components/pages_content/GitGraph.svelte";
  import { t } from "$lib/js/i18n.js";
</script>

<section class="mr-6 w-full flex container-content">
  <!-- Sidebar -->
  <div class="flex flex-col h-full">
    <div class="flex gap-2 items-center p-1 pr-24 border-b-2 border-r-2 border-lines-default">
      <i class="ri-arrow-drop-down-fill text-white text-lg"></i>
      <p class="font-fira text-white">{$t.experience.title}</p>
    </div>
    <div class="p-2 border-r-2 border-lines-default flex flex-col h-full">
      <div class="font-fira flex gap-2 items-center text-accent-green whitespace-nowrap">
        <i class="ri-git-repository-fill"></i>
        real-seguro-viagem.git
      </div>
    </div>
  </div>

  <!-- Editor area -->
  <div class="flex flex-col w-full">
    <!-- Permanent tab -->
    <div class="flex items-center">
      <div class="bg-white/10 flex items-center p-1 pl-3 border-b-2 border-r-2 border-lines-default">
        <span class="font-fira text-secondary-grey pr-12">real-seguro-viagem.git</span>
      </div>
      <div class="flex-grow border-b-2 border-lines-default h-full"></div>
    </div>
    <!-- Content -->
    <div class="w-full flex border-r-2 border-lines-default">
      <GitGraph />
    </div>
  </div>
</section>

<style>
  .container-content {
    min-height: calc(100svh - 7rem);
  }
</style>
