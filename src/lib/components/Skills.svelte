<script>
  import { scrollReveal } from '$lib/scrollReveal.js';

  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34f26', level: 90 },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777bb4', level: 75 },
    { name: 'FlutterFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#54c5f8', level: 70 },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#ffca28', level: 72 },
  ];

  const tools = ['🐧 Linux', '📱 Android', '🔧 TWRP', '🌐 XAMPP', '🔥 Firebase', '🎨 Figma', '🖥️ VS Code', '🐙 GitHub'];
</script>

<section id="skills" style="padding:8rem 1.5rem;background:rgba(17,17,24,0.5);position:relative;overflow:hidden;">
  <div style="position:absolute;width:24rem;height:24rem;background:rgba(110,203,255,0.08);border-radius:50%;filter:blur(80px);bottom:-12rem;right:0;pointer-events:none;"></div>

  <div style="max-width:1152px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:4rem;" use:scrollReveal>
      <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#6ecbff;margin-bottom:0.75rem;">// tech stack</p>
      <h2 style="font-family:'Syne',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:700;color:#a3e0ff;">Languages & <span style="color:#6ecbff">Tools</span></h2>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-bottom:1.5rem;" class="skills-grid">
      {#each skills as skill, i}
        <div use:scrollReveal={{ delay: i + 1 }}
          style="background:#16161f;border:1px solid rgba(255,255,255,0.06);border-radius:1rem;padding:1.5rem;text-align:center;transition:all 0.3s;cursor:default;position:relative;overflow:hidden;"
          class="skill-card"
        >
          <img src={skill.icon} alt={skill.name} style="width:3.5rem;height:3.5rem;object-fit:contain;margin:0 auto 0.75rem;display:block;" />
          <div style="font-family:'Syne',sans-serif;font-weight:600;color:#a3e0ff;margin-bottom:0.75rem;">{skill.name}</div>
          <div style="background:#0a0a0f;border-radius:9999px;height:0.35rem;overflow:hidden;margin-bottom:0.4rem;">
            <div style="height:100%;border-radius:9999px;background:linear-gradient(90deg, {skill.color}80, {skill.color});width:{skill.level}%;"></div>
          </div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:#5c7b99;">{skill.level}%</div>
        </div>
      {/each}
    </div>

    <div style="background:#16161f;border:1px solid rgba(255,255,255,0.06);border-radius:1rem;padding:2rem;" use:scrollReveal>
      <p style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:#5c7b99;margin-bottom:1rem;">// other tools & interests</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
        {#each tools as tool}
          <span style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;padding:0.25rem 0.75rem;border-radius:9999px;border:1px solid rgba(110,203,255,0.3);color:#6ecbff;background:rgba(110,203,255,0.1);">{tool}</span>
        {/each}
      </div>
    </div>
  </div>
</section>