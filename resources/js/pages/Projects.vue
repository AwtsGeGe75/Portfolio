<script setup>
import { ref } from 'vue'

</script>
<template>
    <div class="sections">
        <h1 class="title py-10 text-5xl font-bold text-center">
            PROJECTS
        </h1>
        
        <!-- Flex container for image and description -->
        <div class="flex flex-col items-center gap-8 px-4 py-8 md:flex-row">
            <!-- Left side: Image -->
            <div class="w-full m-5 md:w-[70%]">
                <img 
                    src="/images/gamehaven1.png" 
                    alt="Game Haven Project" 
                    class="w-full h-auto rounded-lg shadow-lg" >
            </div>
            
            <!-- Right side: Description -->
            <div class="w-full m-10 md:w-1/2">
                <h2 class="mb-4 text-3xl font-bold">Game Haven</h2>
                <p class="text-lg leading-relaxed text-gray-700">
                    E-commerce platform designed for gamers, 
                    offering a wide range of  gaming consoles and other gaming accessories
                </p>
                <div class="mt-6 ">
                    <span class="inline-block px-4 py-1 m-3 mr-2 text-sm text-white bg-gray-800 rounded-2xl">Odoo Web Configurator</span>
                    <!-- <span class="inline-block px-4 py-1 m-3 mr-2 text-sm text-white bg-gray-800 rounded-2xl">Laravel</span>
                    <span class="inline-block px-4 py-1 m-3 text-sm text-white bg-gray-800 rounded-2xl">Tailwind CSS</span> -->
                </div>
            </div>
        </div>
    </div>
</template>




