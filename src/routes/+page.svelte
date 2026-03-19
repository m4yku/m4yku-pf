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

  <ActiveLoad defaultHeight="600px">
    <About />
  </ActiveLoad>

  <ActiveLoad defaultHeight="800px">
    <Expertise />
  </ActiveLoad>

  <ActiveLoad defaultHeight="1200px">
    <Projects />
  </ActiveLoad>

  <ActiveLoad defaultHeight="400px">
    <Contact />
  </ActiveLoad>
</main>