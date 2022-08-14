<script>
  import { createEventDispatcher, onDestroy } from "svelte";

  const dispatch = createEventDispatcher();

  let countdown = 0;
  let now = Date.now();
  let end = now + countdown * 1000;

  $: count = Math.round((end - now) / 1000);
  $: h = Math.floor(count / 3600);
  $: m = Math.floor((count - h * 3600) / 60);
  $: s = count - h * 3600 - m * 60;

  export function start(seconds) {
    handleStart(seconds);
  }

  function updateTimer() {
    now = Date.now();
  }

  let interval = setInterval(updateTimer, 1000);
  $: if (count === 0) handleFinish();

  let isPaused;
  let isResetting;
  const duration = 1000;

  /*
  function handleNew() {
    clearInterval(interval);
    dispatch("new");
  }
  */

  function handleStart(seconds) {
    countdown = seconds;
    now = Date.now();
    end = Date.now() + countdown * 1000;
    interval = setInterval(updateTimer, 1000);
    isPaused = false;
  }

  function handleFinish() {
    clearInterval(interval);
    dispatch("finish");
  }

  /*
  function handlePause() {
    clearInterval(interval);
    isPaused = true;
  }

  function handleReset() {
    clearInterval(interval);
    isResetting = true;
    isPaused = false;
    now = Date.now();
    end = now + countdown * 1000;
    interval = setInterval(updateTimer, 1000);
  }
  */

  const displayTimeWithZeros = (time) => {
    return time < 10 ? "0" + time : time;
  };

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div>{displayTimeWithZeros(m)}:{displayTimeWithZeros(s)}</div>
