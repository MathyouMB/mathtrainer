<script>
  import Checkbox from "../../components/Checkbox.svelte";
  import Button from "../../components/Button.svelte";
  export let exercises;

  let selected = [];
  let arithmeticExercises = exercises.filter(
    (exercise) => exercise.format === "simple-arithmetic"
  );
  let squareExercises = exercises.filter(
    (exercise) => exercise.format === "squares"
  );
  let percentageExercises = exercises.filter(
    (exercise) => exercise.format === "percentages"
  );
</script>

<div>
  <h2>Arithmetic</h2>
  {#each arithmeticExercises as exercise}
    <div>
      <Checkbox bind:group={selected} value={exercise.id} />
      {exercise.title}
    </div>
  {/each}
  <h2>Squares</h2>
  {#each squareExercises as exercise}
    <div>
      <Checkbox bind:group={selected} value={exercise.id} />
      {exercise.title}
    </div>
  {/each}
  <h2>Percentages</h2>
  {#each percentageExercises as exercise}
    <div>
      <Checkbox bind:group={selected} value={exercise.id} />
      {exercise.title}
    </div>
  {/each}
</div>

<br />

{#if selected.length > 0}
  <br />
  <a href={`./exercises/custom?exercises=${selected.join(",")}`}
    ><Button label="Start" /></a
  >
{/if}
