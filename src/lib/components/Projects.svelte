<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const projects = [
    { id: 1, title: 'Project Alpha', image: '/projects/project-1.jpg', tags: ['HTML5', 'PHP', 'Firebase'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      longDesc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
      link: 'https://spesjobmatch.flutterflow.app/login', github: '#', featured: true },
    { id: 2, title: 'Project Beta', image: '/projects/project-2.jpg', tags: ['FlutterFlow', 'Firebase'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
      longDesc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur.',
      link: '#', github: '#', featured: true },
    { id: 3, title: 'Project Gamma', image: '/projects/project-3.jpg', tags: ['HTML5', 'PHP'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      longDesc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit consequuntur magni dolores.',
      link: '#', github: '#', featured: false },
    { id: 4, title: 'Project Delta', image: '/projects/project-4.jpg', tags: ['Firebase', 'FlutterFlow'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos.',
      longDesc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus placeat.',
      link: '#', github: '#', featured: false },
  ];

  let imgErrors = $state({});
</script>
<section id="projects" style="padding:8rem 1.5rem;position:relative;overflow:hidden;">
  <div style="position:absolute;width:18rem;height:18rem;background:rgba(110,203,255,0.08);border-radius:50%;filter:blur(80px);top:0;left:0;pointer-events:none;"></div>

  <div style="max-width:1152px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:4rem;" use:scrollReveal>
      <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#6ecbff;margin-bottom:0.75rem;">// my work</p>
      <h2 style="font-family:'Syne',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:700;color:#a3e0ff;">Featured <span style="color:#3ab7ff">Projects</span></h2>
      <p style="color:#5c7b99;margin-top:1rem;max-width:32rem;margin-left:auto;margin-right:auto;font-size:0.95rem;">Placeholder content — replace with real projects later.</p>
    </div>

    <div style="display:flex;flex-direction:column;gap:2.5rem;margin-bottom:2.5rem;">
      {#each projects.filter(p => p.featured) as project, i}
        <div use:scrollReveal={{ delay: 1 }} style="display:grid;grid-template-columns:1fr 1fr;border-radius:1rem;overflow:hidden;background:#16161f;border:1px solid rgba(255,255,255,0.06);transition:all 0.5s;" class="proj-card-lg">
          <div style="position:relative;overflow:hidden;min-height:14rem;background:#111118;{i % 2 === 1 ? 'order:2;' : ''}">
            {#if !imgErrors[project.id]}
              <img src={project.image} alt={project.title} style="width:100%;height:100%;object-fit:cover;transition:transform 0.7s;" onerror={() => { imgErrors = {...imgErrors, [project.id]: true}; }} />
            {:else}
              <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#111118;">
                <div style="font-size:3rem;margin-bottom:0.5rem;">🖼️</div>
                <p style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#5c7b99;">project-{project.id}.jpg</p>
              </div>
            {/if}
            <div style="position:absolute;inset:0;background:linear-gradient(to right, rgba(22,22,31,0.4), transparent);"></div>
            <div style="position:absolute;top:1rem;left:1rem;font-family:'Syne',sans-serif;font-size:3.5rem;font-weight:800;color:rgba(255,255,255,0.08);">0{project.id}</div>
          </div>

          <div style="padding:2rem;display:flex;flex-direction:column;justify-content:center;{i % 2 === 1 ? 'order:1;' : ''}">
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
              {#each project.tags as tag}
                <span style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;padding:0.25rem 0.75rem;border-radius:9999px;border:1px solid rgba(110,203,255,0.3);color:#6ecbff;background:rgba(110,203,255,0.1);">{tag}</span>
              {/each}
            </div>
            <h3 style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:700;color:#a3e0ff;margin-bottom:0.75rem;">{project.title}</h3>
            <p style="color:#5c7b99;font-size:0.9rem;line-height:1.7;margin-bottom:0.5rem;">{project.description}</p>
            <p style="color:rgba(107,107,128,0.6);font-size:0.85rem;line-height:1.6;margin-bottom:1.5rem;">{project.longDesc}</p>
            <div style="display:flex;gap:0.75rem;">
              <a href={project.link} class="btn-primary" style="text-decoration:none;font-size:0.8rem;padding:0.375rem 1rem;display:inline-flex;align-items:center;gap:0.4rem;">Live Demo</a>
              <a href={project.github} class="btn-outline" style="text-decoration:none;font-size:0.8rem;padding:0.375rem 1rem;">GitHub</a>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;" class="proj-sm-grid">
      {#each projects.filter(p => !p.featured) as project, i}
        <div use:scrollReveal={{ delay: i + 1 }} style="background:#16161f;border:1px solid rgba(255,255,255,0.06);border-radius:1rem;overflow:hidden;transition:all 0.3s;" class="proj-card-sm">
          <div style="position:relative;height:12rem;background:#111118;overflow:hidden;">
            {#if !imgErrors[project.id]}
              <img src={project.image} alt={project.title} style="width:100%;height:100%;object-fit:cover;" onerror={() => { imgErrors = {...imgErrors, [project.id]: true}; }} />
            {:else}
              <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#111118;">
                <div style="font-size:2.5rem;margin-bottom:0.4rem;">🖼️</div>
                <p style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#5c7b99;">project-{project.id}.jpg</p>
              </div>
            {/if}
          </div>
          <div style="padding:1.5rem;">
            <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
              {#each project.tags as tag}
                <span style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;padding:0.25rem 0.75rem;border-radius:9999px;border:1px solid rgba(110,203,255,0.3);color:#6ecbff;background:rgba(110,203,255,0.1);">{tag}</span>
              {/each}
            </div>
            <h3 style="font-family:'Syne',sans-serif;font-size:1.2rem;font-weight:700;color:#a3e0ff;margin-bottom:0.5rem;">{project.title}</h3>
            <p style="color:#5c7b99;font-size:0.85rem;line-height:1.7;margin-bottom:1rem;">{project.description}</p>
            <div style="display:flex;gap:0.75rem;">
              <a href={project.link} class="btn-primary" style="text-decoration:none;font-size:0.75rem;padding:0.3rem 0.875rem;">Demo</a>
              <a href={project.github} class="btn-outline" style="text-decoration:none;font-size:0.75rem;padding:0.3rem 0.875rem;">GitHub</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>