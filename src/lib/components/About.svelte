<script>
  import { siteAssets } from '$lib/assets.js';
  import { scrollReveal } from '$lib/scrollReveal.js';

  let imgError = $state(false);

  const badges = [
    { icon: '💻', label: 'Web Developer' },
    { icon: '🐧', label: 'OS Enthusiast' },
    { icon: '📱', label: 'ROM Lover' },
  ];

  const techSkills = [
    { label: 'HTML',        icon: 'devicon-html5-plain colored'       },
    { label: 'CSS',         icon: 'devicon-css3-plain colored'        },
    { label: 'JavaScript',  icon: 'devicon-javascript-plain colored'  },
    { label: 'PHP',         icon: 'devicon-php-plain colored'         },
    { label: 'FlutterFlow', icon: 'devicon-flutter-plain colored'     },
    { label: 'MySQL',       icon: 'devicon-mysql-plain colored'       },
    { label: 'Firebase',    icon: 'devicon-firebase-plain colored'    },
    { label: 'Linux CLI',   icon: 'devicon-linux-plain colored'       },
    { label: 'PowerShell',  icon: 'devicon-powershell-plain colored'  },
    { label: 'Photoshop',   icon: 'devicon-photoshop-plain colored'   },
    { label: 'PowerBI',     icon: 'devicon-azuredevops-plain colored' },
    { label: 'ADB/Fastboot',icon: 'devicon-android-plain colored'     },
  ];

  const softSkills = ['🧩 Problem-solving', '🔧 Troubleshooting', '🤝 Team collaboration', '📚 Continuous learning'];

  const education = [
    { year: '2026',    school: 'Colegio de San Pascual Baylon',               course: 'BS Computer Science', level: 'Tertiary'        },
    { year: '2022',    school: 'Arellano University - EEC Malabon Campus',    course: 'ICT Strand',          level: 'Upper Secondary' },
    { year: '2020',    school: 'Polo National High School',                   course: '',                    level: 'Secondary'       },
  ];

  const experience = [
    { role: 'Intern – WCC ATC North Manila', period: '2025', desc: 'Hardware & Technical Support, and Systems Administration including equipment inventory and deployment.' },
    { role: 'SPES Student Worker – BPLO Office', period: '2023', desc: 'Managed licensing for public and private businesses and encoded franchises.' },
  ];
</script>

