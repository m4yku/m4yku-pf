<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
</svelte:head>

<script>
  import { scrollReveal } from '$lib/scrollReveal.js';
  import { onMount } from 'svelte';

  const categories = [
    {
      label: 'Frontend',
      items: [
        { name: 'HTML5',      icon: 'devicon-html5-plain colored',      level: 90 },
        { name: 'CSS3',       icon: 'devicon-css3-plain colored',       level: 70 },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 70 },
      ],
    },
    {
      label: 'Backend',
      items: [
        { name: 'PHP',     icon: 'devicon-php-plain colored',     level: 90 },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored',  level: 70 },
      ],
    },
    {
      label: 'Mobile',
      items: [
        { name: 'FlutterFlow', icon: 'devicon-flutter-plain colored',  level: 80 },
        { name: 'Firebase',    icon: 'devicon-firebase-plain colored', level: 80 },
        { name: 'Android/ADB', icon: 'devicon-android-plain colored',  level: 90 },
      ],
    },
    {
      label: 'Database & Tools',
      items: [
        { name: 'MySQL',      icon: 'devicon-mysql-plain colored',       level: 85 },
        { name: 'Linux CLI',  icon: 'devicon-linux-plain colored',       level: 80 },
        { name: 'PowerShell', icon: 'devicon-powershell-plain colored',  level: 80 },
        { name: 'Photoshop',  icon: 'devicon-photoshop-plain colored',   level: 70 },
        { name: 'PowerBI',    icon: 'devicon-azuredevops-plain colored', level: 40 },
      ],
    },
  ];

  const levelLabel = n => n >= 85 ? 'Advanced' : n >= 70 ? 'Proficient' : n >= 55 ? 'Intermediate' : 'Beginner';
  const levelColor = n => n >= 85 ? '#6ecbff' : n >= 70 ? '#3ab7ff' : n >= 55 ? '#5c9bbf' : '#3d6478';

  let sectionEl;
  let barsVisible = $state(false);

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { barsVisible = true; observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionEl) observer.observe(sectionEl);
    return () => observer.disconnect();
  });
</script>

<style>
  .stack-card {
    background: #0d1117; border: 1px solid rgba(255,255,255,0.06);
    border-radius: 0.875rem; padding: 0.9rem 1.1rem;
    display: flex; align-items: center; gap: 0.875rem;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  }
  .stack-card:hover { border-color: rgba(110,203,255,0.28); box-shadow: 0 6px 24px rgba(0,0,0,0.25); transform: translateY(-2px); }

  .stack-icon {
    width: 2.5rem; height: 2.5rem; border-radius: 0.5rem; flex-shrink: 0;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: center;
  }
  .stack-icon i { font-size: 1.35rem; line-height: 1; }

  .stack-info { flex: 1; min-width: 0; }
  .stack-name {
    font-family: 'Syne', sans-serif; font-size: 0.84rem; font-weight: 700;
    color: #a3e0ff; margin-bottom: 0.35rem;
    display: flex; align-items: center; justify-content: space-between;
  }
  .stack-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; color: #5c7b99; }

  .bar-track { width: 100%; height: 3px; background: rgba(255,255,255,0.05); border-radius: 9999px; overflow: hidden; }
  .bar-fill  { height: 100%; border-radius: 9999px; width: 0%; transition: width 1s cubic-bezier(0.16,1,0.3,1); }

  .cat-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #6ecbff; margin-bottom: 0.75rem; }
</style>

<section id="expertise" style="padding:7rem 1.5rem;position:relative;" bind:this={sectionEl}>
  <div class="section-line"></div>

  <div style="max-width:1100px;margin:0 auto;">

    <div style="text-align:center;margin-bottom:3rem;" use:scrollReveal>
      <p class="sec-tag">// tech stack</p>
      <h2 class="sec-title">Tools I'm Familiar With</h2>
      <p style="color:#5c7b99;margin-top:0.6rem;font-size:0.9rem;max-width:440px;margin-inline:auto;">
        Technologies I've built with — from web to mobile to system-level work.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;" class="about-grid">
      {#each categories as cat}
        <div use:scrollReveal>
          <p class="cat-label">// {cat.label.toLowerCase()}</p>
          <div style="display:flex;flex-direction:column;gap:0.6rem;">
            {#each cat.items as item}
              <div class="stack-card" use:scrollReveal>
                <div class="stack-icon"><i class={item.icon}></i></div>
                <div class="stack-info">
                  <div class="stack-name">
                    <span>{item.name}</span>
                    <span class="stack-lbl">{levelLabel(item.level)}</span>
                  </div>
                  <div class="bar-track">
                    <div
                      class="bar-fill"
                      style="width:{barsVisible ? item.level + '%' : '0%'};background:linear-gradient(90deg,{levelColor(item.level)},{levelColor(item.level)}99);"
                    ></div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>