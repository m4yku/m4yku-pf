<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Expertise from '$lib/components/Expertise.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import ActiveLoad from '$lib/components/ActiveLoad.svelte';
</script>

<Navbar />
<main>
  <Hero />

  <ActiveLoad id="about" defaultHeight="600px">
    <About />
  </ActiveLoad>

  <ActiveLoad id="expertise" defaultHeight="800px">
    <Expertise />
  </ActiveLoad>

  <ActiveLoad id="projects" defaultHeight="1200px">
    <Projects />
  </ActiveLoad>

  <ActiveLoad id="contact" defaultHeight="400px">
    <Contact />
  </ActiveLoad>
</main>