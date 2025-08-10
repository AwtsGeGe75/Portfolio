<template>
    <div class="sections">
        <h1 class="py-10 text-5xl font-bold text-center">Projects</h1>
        
        <!-- Carousel Container -->
        <div class="relative max-w-4xl px-4 mx-auto">
            <!-- Image Display -->
            <div class="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                    :src="currentImage" 
                    :alt="currentAlt"
                    class="object-cover w-full h-96"
                >
                
                <!-- Navigation Buttons -->
                <button 
                    @click="previousImage"
                    class="absolute p-2 text-white transition -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/75"
                >
                    ←
                </button>
                
                <button 
                    @click="nextImage"
                    class="absolute p-2 text-white transition -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/75"
                >
                    →
                </button>
                
                <!-- Image Indicators -->
                <div class="absolute flex space-x-2 -translate-x-1/2 bottom-4 left-1/2">
                    <button
                        v-for="(image, index) in images"
                        :key="index"
                        @click="currentIndex = index"
                        :class="[
                            'w-3 h-3 rounded-full transition',
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        ]"
                    />
                </div>
            </div>
            
            <!-- Description Section -->
            <div class="mt-8 text-center">
                <h2 class="mb-4 text-3xl font-bold">{{ currentTitle }}</h2>
                <p class="text-lg leading-relaxed text-gray-700">
                    {{ currentDescription }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const images = ref([
    {
        src: '/images/gamehaven1.png',
        alt: 'Game Haven Screenshot 1',
        title: 'Game Haven - Main Dashboard',
        description: 'The main dashboard showing featured games and user statistics.'
    },
    {
        src: '/images/gamehaven2.png',
        alt: 'Game Haven Screenshot 2',
        title: 'Game Haven - Game Details',
        description: 'Detailed game view with reviews, ratings, and community discussions.'
    },
    {
        src: '/images/gamehaven3.png',
        alt: 'Game Haven Screenshot 3',
        title: 'Game Haven - User Profile',
        description: 'User profile page showcasing gaming history and achievements.'
    }
])

const currentIndex = ref(0)

const currentImage = computed(() => images.value[currentIndex.value].src)
const currentAlt = computed(() => images.value[currentIndex.value].alt)
const currentTitle = computed(() => images.value[currentIndex.value].title)
const currentDescription = computed(() => images.value[currentIndex.value].description)

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const previousImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
</script>
