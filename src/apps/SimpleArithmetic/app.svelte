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

  onMount(() => {
    const test = trainer.generateQuestion();
    console.log(test);
  });
</script>

<div class="simple-arithmetic-app">
  <h1>Simple Arithmetic App</h1>
</div>
