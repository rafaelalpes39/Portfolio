<template>
  <div>
   <nav class="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold text-gray-800">MyPortfolio</div>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            class="text-gray-700 hover:text-blue-600 font-medium transition"
            >Home</a
          >
          <a
            href="#about"
            class="text-gray-700 hover:text-blue-600 font-medium transition"
            >About</a
          >
          <a
            href="#skills"
            class="text-gray-700 hover:text-blue-600 font-medium transition"
            >Skills</a
          >
          <a
            href="#expi-Stacks"
            class="text-gray-700 hover:text-blue-600 font-medium transition"
            >Experience & Stacks</a
          >
          <a
            href="#contact"
            class="text-gray-700 hover:text-blue-600 font-medium transition"
            >Contact</a
          >
        </div>

        <!-- Social Buttons (hidden on small screens) -->
        <div class="hidden md:flex space-x-3 items-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            class="inline-flex items-center px-3 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition"
          >
            LinkedIn
          </a>
        </div>

        <!-- Hamburger Menu Button (visible on small screens) -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            v-if="!isOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="isOpen" class="md:hidden mt-4 space-y-4">
        <!-- <NuxtLink
          @click="isOpen = false"
          to="/"
          class="block text-gray-700 hover:text-blue-600 font-medium transition"
          >Home</NuxtLink
        > -->
        <!-- <NuxtLink
          @click="isOpen = false"
          to="/about"
          class="block text-gray-700 hover:text-blue-600 font-medium transition"
          >About</NuxtLink
        >
        <NuxtLink
          @click="isOpen = false"
          to="/projects"
          class="block text-gray-700 hover:text-blue-600 font-medium transition"
          >Projects</NuxtLink
        >
        <NuxtLink
          @click="isOpen = false"
          to="/contact"
          class="block text-gray-700 hover:text-blue-600 font-medium transition"
          >Contact</NuxtLink
        > -->

         <a
            href="#home"
            class="block text-gray-700 hover:text-blue-600 font-medium transition"
            >Home</a
          >
          <a
            href="#about"
            class="block text-gray-700 hover:text-blue-600 font-medium transition"
            >About</a
          >
          <a
            href="#expi-Stacks"
            class="block text-gray-700 hover:text-blue-600 font-medium transition"
            >Experience & Stacks</a
          >
          <a
            href="#projects"
            class="block text-gray-700 hover:text-blue-600 font-medium transition"
            >Projects</a
          >
          <a
            href="#contact"
           class="block text-gray-700 hover:text-blue-600 font-medium transition"
            >Contact</a
          >
        <div class="flex space-x-2 pt-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="flex-1 text-center inline-block px-3 py-2 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            class="flex-1 text-center inline-block px-3 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>
