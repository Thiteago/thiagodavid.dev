<script>
  export let alignWithFlex = false
</script>

<div class="w-full max-w-screen-2xl m-auto flex {alignWithFlex ? 'flex-col items-center justify-center' : ''} container-content">
  <slot></slot>
</div>

<style>
  .container-content{
    min-height: calc(100svh - 7rem);
  }
</style>