<script>
  import Checkbox from "../../components/Checkbox.svelte";
  import Button from "../../components/Button.svelte";
  export let exercises;

  let selected = [];
</script>

<div>
  {#each exercises as exercise}
    <div>
      <Checkbox bind:group={selected} value={exercise.id} />
      {exercise.title}
    </div>
  {/each}
</div>

<br />

{#if selected.length > 0}
  <a href={`../exercises/custom?exercises=${selected.join(",")}`}
    ><Button label="Start" /></a
  >
{/if}
