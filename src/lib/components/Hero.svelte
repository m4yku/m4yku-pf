<script>
  import { onMount } from 'svelte';
  import { scrollReveal } from '$lib/scrollReveal';

  // FIX 1: Tanggapin ang onNavigate bilang prop
  let { onNavigate } = $props(); 

  const roles = ['Web Developer', 'OS Enthusiast', 'Custom ROM Lover'];
  let currentRole = $state(0);

  onMount(() => {
    const t = setInterval(() => currentRole = (currentRole + 1) % roles.length, 2500);
    return () => clearInterval(t);
  });

  // FIX 2: Alisin mo na yung `const scrollTo = id => ...` line dito dahil hindi na kailangan.
</script>

<section id="hero" style="position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:0 1.5rem;background-image:linear-gradient(#ffffff05 1px,transparent 1px),linear-gradient(90deg,#ffffff05 1px,transparent 1px);background-size:60px 60px;">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>

  <div class="container">
    <h1 use:scrollReveal={{ delay: 1 }} class="title">
      m4<span class="accent1">yku</span><span class="accent2">.</span>
    </h1>

    <div class="role">
      {#key currentRole}
        <p class="role-text slide">
          <span class="pipe">|</span>
          {roles[currentRole]}
          <span class="pipe">|</span>
        </p>
      {/key}
    </div>

    <p use:scrollReveal={{ delay: 2 }} class="desc">
      Crafting digital experiences with clean code and a passion for open-source systems.
      Tinkering with ROMs, pushing pixels, and building for the web.
    </p>

   <div use:scrollReveal={{ delay: 3 }} class="actions">
      <button onclick={() => onNavigate('Projects')} class="btn-primary">View Projects</button>
      <button onclick={() => onNavigate('Contact')} class="btn-outline">Get in touch →</button>
    </div>
  </div>
</section>