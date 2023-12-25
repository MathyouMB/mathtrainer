<script>
  import Timer from "../../components/Timer.svelte";
  import Button from "../../components/Button.svelte";
  import Icon from "../../components/Icon.svelte";
  import { Trainer } from "./lib/Trainer";
  import "./styles.scss";

  export let data;
  export let title;

  const NUMPAD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "←", "0", "."];

  const TIMES = [
    {
      name: "1 minute",
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
  let currentlyIncorrect = false;
  let currentlyCorrect = false;
  let lifeMode = false;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const onKeyDown = async (e) => {
    if (sessionCompleted || currentlyIncorrect) return;

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

    // if key is .
    if (e.keyCode === 190) {
      input += ".";
    }

    validateInput();
  };

  const onNumpadInput = async (num) => {
    if (sessionCompleted || currentlyIncorrect) return;

    if (num == "←") {
      if (input.length > 0) {
        input = input.slice(0, input.length - 1);
      }
    } else {
      input += num;
    }

    validateInput();
  };

  const validateInput = async () => {
    // if input is as long as the answer)
    if (input.length === trainer.currentQuestion.answer.toString().length) {
      const isCorrect = trainer.submitAnswer(input);

      // TODO: these flags could just be one state variable...
      if (isCorrect) {
        currentlyCorrect = true;
        await sleep(100);
        currentlyCorrect = false;
        console.log("correct");
      } else {
        currentlyIncorrect = true;
        await sleep(800);
        currentlyIncorrect = false;
        console.log("incorrect");
      }

      trainer.generateQuestion();
      input = "";
      updateTrainer();
      console.log(trainer.currentQuestion.display());
    }
  };

  const onTimerFinish = () => {
    console.log("timer finished");
    sessionCompleted = true;
    currentlyCorrect = false;
    currentlyIncorrect = false;
    input = "";
  };

  const start = () => {
    trainer.initialize();
    updateTrainer();
    console.log(trainer.currentQuestion.display());
    console.log(trainer.currentQuestion);
  };

  const startLifeMode = () => {
    sessionCompleted = false;
    lifeMode = true;

    start();
  };

  const startTimer = (seconds) => {
    timer.start(seconds);
    sessionCompleted = false;
    lifeMode = false;

    start();
  };

  const updateTrainer = () => {
    trainer = trainer;
  };
</script>

<div class="simple-arithmetic-app">
  <div class="app-display">
    {#if trainer.currentQuestion != null}
      <div class="app-display-question">
        {#if trainer.currentQuestion.operation === "commonFraction"}
          <div class="app-display-question-container">
            <div>
              <div>{trainer.currentQuestion.operand1}</div>
              <div class="fraction-line" />
              <div>{trainer.currentQuestion.operand2}</div>
            </div>
            <div style="margin-left: 1.5rem;">
              <span>=</span><span style="margin-left: 1.5rem;"
                ><span class="app-display-operation">__</span> %</span
              >
            </div>
          </div>
        {:else if trainer.currentQuestion.operation === "squares"}
          <div class="app-display-question-container">
            {trainer.currentQuestion.operand1}
            <div class="app-display-operation exponent">
              {trainer.currentQuestion.displayOperation()}
            </div>
            {trainer.currentQuestion.operand2}
          </div>
        {:else if trainer.currentQuestion.operation === "percents-of-whole-numbers"}
          <div class="app-display-question-container">
            {trainer.currentQuestion.operand1}
            <span class="app-display-operation">%&nbsp</span>
            of
            {trainer.currentQuestion.operand2}
          </div>
        {:else}
          {trainer.currentQuestion.operand1}
          <span class="app-display-operation"
            >{trainer.currentQuestion.displayOperation()}</span
          >
          {trainer.currentQuestion.operand2}
        {/if}
      </div>
      <div>
        {#if currentlyIncorrect}
          <span style="color: #ff4948"
            >{input} ≠ {trainer.currentQuestion.answer}</span
          >
        {:else if currentlyCorrect}
          <span style="color: #01f477">{input}</span>
        {:else}
          {input}
        {/if}
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
      <Icon name="clock" /><Timer
        bind:this={timer}
        on:finish={onTimerFinish}
        {lifeMode}
      />
    </div>
  </div>

  {#if trainer.currentQuestion == null || sessionCompleted}
    <div class="time-buttons">
      {#each TIMES as time}
        <Button on:click={() => startTimer(time.seconds)} label={time.name} />
      {/each}
      <div id="life-button">
        <Button on:click={() => startLifeMode()} label="Life" />
      </div>
    </div>
  {:else}
    <div class="app-numpad">
      {#each NUMPAD as num}
        <Button on:click={() => onNumpadInput(num)} label={num} />
      {/each}
    </div>
  {/if}
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
