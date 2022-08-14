<script>
  import { onMount } from "svelte";
  import Timer from "../../components/Timer.svelte";
  import { Trainer } from "./lib/Trainer";
  import "./styles.scss";

  export let data;

  const TIMES = [
    {
      name: "1 minutes",
      seconds: 60,
    },
    {
      name: "2 minutes",
      seconds: 120,
    },
    {
      name: "3 minutes",
      seconds: 180,
    },
    {
      name: "4 minutes",
      seconds: 240,
    },
    {
      name: "5 minutes",
      seconds: 300,
    },
  ];

  const demo = {
    lowerBound: 0,
    upperBound: 10,
    operations: ["addition", "subtraction"],
    guranteedNumbers: [],
    excludedNumbers: [],
  };

  const trainer = new Trainer(
    demo.lowerBound,
    demo.upperBound,
    demo.operations,
    demo.guranteedNumbers,
    demo.excludedNumbers
  );

  let input = "";
  let timer;

  const onKeyDown = (e) => {
    // if key is number
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      input += e.keyCode - 48;
    }

    // if key is backspace
    if (e.keyCode === 8) {
      if (input.length > 0) {
        input = input.slice(0, input.length - 1);
      }
    }

    // if input is as long as the answer)
    if (input.length === trainer.currentQuestion.answer.toString().length) {
      const isCorrect = trainer.submitAnswer(input);

      if (isCorrect) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }

      input = "";
      updateTrainer();
      console.log(trainer.currentQuestion.display());
    }
  };

  const onTimerFinish = () => {
    console.log("timer finished");
  };

  const startTimer = (seconds) => {
    timer.start(seconds);

    trainer.initialize();
    updateTrainer();
    console.log(trainer.currentQuestion.display());
  };

  const updateTrainer = () => {
    trainer = trainer;
  };
</script>

<div class="simple-arithmetic-app">
  <Timer bind:this={timer} on:finish={onTimerFinish} />
  {#if trainer.currentQuestion != null}
    <div class="question">
      {trainer.currentQuestion.display()} = {input.length > 0 ? input : "?"}
    </div>
    {trainer.displayScore()}
  {:else}
    {#each TIMES as time}
      <button on:click={() => startTimer(time.seconds)}>{time.name}</button>
    {/each}
  {/if}
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
