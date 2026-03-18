<script>
  import { scrollReveal } from '$lib/scrollReveal.js';
  let imgError = $state(false);

  const badges = [
    { icon: '💻', label: 'Web Developer' },
    { icon: '🐧', label: 'OS Learner & Enthusiast' },
    { icon: '📱', label: 'Custom ROM Lover' },
  ];
</script>

<section id="about" style="padding:8rem 1.5rem;position:relative;">
  <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:1px;height:6rem;background:linear-gradient(to bottom, transparent, rgba(110,203,255,0.5));"></div>

  <div style="max-width:1152px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;" class="about-grid">

    <div style="display:flex;justify-content:center;" use:scrollReveal>
      <div style="position:relative;">
        <div style="position:absolute;inset:0;border-radius:1rem;border:1px solid rgba(110,203,255,0.2);transform:rotate(3deg) scale(1.05);"></div>
        <div style="position:absolute;inset:0;border-radius:1rem;border:1px solid rgba(58,183,255,0.15);transform:rotate(-2deg) scale(1.1);"></div>
        
        <div style="position:relative;width:18rem;height:18rem;border-radius:1rem;overflow:hidden;border:1px solid rgba(255,255,255,0.06);background:#111118;">
          {#if !imgError}
            <img src="/me.jpg" alt="m4yku" style="width:100%;height:100%;object-fit:cover;" onerror={() => imgError = true} />
          {:else}
            <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#111118;">
              <span style="font-size:5rem;">👤</span>
              <p style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#5c7b99;margin-top:0.5rem;">Add me.jpg to /static/</p>
            </div>
          {/if}
          <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(10,10,15,0.6), transparent);"></div>
        </div>
        
        <div style="position:absolute;bottom:-1rem;right:-1rem;background:#16161f;border:1px solid rgba(255,255,255,0.06);border-radius:0.75rem;padding:0.6rem 1rem;">
          <span style="font-family:'Syne',sans-serif;font-weight:700;color:#a3e0ff;display:block;">m4yku</span>
          <span style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#6ecbff;">@dev</span>
        </div>
      </div>
    </div>

    <div use:scrollReveal={{ delay: 2 }}>
      <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#6ecbff;margin-bottom:0.75rem;">// about me</p>
      <h2 style="font-family:'Syne',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:700;color:#a3e0ff;margin-bottom:1.5rem;line-height:1.1;">
        Hi, I'm <span style="color:#6ecbff">m4yku</span> 👋
      </h2>
      <p style="color:#5c7b99;line-height:1.8;margin-bottom:1.5rem;">
        A passionate web developer who loves tinkering with technology beyond just writing code. Whether it's flashing a custom ROM to breathe new life into old hardware, exploring Linux distributions, or building clean web experiences — I'm always deep in something interesting.
      </p>
      
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:2rem;">
        {#each badges as badge}
          <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border-radius:9999px;background:#111118;border:1px solid rgba(255,255,255,0.06);">
            <span>{badge.icon}</span>
            <span style="font-size:0.85rem;color:#a3e0ff;">{badge.label}</span>
          </div>
        {/each}
      </div>
      
      <a href="/resume.pdf" download class="btn-primary" style="display:inline-flex;align-items:center;gap:0.5rem;text-decoration:none;">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        Download Resume
      </a>
    </div>
  </div>
</section>