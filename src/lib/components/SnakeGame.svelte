<script>
  import Screw from "$lib/components/SnakeGame/Screw.svelte";
  import KeyboardArrow from "$lib/components/SnakeGame/KeyboardArrow.svelte";
  import Food from "./SnakeGame/Food.svelte";
  import Game from "./SnakeGame/Game.svelte";

  let score = 0
  let biggestScore

</script>

<div class="w-full mx-6 background z-20 relative max-w-xl">
  <div class="flex justify-between">
    <Screw />
    <Screw />
  </div>
  <div class="flex gap-12 justify-center">
    <div>
      <Game bind:score bind:biggestScore/>
    </div>
    <div class="relative">
      <div class="bg-black/10 rounded-lg p-3 max-w-64">
        <div>
          <p class="font-fira text-white">// use keyboard</p>
          <p class="font-fira text-white">// arrows to play</p>
        </div>
        <div class="mt-6">
          <div class="flex justify-center">
            <KeyboardArrow direction={'up'}/>
          </div>
          <div class="flex justify-center items-center">
            <KeyboardArrow direction={'left'} />
            <KeyboardArrow direction={'down'} />
            <KeyboardArrow direction={'right'} />
          </div>
        </div>
      </div>
      <div class="mt-16 max-w-64 ">
        <p class="font-fira text-white">// your score</p>
        <div class="font-fira text-white flex items-center flex-col text-4xl flex-wrap max-w-60 min-w-60 truncate">
          <div class="flex bg-primary-default w-full px-6 items-center gap-3 rounded-lg">
            <Food />
            <span class="flex gap-1 items-end">{score}</span>
          </div>
        </div>
        {#if biggestScore}
          <div class="font-fira flex absolute bottom-0 right-3 items-center justify-center text-sm flex-wrap gap-2 bg-primary-default rounded p-1 text-nowrap">
            <span class="text-white">{biggestScore} is your Best Score 🏆</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="flex justify-between">
    <Screw />
    <Screw />
  </div>

  <div class="relative">
    <span class="circle circle-a"></span>
    <span class="circle circle-b"></span>
  </div>
</div>

<style>
  .background{
    border-radius: 8px;
    border: 1px solid #0C1616;
    background: linear-gradient(150deg, rgba(23, 85, 83, 0.70) 1.7%, rgba(67, 217, 173, 0.09) 81.82%);
    box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.30) inset;
    backdrop-filter: blur(32px);
  }

  .circle {
    z-index: -1;
    height: 550px;
    width: 550px;
    opacity: 0.3;
    border-radius: 50%;
    display: inline-block;
    filter: blur(4rem);
  }

  .circle-a{
    position: absolute;
    top: -315px;
    left: 45%;
    background-color: #43D9AD;
  }

  .circle-b{
    position: absolute;
    bottom: 115px;
    right: 50%;
    background-color: #4D5BCE;
  }
</style>