<style>
  /* Image glow animations */
  @keyframes gp1 {
    0%,100% { border-color: rgba(110,203,255,0.15); box-shadow: 0 0 6px rgba(110,203,255,0.08); }
    50%      { border-color: rgba(110,203,255,0.7); box-shadow: 0 0 16px rgba(110,203,255,0.4), 0 0 32px rgba(58,183,255,0.2); }
  }
  @keyframes gp2 {
    0%,100% { border-color: rgba(58,183,255,0.1); box-shadow: 0 0 4px rgba(58,183,255,0.06); }
    50%      { border-color: rgba(58,183,255,0.55); box-shadow: 0 0 18px rgba(58,183,255,0.35), 0 0 36px rgba(110,203,255,0.15); }
  }
  @keyframes gpm {
    0%,100% { box-shadow: none; }
    50%      { box-shadow: 0 0 18px rgba(110,203,255,0.3), 0 0 36px rgba(58,183,255,0.12); }
  }

  .img-wrapper { position: relative; width: 12rem; height: 12rem; }
  .border-line-1 {
    position: absolute; inset: 0; border-radius: 1rem; pointer-events: none; z-index: 0;
    border: 1px solid rgba(110,203,255,0.15);
    transform: rotate(3deg) scale(1.05);
    animation: gp1 3s ease-in-out infinite;
  }
  .border-line-2 {
    position: absolute; inset: 0; border-radius: 1rem; pointer-events: none; z-index: 0;
    border: 1px solid rgba(58,183,255,0.1);
    transform: rotate(-2deg) scale(1.1);
    animation: gp2 3s ease-in-out infinite 1.5s;
  }
  .img-inner {
    position: relative; width: 100%; height: 100%;
    border-radius: 1rem; overflow: hidden; z-index: 1;
    border: 1px solid rgba(110,203,255,0.2); background: #111118;
    animation: gpm 3s ease-in-out infinite;
  }

  /* Unified chip — works with or without icon */
  .chip {
    display: inline-flex; align-items: center; gap: 0.35rem;
    padding: 0.28rem 0.7rem; border-radius: 9999px;
    background: #111118; border: 1px solid rgba(255,255,255,0.06);
    font-size: 0.76rem; color: #a3e0ff;
    transition: border-color 0.2s, background 0.2s;
  }
  .chip:hover { border-color: rgba(110,203,255,0.3); background: rgba(110,203,255,0.05); }
  .chip i { font-size: 0.95rem; line-height: 1; }

  .slabel { font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #6ecbff; margin-bottom: 0.65rem; margin-top: 1.75rem; }
  .slabel:first-child { margin-top: 0; }

  /* Timeline */
  .tl-item  { display: flex; gap: 0.85rem; margin-bottom: 1rem; }
  .tl-year  { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: #6ecbff; min-width: 3.25rem; padding-top: 0.1rem; }
  .tl-name  { font-family: 'Syne', sans-serif; font-size: 0.83rem; font-weight: 700; color: #a3e0ff; }
  .tl-sub   { font-size: 0.72rem; color: #5c7b99; margin-top: 0.08rem; }

  /* Experience */
  .ex-role   { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.83rem; color: #a3e0ff; }
  .ex-period { font-family: 'JetBrains Mono', monospace; font-size: 0.62rem; color: #6ecbff; margin-bottom: 0.15rem; }
  .ex-desc   { font-size: 0.76rem; color: #5c7b99; line-height: 1.55; }

  /* Contact */
  .crow      { display: flex; align-items: center; gap: 0.45rem; font-size: 0.78rem; color: #5c7b99; margin-bottom: 0.35rem; }
  .crow span { color: #6ecbff; font-size: 0.82rem; }
</style>

<section id="about" style="padding:7rem 1.5rem;position:relative;">
  <div class="section-line"></div>

  <div style="max-width:1100px;margin:0 auto;">

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3.5rem;align-items:start;margin-bottom:3.5rem;" class="about-grid" use:scrollReveal>

      <div style="display:flex;justify-content:center;">
        <div style="position:relative;display:inline-block;">
          <div class="img-wrapper">
            <div class="border-line-1"></div>
            <div class="border-line-2"></div>
            <div class="img-inner">
              {#if !imgError}
                <img src={siteAssets.avatar} alt="m4yku" style="width:100%;height:100%;object-fit:cover;" onerror={() => imgError = true} />
              {:else}
                <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#111118;">
                  <span style="font-size:3.5rem;">👤</span>
                  <p style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:#5c7b99;margin-top:0.4rem;">Add avatar to /static/</p>
                </div>
              {/if}
              <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,10,15,0.55),transparent);"></div>
            </div>
          </div>
          <div style="position:absolute;bottom:-0.85rem;right:-0.85rem;z-index:10;background:#16161f;border:1px solid rgba(255,255,255,0.06);border-radius:0.65rem;padding:0.5rem 0.9rem;">
            <span style="font-family:'Syne',sans-serif;font-weight:700;color:#a3e0ff;display:block;font-size:0.9rem;">m4yku</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:#6ecbff;">@dev</span>
          </div>
        </div>
      </div>

      <div>
        <p class="slabel" style="margin-top:0;">// about me</p>
        <h2 style="font-family:'Syne',sans-serif;font-size:clamp(1.75rem,4.5vw,2.75rem);font-weight:700;color:#a3e0ff;margin-bottom:0.4rem;line-height:1.1;">
          Hi, I'm <span style="color:#6ecbff">Mike</span>
        </h2>
        <p style="font-family:'Syne',sans-serif;font-size:0.95rem;color:#5c7b99;margin-bottom:1.1rem;">Computer Science Graduate</p>
        <p style="color:#5c7b99;line-height:1.75;font-size:0.9rem;margin-bottom:1.35rem;">
          A Computer Science graduate with a strong interest in tech troubleshooting and system optimization. I have a solid background in IT office support and government operations. I am a determined and fast learner, currently expanding my expertise in modern web technologies and technical support.
        </p>

        <p class="slabel" style="margin-top:0;">// contact</p>
        <div class="crow"><span>📞</span> 0992-054-5009</div>
        <div class="crow"><span>✉️</span> hbdmike23@gmail.com</div>
        <div class="crow"><span>📍</span> 128 D Lawa Obando Bulacan</div>
        <div class="crow" style="margin-bottom:1.25rem;"><span>🔗</span> m4yku.github.io/m4yku-pf/</div>

        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          {#each badges as b}
            <span class="chip">{b.icon} {b.label}</span>
          {/each}
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;" class="about-grid" use:scrollReveal={{ delay: 2 }}>

      <div>
        <p class="slabel" style="margin-top:0;">// technical skills</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-bottom:1.75rem;">
          {#each techSkills as s}
            <span class="chip"><i class={s.icon}></i>{s.label}</span>
          {/each}
        </div>

        <p class="slabel">// soft skills</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
          {#each softSkills as s}
            <span class="chip">{s}</span>
          {/each}
        </div>
      </div>

      <div>
        <p class="slabel" style="margin-top:0;">// education</p>
        {#each education as e}
          <div class="tl-item">
            <span class="tl-year">{e.year}</span>
            <div>
              <div class="tl-name">{e.school}</div>
              <div class="tl-sub">{e.course ? e.course + ' · ' : ''}{e.level}</div>
            </div>
          </div>
        {/each}

        <p class="slabel">// experience</p>
        {#each experience as e}
          <div style="margin-bottom:1rem;">
            <div class="ex-role">{e.role}</div>
            <div class="ex-period">{e.period}</div>
            <div class="ex-desc">{e.desc}</div>
          </div>
        {/each}
      </div>

    </div>
  </div>
</section>