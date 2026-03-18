<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const socials = [
    { name: 'GitHub', handle: '@m4yku', link: 'https://github.com/m4yku',
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>` },
    { name: 'Email', handle: 'hello@m4yku.dev', link: 'mailto:hello@m4yku.dev',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
    { name: 'Facebook', handle: 'm4yku', link: 'https://facebook.com/m4yku',
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
  ];
</script>
<section id="contact" style="padding:8rem 1.5rem;background:rgba(17,17,24,0.5);position:relative;overflow:hidden;">
  <div style="position:absolute;width:18rem;height:18rem;background:rgba(110,203,255,0.12);border-radius:50%;filter:blur(80px);bottom:0;left:50%;transform:translateX(-50%);pointer-events:none;"></div>

  <div style="max-width:36rem;margin:0 auto;text-align:center;" use:scrollReveal>
    <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#6ecbff;margin-bottom:0.75rem;">// get in touch</p>
    <h2 style="font-family:'Syne',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:700;color:#a3e0ff;margin-bottom:1rem;">
      Let's <span style="color:#3ab7ff">Connect</span>
    </h2>
    <p style="color:#5c7b99;line-height:1.7;margin-bottom:2.5rem;">
      Whether you have a project in mind, want to collab, or just want to talk ROMs and Linux distros —
      my inbox is always open.
    </p>

    <div style="display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
      {#each socials as s}
        <a href={s.link} target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1.25rem;background:#16161f;border:1px solid rgba(255,255,255,0.06);border-radius:0.75rem;text-decoration:none;transition:all 0.2s;" class="social-card">
          <span style="color:#3ab7ff;">{@html s.icon}</span>
          <div style="text-align:left;">
            <div style="font-family:'Syne',sans-serif;font-weight:600;color:#a3e0ff;font-size:0.85rem;display:block;">{s.name}</div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#5c7b99;">{s.handle}</div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<footer style="border-top:1px solid rgba(255,255,255,0.06);padding:2rem 1.5rem;text-align:center;">
  <p style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:#5c7b99;">
    crafted with 💙 by <span style="color:#6ecbff">m4yku</span> · built with SvelteKit & Tailwind
  </p>
</footer>