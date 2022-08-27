<script>
  import { createEventDispatcher } from "svelte";

  export let label;

  const dispatch = createEventDispatcher();
  const onClick = (event) => {
    dispatch("click", event);
  };
</script>

<button class="theme-button" on:click={onClick}>
  <div class="theme-button-label">{label}</div>
</button>

<style>
  .theme-button {
    border-radius: 0.3rem;
    border-width: 0px;
    min-width: 6rem;
    background-color: var(--theme);
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.15s;
    cursor: pointer;
  }

  @media only screen and (min-width: 900px) {
    .theme-button:hover {
      background-color: var(--theme-dark);
    }
  }

  .theme-button-label {
    padding: 0.75rem 1.5rem;
  }
</style>
