<script>
  import ruby_icon from "$lib/assets/icons/ruby.svg"
  import json from "$lib/assets/icons/json.svg"
  import Bio from "$lib/components/pages_content/Bio.svelte";
  import Interests from "$lib/components/pages_content/Interests.svelte";
  import Education from "$lib/components/pages_content/Education.svelte";

  let sectionSelected
  let tabs = []

  $: {
    if(sectionSelected && !tabs.includes(sectionSelected)){
      tabs = [...tabs, sectionSelected]
    }
  }

  function removeTab(tab){
    if(tab == sectionSelected) sectionSelected = null
    tabs = tabs.filter(t => t != tab)
  }
</script>

<section class="mr-6 w-full flex container-content">
  <div class="flex flex-col h-full">
    <div class="flex gap-2 items-center p-1 pr-24 border-b-2 border-r-2 border-lines-default">
      <i class="ri-arrow-drop-down-fill text-white text-lg"></i>
      <p class="font-fira text-white">personal-info</p>
    </div>
    <div class="p-2 border-r-2 border-b-2 border-lines-default flex flex-col">
      <div tabindex="-1" role="button" on:click={() => sectionSelected = 'bio'} on:keydown={() => sectionSelected = 'bio'} class="font-fira flex gap-2 items-center {sectionSelected == "bio" ? 'text-white' : 'text-secondary-grey'}  cursor-pointer"><img class="w-4" src={ruby_icon} alt=""> bio.rb</div>
      <div tabindex="-2" role="button" on:click={() => sectionSelected = 'interests'} on:keydown={() => sectionSelected = 'interests'} class="font-fira flex gap-2 items-center {sectionSelected == "interests" ? 'text-white' : 'text-secondary-grey'} cursor-pointer"><i class="ri-javascript-fill text-yellow-500"></i> interests.js</div>
      <div tabindex="-3" role="button" on:click={() => sectionSelected = 'education'} on:keydown={() => sectionSelected = 'education'} class="font-fira flex gap-2 items-center {sectionSelected == "education" ? 'text-white' : 'text-secondary-grey'}  cursor-pointer"><img class="w-4" src={json} alt=""> education.json</div>
    </div>
    <div class="flex gap-2 items-center p-1 pr-24 border-b-2 border-r-2 border-lines-default">
      <i class="ri-arrow-drop-down-fill text-white text-lg"></i>
      <p class="font-fira text-white">contacts</p>
    </div>
    <div class="px-2 border-r-2 border-lines-default flex h-full">
      <p class="font-fira flex gap-2 pt-1 text-secondary-grey"><i class="ri-mail-fill"></i> thiagodavidpd@gmail.com</p>
    </div>
  </div>
  <div class="flex flex-col w-full">
    <div class="flex items-center">
      {#if tabs.length > 0}
        {#each tabs as tab,i}
          <div class="{sectionSelected == tab ? 'bg-white/10' : ''} flex gap-2 items-center justify-between p-1 pl-3 border-b-2 border-r-2 border-lines-default">
            <span tabindex={i} role="button" on:keydown={() => sectionSelected = tab} on:click={() => sectionSelected = tab} class="font-fira text-secondary-grey pr-12">{tab}</span>
            <i tabindex={i} role="button" on:keydown={() => removeTab(tab)} on:click={() => removeTab(tab)} class="ri-close-line text-secondary-grey text-lg pr-2"></i>
          </div>
        {/each}
      {/if}
    </div>
    <div class="w-full flex h-full relative p-4 border-r-2 border-lines-default">
      {#if sectionSelected == 'bio'}
        <div class="flex flex-col gap-2">
          <Bio />
        </div>
      {:else if sectionSelected == 'interests'}
        <div>
          <Interests />
        </div>
      {:else if sectionSelected == 'education'}
        <div>
          <Education />
        </div>
      {:else}
        <div class="flex flex-col m-0 w-full justify-center items-center">
          <i class="ri-list-view text-8xl text-secondary-grey font-fira"></i>
          <p class="font-fira text-secondary-grey">Select a section on the left side bar</p>
        </div>
      {/if}
    </div>
</section>

<style>
  .container-content{
    min-height: calc(100svh - 7rem);
  }
</style>