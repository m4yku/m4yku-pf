<script>
  // FIX: Added 'id' to your props so the wrapper can use it
  let { children, defaultHeight = "100vh", id = "" } = $props();
  
  let isVisible = $state(false);
  let element;
  
  let calculatedHeight = $state(""); 
  let containerHeight = $derived(calculatedHeight || defaultHeight);

  $effect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          isVisible = true;
        } else {
          if (isVisible && element) {
            calculatedHeight = `${element.getBoundingClientRect().height}px`;
          }
          isVisible = false;
        }
      },
      { rootMargin: '300px' } 
    );

    observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<div {id} bind:this={element} style="min-height: {containerHeight}; width: 100%;">
  {#if isVisible}
    {@render children()}
  {/if}
</div>