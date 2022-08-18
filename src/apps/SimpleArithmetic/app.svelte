<script>
  import Timer from "../../components/Timer.svelte";
  import Button from "../../components/Button.svelte";
  import Icon from "../../components/Icon.svelte";
  import { Trainer } from "./lib/Trainer";
  import "./styles.scss";

  export let data;
  export let title;

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

  let trainer = new Trainer(data);

  let input = "";
  let timer;
  let sessionCompleted = false;

  const onKeyDown = (e) => {
    if (sessionCompleted) return;

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
    sessionCompleted = true;
    input = "";
  };

  const startTimer = (seconds) => {
    timer.start(seconds);
    sessionCompleted = false;

    trainer.initialize();
    updateTrainer();
    console.log(trainer.currentQuestion.display());
  };

  const updateTrainer = () => {
    trainer = trainer;
  };
</script>

<div class="simple-arithmetic-app">
  <div class="app-display">
    {#if trainer.currentQuestion != null}
      <div>
        {trainer.currentQuestion.operand1}
        <span class="app-display-operation"
          >{trainer.currentQuestion.displayOperation()}</span
        >
        {trainer.currentQuestion.operand2}
      </div>
      <div>
        {input}
      </div>
    {:else}
      {title}
    {/if}
  </div>

  <div class="app-stats">
    <div class="app-stat">
      <Icon name="check" />{trainer.determineScore()} / {trainer.records.length}
    </div>
    <div class="app-stat">
      <Icon name="clock" /><Timer bind:this={timer} on:finish={onTimerFinish} />
    </div>
  </div>

  {#if trainer.currentQuestion == null || sessionCompleted}
    <div class="time-buttons">
      {#each TIMES as time}
        <Button on:click={() => startTimer(time.seconds)} label={time.name} />
      {/each}
    </div>
  {/if}
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
