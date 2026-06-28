<script>
  import { t } from '$lib/js/i18n.js';

  const startYear = 2022;
  const bornYear = 1998;
  let currentYear = new Date().getFullYear();

  $: age = currentYear - bornYear;
  $: exp = currentYear - startYear;

  $: lines = $t.bio.map(line =>
    line.replace('{age}', age).replace('{exp}', exp)
  );
</script>

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
      <td class="pl-12 font-fira text-yellow-200">&lt;&lt;~MESSAGE</td>
    </tr>
    {#each lines as line, i}
      <tr class="flex gap-6">
        <td class="font-fira text-secondary-grey">{i + 4}</td>
        <td class="{i < 7 ? 'pl-16' : 'pl-14'} font-fira text-yellow-200">{line}</td>
      </tr>
    {/each}
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">{lines.length + 4}</td>
      <td class="pl-12 font-fira text-yellow-200">MESSAGE</td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">{lines.length + 5}</td>
      <td class="pl-6 font-fira text-accent-purple">end</td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">{lines.length + 6}</td>
      <td class="pl-4 font-fira text-accent-purple">end</td>
    </tr>
  </tbody>
</table>
