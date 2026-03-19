<script>
  let { children, defaultHeight = "100vh" } = $props();
  
  let isVisible = $state(false);
  let element;
  let containerHeight = $state(defaultHeight);

  $effect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          isVisible = true;
        } else {
          if (element && isVisible) {
            containerHeight = `${element.getBoundingClientRect().height}px`;
          }
          isVisible = false;
        }
      },
      { rootMargin: '300px' } 
    );

    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  });
</script>

<div bind:this={element} style="min-height: {containerHeight};">
  {#if isVisible}
    {@render children()}
  {/if}
</div>