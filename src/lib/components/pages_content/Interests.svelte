<script>
  import { t } from '$lib/js/i18n.js';

  $: [playlistBefore, playlistAfter] = $t.interests.musicPlaylist.split('{link}');
</script>

<table class="ml-3">
  <tbody>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">1</td>
      <td class="pl-3 font-fira text-secondary-blue">
        <span class="text-accent-purple">const</span>
        <span class="text-yellow-200">myInterests</span>
        <span class="text-accent-purple">=</span> &#123;</td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">2</td>
      <td class="pl-8 font-fira text-secondary-blue">
        outdoor_activity<span class="text-secondary-grey">:</span>
        <span class="text-accent-green">'{$t.interests.outdoor}'</span>,
      </td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">3</td>
      <td class="pl-8 font-fira text-secondary-blue">music<span class="text-secondary-grey">:</span> &#123;</td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">4</td>
      <td class="pl-14 font-fira text-secondary-blue">vibe<span class="text-secondary-grey">:</span>
        <span class="text-accent-green">'{$t.interests.musicVibe}'</span>,
      </td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">5</td>
      <td class="pl-14 font-fira text-secondary-blue">playlist<span class="text-secondary-grey">:</span>
        <span class="text-accent-green">
          {playlistBefore}<a aria-label="link to spotify playlist"
          href="https://open.spotify.com/playlist/7eH3vXfDGATrALhoLRsSz8?si=10d6062f0fa74224" class="underline font-bold" target="_blank">{$t.interests.musicPlaylistLink}</a>{playlistAfter}
        </span>,
      </td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">6</td>
      <td class="pl-14 font-fira text-secondary-blue">favorite_band<span class="text-secondary-grey">:</span>
        <span class="text-accent-green">'{$t.interests.favoriteBand}'</span>
      </td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">7</td>
      <td class="pl-8 font-fira text-secondary-grey">&#125;,</td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">8</td>
      <td class="pl-8 font-fira text-secondary-blue">gaming<span class="text-secondary-grey">:</span>
        <span class="text-accent-green">'{$t.interests.gaming}'</span>,
      </td>
    </tr>
    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">9</td>
      <td class="pl-8 font-fira text-secondary-blue">movies<span class="text-secondary-grey">:</span>
        <span class="text-accent-green">'{$t.interests.movies}'</span>,
      </td>
    </tr>

    <tr class="flex gap-6 mt-1 mb-1 py-1 pr-4 pl-2 bg-pink-500/10 border-l-4 border-pink-500
    shadow-[inset_0_0_12px_rgba(236,72,153,0.15)] rounded-r-md group">
      <td class="font-fira text-pink-400 ml-[-4px] group-hover:text-pink-300 transition-colors">10</td>
      <td class="pl-8 font-fira text-secondary-blue">greatest_hobby<span class="text-secondary-grey">:</span>
        <span class="text-pink-300 font-medium">'{$t.interests.greatestHobby}'</span></td>
    </tr>

    <tr class="flex gap-6">
      <td class="font-fira text-secondary-grey">11</td>
      <td class="pl-3 font-fira text-secondary-grey">&#125;</td>
    </tr>
  </tbody>
</table>
