<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Expertise from '$lib/components/Expertise.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import '../app.css';

  let activeTab = $state('Hero');
  let isMobile = $state(false);

  onMount(() => {
    // 1. Check screen size para sa Mobile vs Desktop behavior
    const checkMobile = () => isMobile = window.innerWidth < 768;
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 2. I-load ang saved tab mula sa session
    const savedTab = sessionStorage.getItem('activeTab');
    if (savedTab) activeTab = savedTab;

    return () => window.removeEventListener('resize', checkMobile);
  });

  function changeTab(tabName) {
    activeTab = tabName;
    sessionStorage.setItem('activeTab', tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="app-container">
  <Navbar {activeTab} onNavigate={changeTab} />
  
  <main>
    {#if isMobile}
      <div class="mobile-stack">
        <section id="Hero"><Hero onNavigate={changeTab} /></section>
        <section id="About"><About /></section>
        <section id="Expertise"><Expertise /></section>
        <section id="Projects"><Projects /></section>
        <section id="Contact"><Contact /></section>
      </div>
    {:else}
      {#key activeTab}
        <div class="content-wrapper">
          {#if activeTab === 'Hero'}
            <Hero onNavigate={changeTab} />
          {:else if activeTab === 'About'}
            <About />
          {:else if activeTab === 'Expertise'}
            <Expertise />
          {:else if activeTab === 'Projects'}
            <Projects />
          {:else if activeTab === 'Contact'}
            <Contact />
          {/if}
        </div>
      {/key}
    {/if}
  </main>

  <footer style="border-top:1px solid rgba(255,255,255,0.05);padding:1.75rem 1.5rem;text-align:center;">
    <p style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#5c7b99;">
      crafted with 💙 by <span style="color:#6ecbff">m4yku</span> · built with SvelteKit
    </p>
  </footer>
</div>

<style>
  main {
    min-height: calc(100vh - 80px);
    padding-top: 80px;
  }

  .mobile-stack { display: flex; flex-direction: column; }
  
  .content-wrapper {
    animation: fadeIn 0.4s ease-out forwards;
  }

  @keyframes fadeIn { 
    from { opacity: 0; transform: translateY(10px); } 
    to { opacity: 1; transform: translateY(0); } 
  }
</style>