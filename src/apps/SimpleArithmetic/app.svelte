<script>
  import { onMount } from "svelte";
  import { Trainer } from "./lib/Trainer";
  import "./styles.scss";

  export let data;

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

  let test;
  let input = "";

  onMount(() => {
    test = trainer.generateQuestion();
    console.log(test.display());
  });

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
    if (input.length === test.answer.toString().length) {
      if (input == test.answer) {
        console.log("correct");
      } else {
        console.log("incorrect");
      }

      test = trainer.generateQuestion();
      input = "";
      console.log(test.display());
    }
  };
</script>

<div class="simple-arithmetic-app">
  <h1>Simple Arithmetic App</h1>
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
