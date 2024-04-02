<script>
  import ruby_icon from "$lib/assets/icons/ruby.svg"
  import json from "$lib/assets/icons/json.svg"

  let sectionSelected
  let tabs = []
  const startYear = 2022
  const bornYear = 1998
  let currentYear = new Date().getFullYear()

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
          <table class="ml-3"> 
            <tbody>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">1</td>
                <td class="pl-3 font-fira text-secondary-blue"><span class="text-accent-purple">class</span> MyBioController <span class="text-accent-purple">&lt;</span> ApplicationController</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">2</td>
                <td class="pl-6 font-fira text-accent-green"><span class="text-accent-purple">def</span> index</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">3</td>
                <td class="pl-12 font-fira text-yellow-200">&lt;&lt;~MESSAGE </td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">4</td>
                <td class="pl-16 font-fira text-yellow-200"> Hello, i'm Thiago, and i'm {currentYear - bornYear} years old</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">5</td>
                <td class="pl-16 font-fira text-yellow-200">I currently have {currentYear - startYear}  years of experience as a Software Developer and</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">6</td>
                <td class="pl-16 font-fira text-yellow-200">my journey into programming began in college back in 2017.</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">7</td>
                <td class="pl-16 font-fira text-yellow-200">However, my fascination with the codes started even earlier when</td>
              </tr> 
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">8</td>
                <td class="pl-16 font-fira text-yellow-200">I attempted to create mods for my favorite games.</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">9</td>
                <td class="pl-16 font-fira text-yellow-200">While these early attempts may not have been fully successful, they marked the beginning of my passion for programming.</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">10</td>
                <td class="pl-16 font-fira text-yellow-200"></td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">11</td>
                <td class="pl-14 font-fira text-yellow-200">I was born in the charming city of Campos do Jordão, located in São Paulo, and have been a resident ever since</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">12</td>
                <td class="pl-14 font-fira text-yellow-200">Growing up in this inner city, I had the privilege of being surrounded by nature, fostering a childhood filled with outdoor play</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">13</td>
                <td class="pl-14 font-fira text-yellow-200">However, much to the dismay of my parents, everything changed after I got my first PlayStation.</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">14</td>
                <td class="pl-14 font-fira text-yellow-200"></td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">15</td>
                <td class="pl-14 font-fira text-yellow-200">That's it—I'm currently building my life, and I appreciate having you here to witness it.</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">15</td>
                <td class="pl-12 font-fira text-yellow-200">MESSAGE</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">15</td>
                <td class="pl-6 font-fira text-accent-purple">end</td>
              </tr>
              <tr class="flex gap-6">
                <td class="font-fira text-secondary-grey">15</td>
                <td class="pl-4 font-fira text-accent-purple">end</td>
              </tr>
            </tbody>
          </table>
        </div>
        {:else if sectionSelected == 'interests'}
        <div>
          <p class="font-fira text-white">Interests</p>
        </div>
        {:else if sectionSelected == 'education'}
        <div>
          <p class="font-fira text-white">Education</p>
        </div>
        {:else}
        <div class="flex flex-col m-0 w-full justify-center items-center">
          <i class="ri-list-view text-8xl text-secondary-grey font-fira"></i>
          <p class="font-fira text-secondary-grey">Select a section on the left side bar</p>
        </div>
        {/if}
      </div>
    </div>
</section>

<style>
  .container-content{
    min-height: calc(100svh - 7rem);
  }
</style>