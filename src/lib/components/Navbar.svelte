<script>
  import { onMount } from 'svelte';

  // Tanggapin ang props mula sa parent component (+page.svelte)
  let { activeTab, onNavigate } = $props();

  let scrolled = $state(false);
  let menuOpen = $state(false);
  let isMobile = $state(true);
  let mounted  = $state(false);
  
  // Inalis ko ang Hero sa listahan para hindi masyadong mahaba ang nav, pero pwede mong ibalik kung gusto mo.
  // Ang 'id' ang ipapasa natin sa onNavigate.
  const links = [
    { label: 'Home', id: 'Hero' },
    { label: 'About', id: 'About' },
    { label: 'Expertise', id: 'Expertise' },
    { label: 'Projects', id: 'Projects' },
    { label: 'Contact', id: 'Contact' }
  ];

const socials = [
    {
      label: 'GitHub', href: 'https://github.com/m4yku',
      svg: `<svg style="width: 1.2rem; height: 1.2rem;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    },
    {
      label: 'LinkedIn', href: 'https://www.linkedin.com/in/mike-marquez-35b08b401/', 
      svg: `<svg style="width: 1.2rem; height: 1.2rem;" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    }
  ];

  onMount(() => {
    mounted = true;
    const checkMobile = () => isMobile = window.innerWidth < 768;
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onScroll = () => {
      scrolled = window.scrollY > 20;
    };

    window.addEventListener('scroll', onScroll);
    return () => { 
      window.removeEventListener('resize', checkMobile); 
      window.removeEventListener('scroll', onScroll); 
    };
  });

  $effect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; });

  // Sa loob ng Navbar.svelte
  function handleNavClick(id) {
    if (isMobile) {
      // Hanapin ang element gamit ang ID at i-scroll sa kanya
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        menuOpen = false;
      }
    } else {
      // Desktop: Dynamic tab switch
      onNavigate(id);
      menuOpen = false;
    }
  }
</script>

<style>

.social-link-web {
    display: flex; align-items: center; justify-content: center;
    width: 2.2rem; height: 2.2rem; border-radius: 0.5rem;
    background: rgba(110,203,255,0.05); border: 1px solid rgba(110,203,255,0.1);
    color: #6ecbff; transition: all 0.2s;
  }
  .social-link-web:hover { background: rgba(110,203,255,0.15); border-color: #6ecbff; transform: translateY(-2px); }

  .mobile-social-link {
    display: flex;
    align-items: center;
    justify-content: center; /* Ise-center ang icon at text sa loob */
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    flex: 1; /* Para maging pantay ang lapad nilang dalawa */
    border: 1px solid rgba(110,203,255,0.15);
    border-radius: 0.75rem;
    color: #3ab7ff;
    text-decoration: none;
    font-family: 'Syne', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    background: rgba(110,203,255,0.04);
    transition: background 0.2s, border-color 0.2s, color 0.2s;
  }

  .mobile-social-link:hover {
    background: rgba(110,203,255,0.12);
    border-color: #3ab7ff;
    color: #ffffff;
  }

  /* Force sizing just in case */
  .mobile-social-link :global(svg) {
    width: 1.2rem !important;
    height: 1.2rem !important;
    flex-shrink: 0;
  }
</style>

<header class="nav-header" class:scrolled class:mounted>
  <nav class="nav-inner">
    <button class="nav-logo" onclick={() => handleNavClick('Hero')} style="background: none; border: none; cursor: pointer;">
      <span class="logo-m">m4</span><span class="logo-yku">yku</span><span class="logo-dot">.</span><span class="logo-cursor">_</span>
    </button>

    {#if !isMobile}
      <ul class="nav-links">
        {#each links as link, i}
          <li style="animation-delay:{i*75}ms" class="nav-item" class:mounted>
            <button class="nav-btn" class:active={activeTab === link.id} onclick={() => handleNavClick(link.id)}>
              <span class="nav-prefix">./</span>
              <span class="nav-label">{link.label}</span>
              <span class="nav-underline"></span>
            </button>
          </li>
        {/each}
      </ul>
     <div class="nav-right" class:mounted>
  {#each socials as s}
    <a href={s.href} target="_blank" rel="noopener noreferrer" class="social-link-web" aria-label={s.label}>
      {@html s.svg}
    </a>
  {/each}
</div>
    {:else}
      <button class="hamburger" class:open={menuOpen} onclick={() => menuOpen = !menuOpen} aria-label="Toggle menu">
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
        <span class="bar bar-3"></span>
      </button>
    {/if}
  </nav>
</header>

<div class="mobile-overlay" class:open={menuOpen}>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="mobile-inner">
    <div style="height:64px;flex-shrink:0;"></div>
    <nav class="mobile-nav">
      {#each links as link, i}
        <button
          class="mobile-link"
          style="transition-delay:{menuOpen ? i*65+50 : 0}ms"
          class:visible={menuOpen}
          onclick={() => handleNavClick(link.id)}
        >
          <span class="mobile-num">0{i+1}</span>
          <span class="mobile-label">{link.label}</span>
          <span class="mobile-arrow">→</span>
        </button>
      {/each}
    </nav>
    <div class="mobile-footer" class:visible={menuOpen} style="transition-delay:{menuOpen ? '320ms' : '0ms'}">
      <div style="display:flex;gap:0.6rem;">
        {#each socials as s}
          <a href={s.href} target="_blank" rel="noopener noreferrer" class="mobile-social-link" aria-label={s.label}>
            {@html s.svg}
            <span>{s.label}</span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>