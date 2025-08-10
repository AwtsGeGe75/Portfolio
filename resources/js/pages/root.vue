<script setup>
import Home from './Home.vue'
import About from './About.vue'
import Profile from './Profile.vue'
import Projects from './Projects.vue'
import { Head } from '@inertiajs/vue3'
</script>
<template>
    <!-- <Head title =" | Home" /> -->

<main class="mt-0">
    <section id="Home" class="section"> <Home /> </section>
    <section id="About" class=" section"> <About /> </section>
    <section id="Profile" class="section"> <Profile /> </section>
    <section id="Projects" class="section"> <Projects /> </section>
</main>

</template>