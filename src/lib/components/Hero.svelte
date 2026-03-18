<script>
  import { onMount } from 'svelte';
  import { scrollReveal } from '$lib/scrollReveal';
  

  const roles = ['Web Developer', 'OS Learner & Enthusiast', 'Custom ROM Lover'];
  let currentRole = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentRole = (currentRole + 1) % roles.length;
    }, 2500);

    return () => clearInterval(interval);
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<section
  id="hero"
  style="position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:0 1.5rem;background-image:linear-gradient(#ffffff05 1px, transparent 1px),linear-gradient(90deg, #ffffff05 1px, transparent 1px);background-size:60px 60px;"
>

  <!-- 🔵 floating blobs -->
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>

  <div class="container">

    <!-- title -->
    <h1 use:scrollReveal={{ delay: 2 }} class="title">
      m4<span class="accent1">yku</span><span class="accent2">.</span>
    </h1>

    <!-- roles -->
   <div class="role">
  {#key currentRole}
    <p class="role-text slide">
      <span class="pipe">|</span>
      {roles[currentRole]}
      <span class="pipe">|</span>
    </p>
  {/key}
</div>

    <!-- description -->
    <p use:scrollReveal={{ delay: 4 }} class="desc">
      Crafting digital experiences with clean code and a passion for open-source systems.
      Tinkering with ROMs, pushing pixels, and building for the web.
    </p>

    <!-- buttons -->
    <div use:scrollReveal={{ delay: 5 }} class="actions">
      <button on:click={() => scrollTo('projects')} class="btn-primary">
        View Projects
      </button>
      <button on:click={() => scrollTo('contact')} class="btn-outline">
        Get in touch →
      </button>
    </div>

  </div>

  <!-- 🖱️ scroll indicator -->
  <div use:scrollReveal={{ delay: 6 }} class="scroll-indicator">
    <span class="scroll-text">scroll</span>
    <div class="scroll-icon">
      <div class="scroll-dot"></div>
    </div>
  </div>

</section>
<style>

</style>