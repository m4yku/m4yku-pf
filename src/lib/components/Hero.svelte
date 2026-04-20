<script>
  import { onMount } from 'svelte';
  import { scrollReveal } from '$lib/scrollReveal';

  // Tanggapin ang props mula sa +page.svelte
  let { onNavigate, isMobile } = $props(); 

  const roles = ['Web Developer', 'OS Enthusiast', 'Custom ROM Lover'];
  let currentRole = $state(0);

  onMount(() => {
    const t = setInterval(() => currentRole = (currentRole + 1) % roles.length, 2500);
    return () => clearInterval(t);
  });

  // Pinag-isang navigation logic para sa Desktop at Mobile
  function handleButtonClick(id) {
    if (isMobile) {
      // MOBILE: Manual scroll calculation para sa offset ng Navbar
      const el = document.getElementById(id);
      if (el) {
        const offset = 80; // Height ng iyong navbar
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // DESKTOP: Dynamic tab switch
      onNavigate(id);
    }
  }
</script>

<style>
  /* FIX: Sinisigurong clickable ang buttons sa mobile at hindi nahaharangan */
  .blob {
    pointer-events: none !important;
    z-index: 0;
  }

  .actions {
    position: relative;
    z-index: 50; 
  }

  .btn-primary, .btn-outline {
    cursor: pointer;
    touch-action: manipulation;
  }
</style>

<section id="hero-section" style="position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:0 1.5rem;background-image:linear-gradient(#ffffff05 1px,transparent 1px),linear-gradient(90deg,#ffffff05 1px,transparent 1px);background-size:60px 60px;">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>

  <div class="container" style="text-align: center;">
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
      <button onclick={() => handleButtonClick('Projects')} class="btn-primary">View Projects</button>
      <button onclick={() => handleButtonClick('Contact')} class="btn-outline">Get in touch →</button>
    </div>
  </div>
</section>