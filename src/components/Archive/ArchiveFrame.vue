<template>
  <div class="archive-shell">
    <a class="archive-skip" href="#archive-content">Skip to content</a>
    <header class="archive-site-nav">
      <router-link class="archive-home" to="/" aria-label="Namanyay Goel home"><Logo stroke="#28251f"/><span>Namanyay Goel</span></router-link>
      <nav aria-label="Main navigation"><router-link to="/lab/">Lab</router-link><a href="https://nmn.gl/blog">Blog</a><router-link to="/press">Press</router-link><router-link to="/#contact">Contact</router-link></nav>
    </header>
    <slot/>
    <footer class="archive-footer"><router-link to="/lab/">The Lab</router-link><span>My projects, since 2012.</span><router-link to="/">Back to the main site</router-link></footer>
  </div>
</template>
<script>
import Logo from '../Logo'
import './archive.css'
export default { name: 'ArchiveFrame', components: { Logo } }
</script>
