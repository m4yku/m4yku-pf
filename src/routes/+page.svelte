<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
  <title>m4yku · Portfolio</title>
</svelte:head>

<Navbar />
<main>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
</main>