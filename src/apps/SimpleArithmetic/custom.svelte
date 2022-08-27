<script>
  import { onMount } from "svelte/internal";
  import App from "./app.svelte";
  export let exercises;

  let selectedExercises = [];
  let hasSelectedExercisesIds = false;

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasSelectedIds = urlParams.has("exercises");

    // TODO: ERROR on invalid ids?
    if (hasSelectedIds === true) {
      hasSelectedExercisesIds = true;

      const selectedIds = urlParams.get("exercises");

      selectedExercises = exercises.filter((exercise) =>
        selectedIds.includes(exercise.id)
      );
      selectedExercises = selectedExercises.map((exercise) => {
        return exercise.data;
      });
    }
  });
</script>

{#if hasSelectedExercisesIds && selectedExercises.length > 0}
  <App title="Select Exercise Duration" data={selectedExercises} />
{/if}
