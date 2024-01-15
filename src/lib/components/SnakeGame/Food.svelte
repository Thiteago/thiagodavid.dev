<script>
  export let eated = false
</script>

{#if eated}
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
    <g opacity="0.3">
    <circle opacity="0.1" cx="10.6151" cy="11.0379" r="10.3456" fill="#43D9AD"/>
    <circle opacity="0.2" cx="10.6151" cy="11.0379" r="7.34558" fill="#43D9AD"/>
    <circle cx="10.6152" cy="11.0379" r="4" fill="#43D9AD"/>
    </g>
  </svg>
{:else}
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
    <circle opacity="0.1" cx="10.8456" cy="10.5377" r="10.3456" fill="#43D9AD"/>
    <circle opacity="0.2" cx="10.8456" cy="10.5377" r="7.34558" fill="#43D9AD"/>
    <circle cx="10.8457" cy="10.5377" r="4" fill="#43D9AD"/>
  </svg>  
{/if}