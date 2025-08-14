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
    <!-- <div class="my-8 h-0.5 w-50 mx-auto bg-gradient-to-r from-gray-400 to-gray-500"></div> -->
    <section id="About" class=" section"> <About /> </section>
    <section id="Profile" class="section"> <Profile /> </section>
    <section id="Projects" class="section"> <Projects /> </section>
</main>

</template>