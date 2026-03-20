<script>
  import '../app.css';  // ← THIS LINE WAS MISSING!
  let { children } = $props();
</script>

<svelte:head>
  <title>m4yku · Portfolio</title>
</svelte:head>

{@render children()}