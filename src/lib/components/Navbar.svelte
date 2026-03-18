<script>
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let menuOpen = $state(false);
  let isMobile = $state(true);
  let activeSection = $state('');
  let mounted = $state(false);
  let scrollProgress = $state(0);

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  onMount(() => {
    mounted = true;
    const checkMobile = () => { isMobile = window.innerWidth < 768; };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      scrolled = window.scrollY > 20;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = docHeight > 0 ? Math.min((window.scrollY / docHeight) * 100, 100) : 0;
      for (const link of [...links].reverse()) {
        const el = document.getElementById(link.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) { activeSection = link; return; }
      }
      activeSection = '';
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Lock/unlock body scroll when mobile menu opens/closes
  $effect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });

  function scrollTo(id) {
    menuOpen = false;
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<!-- NAVBAR BAR -->
<header class="nav-header" class:scrolled class:mounted>
  <div class="progress-track">
    <div class="progress-bar" style="width: {scrollProgress}%"></div>
  </div>
  <nav class="nav-inner">
   <button class="nav-logo" onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <span class="logo-m">m4</span><span class="logo-yku">yku</span><span class="logo-dot">.</span>
  <span class="logo-cursor">_</span>
</button>

    {#if !isMobile}
      <ul class="nav-links">
        {#each links as link, i}
          <li style="animation-delay: {i * 80}ms" class="nav-item" class:mounted>
            <button class="nav-btn" class:active={activeSection === link} onclick={() => scrollTo(link)}>
              <span class="nav-prefix">./</span>
              <span class="nav-label">{link}</span>
              <span class="nav-underline"></span>
            </button>
          </li>
        {/each}
      </ul>
      <div class="nav-right" class:mounted>
        <div class="nav-status">
          <span class="status-dot"></span>
          <span class="status-text">open to work</span>
        </div>
        <a href="mailto:hello@m4yku.dev" class="hire-btn">
          <span>Hire me</span>
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
    {/if}

    {#if isMobile}
      <button class="hamburger" class:open={menuOpen} onclick={() => { menuOpen = !menuOpen; }} aria-label="Toggle menu">
        <span class="bar bar-1"></span>
        <span class="bar bar-2"></span>
        <span class="bar bar-3"></span>
      </button>
    {/if}
  </nav>
</header>

<!-- MOBILE FULLSCREEN OVERLAY — lives outside <header> so it covers 100vh -->
<div class="mobile-overlay" class:open={menuOpen}>
  <!-- Decorative background orbs -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="mobile-inner">
    <div class="mobile-topbar">
     
    </div>

    <nav class="mobile-nav">
      {#each links as link, i}
        <button
          class="mobile-link"
          style="transition-delay: {menuOpen ? i * 70 + 60 : 0}ms"
          class:visible={menuOpen}
          onclick={() => scrollTo(link)}
        >
          <span class="mobile-num">0{i + 1}</span>
          <span class="mobile-label">{link}</span>
          <span class="mobile-arrow">→</span>
        </button>
      {/each}
    </nav>

    <div class="mobile-footer" class:visible={menuOpen} style="transition-delay: {menuOpen ? '360ms' : '0ms'}">
      <a href="mailto:hello@m4yku.dev" class="mobile-cta">Say Hello →</a>
      <p class="mobile-tagline">Web Dev · OS Enthusiast · ROM Lover</p>
    </div>
  </div>
</div>
