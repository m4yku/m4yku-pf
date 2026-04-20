<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Expertise from '$lib/components/Expertise.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import '../app.css';

  const titleMap = {
    'Hero': 'Home',
    'About': 'About Me',
    'Expertise': 'Skills',
    'Projects': 'My Works',
    'Contact': 'Get in Touch'
  };

  let activeTab = $state('Hero'); // 
  let isMobile = $state(false); // 

 onMount(() => {
  // Check mobile state pagka-load 
  const checkMobile = () => isMobile = window.innerWidth < 768;
  checkMobile();
  window.addEventListener('resize', checkMobile);

  // I-load ang saved tab mula sa session 
  const savedTab = sessionStorage.getItem('activeTab');
  
  // VALIDATION: Siguraduhin na 'Hero' ang ilo-load kung 'hero-section' ang nakuha
  if (savedTab) {
    if (savedTab === 'hero-section') {
      activeTab = 'Hero';
    } else {
      activeTab = savedTab;
    }
  }

  return () => window.removeEventListener('resize', checkMobile);
});

  function changeTab(tabName) {
    activeTab = tabName; // [cite: 54]
    sessionStorage.setItem('activeTab', tabName); // [cite: 54]
    
    // Smooth scroll sa taas tuwing nagpapalit ng tab sa desktop 
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
</script>

<svelte:head>
  <title>m4yku · {titleMap[activeTab] || activeTab}</title>
</svelte:head>

<div class="app-container">
  <Navbar {activeTab} onNavigate={changeTab} />
  
  <main>
    {#if isMobile}
      <div class="mobile-stack">
        <section id="Hero"><Hero onNavigate={changeTab} {isMobile} /></section>
        <section id="About"><About /></section>
        <section id="Expertise"><Expertise /></section>
        <section id="Projects"><Projects /></section>
        <section id="Contact"><Contact /></section>
      </div>
    {:else}
      {#key activeTab}
        <div class="content-wrapper">
          {#if activeTab === 'Hero'}
            <Hero onNavigate={changeTab} {isMobile} />
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
</div>

<style>
  main {
    min-height: calc(100vh - 80px); /* [cite: 59] */
    padding-top: 80px; /* [cite: 59] */
  }
  .mobile-stack { display: flex; flex-direction: column; gap: 2rem; } /* [cite: 60] */
  .content-wrapper { animation: fadeIn 0.4s ease-out forwards; } /* [cite: 61] */
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } /* [cite: 62] */
</style>
