<script>
  import { onMount } from 'svelte';

  let scrolled      = $state(false);
  let menuOpen      = $state(false);
  let isMobile      = $state(true);
  let activeSection = $state('');
  let mounted       = $state(false);
  let scrollProgress = $state(0);

  const links = ['About', 'Expertise', 'Projects', 'Contact'];

  const socials = [
    {
      label: 'GitHub', href: 'https://github.com/m4yku',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    },
    {
      label: 'Facebook', href: 'https://facebook.com/M4yku',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>`,
    },
    {
      label: 'Instagram', href: 'https://instagram.com/mamaykcm',
      svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.644.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.014 7.052.072 4.977.167 3.065.916 1.744 2.237.423 3.558-.326 5.47-.421 7.544-.48 8.824-.494 9.233-.494 12s.014 3.176.072 4.456c.095 2.075.844 3.987 2.165 5.308 1.321 1.321 3.233 2.07 5.308 2.165C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c2.075-.095 3.987-.844 5.308-2.165 1.321-1.321 2.07-3.233 2.165-5.308.058-1.28.072-1.689.072-4.456s-.014-3.176-.072-4.456c-.095-2.075-.844-3.987-2.165-5.308C20.935.916 19.023.167 16.948.072 15.668.014 15.259 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>`,
    },
  ];

  onMount(() => {
    mounted = true;
    const checkMobile = () => isMobile = window.innerWidth < 768;
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onScroll = () => {
      scrolled = window.scrollY > 20;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = dh > 0 ? Math.min((window.scrollY / dh) * 100, 100) : 0;
      for (const link of [...links].reverse()) {
        const el = document.getElementById(link.toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) { activeSection = link; return; }
      }
      activeSection = '';
    };

    window.addEventListener('scroll', onScroll);
    return () => { window.removeEventListener('resize', checkMobile); window.removeEventListener('scroll', onScroll); };
  });

  $effect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; });

  // Custom function for smooth scrolling anchors
  function handleLinkClick(e, link) {
    e.preventDefault();
    menuOpen = false;
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<style>
  .social-link {
    display: flex; align-items: center; justify-content: center;
    width: 1.9rem; height: 1.9rem; border-radius: 0.45rem;
    color: var(--text-muted); border: 1px solid transparent;
    transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
    text-decoration: none;
  }
  .social-link:hover { color: var(--primary); border-color: rgba(110,203,255,0.25); background: rgba(110,203,255,0.06); transform: translateY(-2px); }
  .social-link :global(svg) { width: 0.95rem; height: 0.95rem; }

  .mobile-social-link {
    display: flex; align-items: center; gap: 0.75rem;
    padding: 0.75rem 1rem; flex: 1;
    border: 1px solid rgba(110,203,255,0.15); border-radius: 0.75rem;
    color: var(--primary); text-decoration: none;
    font-family: 'Syne', sans-serif; font-weight: 600; font-size: 0.95rem;
    background: rgba(110,203,255,0.04); transition: background 0.2s, border-color 0.2s;
  }
  .mobile-social-link:hover { background: rgba(110,203,255,0.12); border-color: var(--primary); color: #fff; }
  .mobile-social-link :global(svg) { width: 1.1rem; height: 1.1rem; flex-shrink: 0; }
</style>

<header class="nav-header" class:scrolled class:mounted>
  <div class="progress-track">
    <div class="progress-bar" style="width:{scrollProgress}%"></div>
  </div>
  <nav class="nav-inner">
    <button class="nav-logo" onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <span class="logo-m">m4</span><span class="logo-yku">yku</span><span class="logo-dot">.</span><span class="logo-cursor">_</span>
    </button>

    {#if !isMobile}
      <ul class="nav-links">
        {#each links as link, i}
          <li style="animation-delay:{i*75}ms" class="nav-item" class:mounted>
            <a 
              href="#{link.toLowerCase()}" 
              class="nav-btn" 
              class:active={activeSection === link} 
              onclick={(e) => handleLinkClick(e, link)}
              style="text-decoration: none; color: inherit; display: inline-flex;"
            >
              <span class="nav-prefix">./</span>
              <span class="nav-label">{link}</span>
              <span class="nav-underline"></span>
            </a>
          </li>
        {/each}
      </ul>
      <div class="nav-right" class:mounted>
        {#each socials as s}
          <a href={s.href} target="_blank" rel="noopener noreferrer" class="social-link" aria-label={s.label}>
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

<div class="mobile-overlay" class:open={menuOpen} style="pointer-events: {menuOpen ? 'auto' : 'none'};">
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="mobile-inner">
    <div style="height:64px;flex-shrink:0;"></div>
    <nav class="mobile-nav">
      {#each links as link, i}
        <a
          href="#{link.toLowerCase()}"
          class="mobile-link"
          style="transition-delay:{menuOpen ? i*65+50 : 0}ms; text-decoration: none;"
          class:visible={menuOpen}
          onclick={(e) => handleLinkClick(e, link)}
        >
          <span class="mobile-num">0{i+1}</span>
          <span class="mobile-label">{link}</span>
          <span class="mobile-arrow">→</span>
        </a>
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