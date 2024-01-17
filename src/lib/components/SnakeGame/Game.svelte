<script>
  import { onMount } from 'svelte';
  
  const initialPosition = { x: 0, y: 0 }
  let snake = [initialPosition]
  export let biggestScore = 0
  let isGameOver = false
  let direction, loopId
  export let score = 0
  const size = 15
  let movements = [] 
  let canvas
  let food
  let ctx
  
  onMount(() => {
    canvas = document.querySelector("canvas")
    ctx = canvas.getContext("2d")
    food = {
      x: randomPosition(),
      y: randomPosition(),
      color: randomColor()
    }

    biggestScore = localStorage.getItem("biggestScore") || 0
    
    document.addEventListener("keydown", ({ key }) => {
      if (key == "ArrowRight" && direction != "left") {
        direction = "right"
      }

      if (key == "ArrowLeft" && direction != "right") {
        direction = "left"
      }

      if (key == "ArrowDown" && direction != "up") {
        direction = "down"
      }

      if (key == "ArrowUp" && direction != "down") {
        direction = "up"
      }
      movements.push(direction)
    })
  })
  
  const incrementScore = () => {
    score += 5
  }

  const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
  }

  const randomPosition = () => {
    const number = randomNumber(0, canvas.width - size)
    return Math.round(number / 30) * 30
  }

  const randomColor = () => {
    const red = randomNumber(0, 255)
    const green = randomNumber(0, 255)
    const blue = randomNumber(0, 255)

    return `rgb(${red}, ${green}, ${blue})`
  }

  const drawFood = () => {
    if (isGameOver) return
    const { x, y, color } = food

    ctx.shadowColor = color
    ctx.shadowBlur = 6
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    ctx.shadowBlur = 0
  }

  const drawSnake = () => {
    ctx.fillStyle = "#ddd"

    snake.forEach((position, index) => {
      if (index == snake.length - 1) {
        ctx.fillStyle = "white"
        ctx.shadowColor = "white"
        ctx.shadowBlur = 12
      }

      ctx.fillRect(position.x, position.y, size, size)
    })
  }

  const moveSnake = () => {
    if (isGameOver) return
    direction = movements.shift() || direction

    const head = snake[snake.length - 1]

    if (direction == "right") {
      snake.push({ x: head.x + size, y: head.y })
    }

    if (direction == "left") {
      snake.push({ x: head.x - size, y: head.y })
    }

    if (direction == "down") {
      snake.push({ x: head.x, y: head.y + size })
    }

    if (direction == "up") {
      snake.push({ x: head.x, y: head.y - size })
    }

    snake.shift()
  }

  const checkEat = () => {
    const head = snake[snake.length - 1]

    if (head.x == food.x && head.y == food.y) {
      incrementScore()
      snake.push(head)

      let x = randomPosition()
      let y = randomPosition()

      while (snake.find((position) => position.x == x && position.y == y)) {
        x = randomPosition()
        y = randomPosition()
      }

      food.x = x
      food.y = y
      food.color = randomColor()
    }
  }

  const checkCollision = () => {
    const head = snake[snake.length - 1]
    const canvasWidthLimit = canvas.width - size
    const canvasHeightLimit = canvas.height - 1
    const neckIndex = snake.length - 2

    const wallCollision = head.x < 0 || head.x > canvasWidthLimit || head.y < 0 || head.y > canvasHeightLimit

    const selfCollision = snake.find((position, index) => {
      return position.x == head.x && position.y == head.y && index < neckIndex
    })

    if (wallCollision || selfCollision) {
      gameOver()
    }
  }

  const gameOver = () => {
    movements = []
    direction = undefined
    if(biggestScore  < score){
      localStorage.setItem("biggestScore", score)
      biggestScore = score
    }
    snake = [initialPosition]
    canvas.style.filter = "blur(4px)"
    isGameOver = true
  }

  const gameLoop = () => {
    clearInterval(loopId)

    ctx.clearRect(0, 0, 240, 405)
    drawFood()
    moveSnake()
    drawSnake()
    checkEat()
    checkCollision()

    loopId = setTimeout(() => {
      gameLoop()
    }, 100)
  }
  
  function startGame(){
    isGameOver = false
    score = 0
    canvas.style.filter = "none"
    direction = 'down'
    snake = [initialPosition]

    gameLoop()
  }
  


</script>


<div class="h-[405px] w-[240px] bg-primary-default rounded-lg">
  <canvas class="relative" id="snake" width="240" height="405">
  </canvas>
  {#if isGameOver}
    <div class="absolute top-1/2 left-[3.8rem] flex justify-center items-center flex-col">
      <p class="font-fira text-white text-3xl">Game Over</p>
      <button class="bg-accent-orange rounded p-2 mt-2 font-fira font-bold" on:click={startGame}>Try Again</button>
    </div>
  {/if}
  {#if !loopId}
    <button class="absolute bg-accent-orange font-fira rounded p-2 bottom-12 left-[5.5rem] glow" on:click={startGame}>Start Game</button>
  {/if}
</div>

<style>
  .glow {
    filter: drop-shadow(0 0 0.35rem #FEA55F);
  }
</style>