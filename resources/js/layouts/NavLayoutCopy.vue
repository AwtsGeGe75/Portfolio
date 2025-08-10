<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Link } from '@inertiajs/vue3'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Close menu when clicking outside
const handleClickOutside = (event) => {
  if (isMenuOpen.value && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
    closeMenu()
  }
}

// Close menu on escape key
const handleEscapeKey = (event) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<template>
  <div>
    <!-- fixed bg image -->
    <div class="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style="background-image: url('/images/bg9.png'); background-attachment: fixed;"></div>
    
    <!-- Nav bar -->
    <div class="relative">
      <header class="m-4 md:m-8 mx-4 md:mx-50 fixed rounded-full left-0 right-0 bg-[#080c34]/10 backdrop-blur-md text-white text-xs p-2 max-w shadow-lg">
        <nav class="flex justify-between items-center px-4">
          <div class="logo">
            <img src="/images/logo.jpg" alt="Logo" class="h-10 w-10 rounded-full">
          </div>
          
          <!-- Desktop Navigation -->
          <aside class="hidden md:flex bg-[#253957] rounded-full text-lg font-bold space-x-8 px-8 py-1">
            <a href="#Home" class="hover:text-blue-300 transition-colors">Home</a>
            <a href="#About" class="hover:text-blue-300 transition-colors">About Me</a>
            <a href="#Profile" class="hover:text-blue-300 transition-colors">Profile</a>
          </aside>
          
          <!-- Mobile Hamburger Button -->
          <button 
            @click="toggleMenu"
            class="hamburger-button md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': isMenuOpen }"
            aria-label="Toggle menu"
            aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                class="block w-5 h-0.5 bg-white transition-all duration-300"
                :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"
              ></span>
              <span 
                class="block w-5 h-0.5 bg-white mt-1 transition-all duration-300"
                :class="{ 'opacity-0': isMenuOpen }"
              ></span>
              <span 
                class="block w-5 h-0.5 bg-white mt-1 transition-all duration-300"
                :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"
              ></span>
            </div>
          </button>
        </nav>
      </header>
      
      <!-- Mobile Menu Overlay -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="isMenuOpen"
          class="mobile-menu fixed inset-0 z-40 md:hidden"
          @click.self="closeMenu"
        >
          <div 
            class="fixed top-20 right-4 w-64 bg-[#253957]/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/10"
            role="dialog"
            aria-modal="true"
            id="mobile-menu"
          >
            <nav class="p-6 space-y-4">
              <a 
                href="#Home" 
                @click="closeMenu"
                class="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#About" 
                @click="closeMenu"
                class="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                About Me
              </a>
              <a 
                href="#Profile" 
                @click="closeMenu"
                class="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Profile
              </a>
            </nav>
          </div>
        </div>
      </transition>
      
      <main class="p-10">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Ensure smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Prevent body scroll when mobile menu is open */
body:has(.mobile-menu) {
  overflow: hidden;
}

/* Custom scrollbar for mobile menu */
.mobile-menu::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}
</style>
