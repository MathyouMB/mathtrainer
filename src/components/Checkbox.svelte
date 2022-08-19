<script>
  // Source: https://svelte.dev/repl/de117399559f4e7e9e14e2fc9ab243cc?version=3.12.1

  export let group;
  export let value;
  export let checked;

  $: updateChekbox(group);
  $: updateGroup(checked);

  function updateChekbox(group) {
    checked = group.indexOf(value) >= 0;
  }

  function updateGroup(checked) {
    const index = group.indexOf(value);
    if (checked) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
</script>

<input type="checkbox" bind:checked {value} />
