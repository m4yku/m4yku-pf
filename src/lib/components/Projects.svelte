<script>
  import { scrollReveal } from '$lib/scrollReveal.js';
  import { siteAssets } from '$lib/assets.js';

  const TAG = "font-family:'JetBrains Mono',monospace;font-size:0.68rem;padding:0.22rem 0.65rem;border-radius:9999px;border:1px solid rgba(110,203,255,0.3);color:#6ecbff;background:rgba(110,203,255,0.08);";

  const projects = [
    {
      id: 1, 
      title: 'SPES Mobile App', 
      type: 'Mobile & Website', // <--- Pinalitan mula 'Mobile'
      image: siteAssets.projectImg(1),
      tags: ['FlutterFlow', 'Firebase'],
      demo: 'https://spesjobmatch.flutterflow.app/login',
      frontend: '', 
      backend: '',
      description: 'A cross-platform application for the SPES program that helps out-of-school youth and students with tuition assistance and gaining real work experience.',
    },
    {
      id: 2, 
      title: 'Labuyo Fisheries Corp.', 
      type: 'Website',
      image: siteAssets.projectImg(2),
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      demo: '', 
      frontend: 'https://m4yku.github.io/labuyo-githubpages/', 
      backend: 'https://github.com/m4yku/labuyo/',
      description: 'An online ordering system for a local milkfish business with an admin panel for managing products, menus, and customer orders.',
    },
    {
      id: 3, 
      title: 'Sateasfaction Shop', 
      type: 'Website',
      image: siteAssets.projectImg(3),
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      demo: '', 
      frontend: 'https://m4yku.github.io/sateasfaction-githubpages/', 
      backend: 'https://github.com/m4yku/sateasfaction/',
      description: 'A web-based ordering and inventory system for a milk tea shop with a customer ordering page and admin dashboard.',
    },
];
  let imgErrors = $state({});
</script>

<style>
  .type-badge {
    font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
    padding: 0.18rem 0.55rem; border-radius: 9999px;
    border: 1px solid rgba(58,183,255,0.4); background: rgba(58,183,255,0.08); color: #3ab7ff;
  }
  .proj-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }
  @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr; } }
</style>

<section id="projects" style="padding:7rem 1.5rem;position:relative;">
  <div style="position:absolute;width:16rem;height:16rem;background:rgba(110,203,255,0.07);border-radius:50%;filter:blur(80px);top:0;left:0;pointer-events:none;"></div>

  <div style="max-width:1100px;margin:0 auto;">

    <div style="text-align:center;margin-bottom:2.75rem;" use:scrollReveal>
      <p class="sec-tag">// my work</p>
      <h2 class="sec-title">Featured <span style="color:#3ab7ff">Projects</span></h2>
      <p style="color:#5c7b99;margin-top:0.6rem;max-width:30rem;margin-inline:auto;font-size:0.9rem;">Projects built throughout my studies — from web to mobile.</p>
    </div>

    <div class="proj-grid">
      {#each projects as p, i}
        <div use:scrollReveal={{ delay: i + 1 }} class="proj-card-sm" style="background:#16161f;border:1px solid rgba(255,255,255,0.06);border-radius:1rem;overflow:hidden;transition:border-color 0.2s,transform 0.2s,box-shadow 0.2s;display:flex;flex-direction:column;">

          <div style="position:relative;height:11rem;background:#111118;overflow:hidden;flex-shrink:0;">
            {#if !imgErrors[p.id]}
              <img src={p.image} alt={p.title} style="width:100%;height:100%;object-fit:cover;transition:transform 0.4s;" onerror={() => imgErrors = {...imgErrors,[p.id]:true}} />
            {:else}
              <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#111118;">
                <div style="font-size:2.25rem;margin-bottom:0.35rem;">🖼️</div>
                <p style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:#5c7b99;">project-{p.id}.jpg</p>
              </div>
            {/if}
            <div style="position:absolute;top:0.65rem;left:0.65rem;">
              <span class="type-badge">{p.type === 'Mobile' ? '📱' : '🌐'} {p.type}</span>
            </div>
          </div>

          <div style="padding:1.25rem;display:flex;flex-direction:column;flex:1;">
            <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.65rem;">
              {#each p.tags as tag}<span style={TAG}>{tag}</span>{/each}
            </div>
            <h3 style="font-family:'Syne',sans-serif;font-size:1.05rem;font-weight:700;color:#a3e0ff;margin-bottom:0.4rem;">{p.title}</h3>
            <p style="color:#5c7b99;font-size:0.82rem;line-height:1.65;margin-bottom:0.875rem;flex:1;">{p.description}</p>
            <div style="display:flex;gap:0.6rem;margin-top:auto;flex-wrap:wrap;">
              {#if p.demo}
                <a href={p.demo} target="_blank" rel="noopener noreferrer" class="btn-primary" style="text-decoration:none;font-size:0.72rem;padding:0.28rem 0.8rem;">Live Demo</a>
              {/if}
              {#if p.frontend}
                <a href={p.frontend} target="_blank" rel="noopener noreferrer" class="btn-outline" style="text-decoration:none;font-size:0.72rem;padding:0.28rem 0.8rem;">Live View</a>
              {/if}
              {#if p.backend}
                <a href={p.backend} target="_blank" rel="noopener noreferrer" class="btn-outline" style="text-decoration:none;font-size:0.72rem;padding:0.28rem 0.8rem;">Full Project</a>
              {/if}
            </div>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>