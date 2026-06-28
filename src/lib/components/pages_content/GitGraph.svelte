<script>
  import commits from '$lib/data/commits.json';
  import { t } from '$lib/js/i18n.js';

  let selectedCommit = null;

  function selectCommit(commit) {
    if (selectedCommit && selectedCommit.hash === commit.hash) {
      selectedCommit = null;
    } else {
      selectedCommit = commit;
    }
  }
</script>

<div class="flex flex-col md:flex-row w-full">
  <!-- Left: Git Graph -->
  <div class="w-full md:w-2/5 border-b-2 md:border-b-0 md:border-r-2 border-lines-default p-4">
    <p class="font-fira text-secondary-grey text-sm mb-4">
      <span class="text-accent-green">$</span> {$t.experience.command}
    </p>

    {#each commits as commit, i}
      <div class="font-fira">
        <!-- Commit row -->
        <div
          role="button"
          tabindex={i}
          on:click={() => selectCommit(commit)}
          on:keydown={(e) => e.key === 'Enter' && selectCommit(commit)}
          class="flex flex-col cursor-pointer hover:bg-white/5 rounded px-1 py-1 {selectedCommit?.hash === commit.hash ? 'bg-white/10' : ''}"
        >
          <!-- Line 1: node + hash + refs + period -->
          <div class="flex items-baseline gap-2 w-full">
            <span class="text-accent-green select-none shrink-0">*</span>
            <span class="text-secondary-grey text-xs shrink-0">{commit.hash}</span>
            {#each commit.refs as ref}
              <span class="text-xs shrink-0 {ref.startsWith('HEAD') ? 'text-accent-orange' : 'text-secondary-blue'}">({ref})</span>
            {/each}
            <span class="ml-auto text-secondary-grey text-xs whitespace-nowrap hidden md:block shrink-0">{commit.period}</span>
          </div>
          <!-- Line 2: role name (indented to align with text after *) -->
          <div class="pl-4">
            <span class="text-white text-sm">{commit.role}</span>
          </div>
        </div>

        <!-- Connector line between commits -->
        {#if i < commits.length - 1}
          <div class="text-accent-green select-none pl-1 leading-tight">|</div>
          <div class="text-accent-green select-none pl-1 leading-tight">|</div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Right: Commit detail panel -->
  <div class="{selectedCommit ? 'block' : 'hidden md:flex'} w-full md:w-3/5 overflow-y-auto p-4">
    {#if selectedCommit}
      <div class="font-fira text-sm leading-relaxed">
        <p>
          <span class="text-accent-purple">commit</span>
          <span class="text-secondary-grey"> {selectedCommit.fullHash}</span>
        </p>
        {#if selectedCommit.isHead}
          <p class="text-accent-orange">(HEAD -&gt; main)</p>
        {/if}
        <p>
          <span class="text-accent-purple">Author:</span>
          <span class="text-secondary-grey"> Thiago David &lt;thiagodavidpd@gmail.com&gt;</span>
        </p>
        <p>
          <span class="text-accent-purple">Date:</span>
          <span class="text-secondary-grey">   {selectedCommit.period.split('–')[0].trim()}</span>
        </p>
        <br />
        <p class="pl-4 text-white">{selectedCommit.title}</p>
        <br />
        <p class="text-secondary-grey">diff --git a/career.md b/career.md</p>
        <p class="text-secondary-grey">--- a/career.md</p>
        <p class="text-secondary-grey">+++ b/career.md</p>
        <p class="text-secondary-grey">@@ -0,0 +1,{5 + selectedCommit.stack.length + selectedCommit.highlights.length} @@</p>
        <br />
        <p>
          <span class="text-accent-green">+</span>
          <span class="text-secondary-grey"> {$t.experience.role}</span>
          <span class="text-white">    {selectedCommit.role}</span>
        </p>
        <p>
          <span class="text-accent-green">+</span>
          <span class="text-secondary-grey"> {$t.experience.company}</span>
          <span class="text-white"> {selectedCommit.company}</span>
        </p>
        <p>
          <span class="text-accent-green">+</span>
          <span class="text-secondary-grey"> {$t.experience.period}</span>
          <span class="text-white">  {selectedCommit.period}</span>
        </p>
        <p><span class="text-accent-green">+</span></p>
        <p>
          <span class="text-accent-green">+</span>
          <span class="text-secondary-grey"> {$t.experience.stack}</span>
        </p>
        <p>
          <span class="text-accent-green">+</span>
          <span class="text-secondary-grey">   [</span><span class="text-yellow-200">{selectedCommit.stack.join(', ')}</span><span class="text-secondary-grey">]</span>
        </p>
        {#if selectedCommit.highlights.length > 0 }
          <p><span class="text-accent-green">+</span></p>
          <p>
            <span class="text-accent-green">+</span>
            <span class="text-secondary-grey"> {$t.experience.highlights}</span>
          </p>
          {#each selectedCommit.highlights as bullet}
            <p>
              <span class="text-accent-green">+</span>
              <span class="text-secondary-grey">   - </span><span class="text-white">{bullet}</span>
            </p>
          {/each}
        {/if}
      </div>
    {:else}
      <div class="flex flex-col w-full h-full justify-center items-center">
        <i class="ri-git-commit-line text-8xl text-secondary-grey"></i>
        <p class="font-fira text-secondary-grey text-sm mt-2">{$t.experience.selectCommit}</p>
      </div>
    {/if}
  </div>
</div>
