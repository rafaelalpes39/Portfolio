<script setup lang="ts">
import { ref, onMounted } from "vue";
const full =
  "Bridging systems and software — I help businesses run smarter with backend automation and reliable infrastructure.";
const typed = ref("");
const speed = 24;
onMounted(() => {
  let i = 0;
  const tick = () => {
    if (i <= full.length) {
      typed.value = full.slice(0, i++);
      setTimeout(tick, speed);
    }
  };
  setTimeout(tick, 300);
});
</script>

<template>
  <section
    class="relative min-h-[100svh] md:min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white flex items-center"
  >
    <!-- soft grid + blobs -->
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 opacity-[0.3]"
        style="
          background-image: radial-gradient(#e8eef9 1px, transparent 1px);
          background-size: 22px 22px;
        "
      ></div>
      <div
        class="absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-blue-200/60 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-40 -right-40 h-[26rem] w-[26rem] rounded-full bg-emerald-200/60 blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- LEFT: bigger profile glass card -->
        <aside class="lg:col-span-6">
          <div
            class="rounded-2xl bg-white/70 backdrop-blur-xl ring-1 ring-slate-200 shadow-lg p-8"
          >
            <!-- GIANT avatar with gradient frame -->
            <div
              class="mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
            >
              <div
                class="rounded-3xl p-[4px] bg-gradient-to-br from-blue-500 to-emerald-500"
              >
                <img
                  src="/Profile.jpg"
                  alt="Rafael Alpes"
                  class="w-full h-full object-cover rounded-2xl ring-4 ring-white shadow-xl"
                  loading="eager"
                />
              </div>
            </div>

            <!-- floating chips -->
            <div class="relative">
              <span
                class="hidden sm:inline-block absolute -top-4 right-6 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 animate-bounce"
                style="animation-delay: 0.2s"
                >NextJS</span
              >

              <span
                class="hidden sm:inline-block absolute top-4 -right-3 px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200 animate-bounce"
                style="animation-delay: 0.55s"
                >Laravel</span
              >

              <span
                class="hidden sm:inline-block absolute -bottom-4 left-6 px-3 py-1 text-xs font-semibold rounded-full bg-yellow-50 text-yellow-700 ring-1 ring-sky-200 animate-bounce"
                style="animation-delay: 0.9s"
                >Cloud</span
              >

              <!-- NEW: NestJS chip -->
              <span
                class="hidden sm:inline-block absolute top-12 -left-3 px-3 py-1 text-xs font-semibold rounded-full bg-rose-50 text-rose-700 ring-1 ring-rose-200 animate-bounce"
                style="animation-delay: 1.2s"
                >NuxtJS</span
              >
            </div>

            <!-- quick stats (larger) -->
            <div class="mt-8 grid grid-cols-3 gap-4 text-center">
              <div
                class="rounded-xl bg-slate-100 text-slate-800 py-4 ring-1 ring-slate-200"
              >
                <p class="text-2xl font-bold">2+</p>
                <p class="text-xs">Years</p>
              </div>
              <div
                class="rounded-xl bg-slate-100 text-slate-800 py-4 ring-1 ring-slate-200"
              >
                <p class="text-2xl font-bold">Linux</p>
                <p class="text-xs">Admin</p>
              </div>
              <div
                class="rounded-xl bg-slate-100 text-slate-800 py-4 ring-1 ring-slate-200"
              >
                <p class="text-2xl font-bold">Cloud</p>
                <p class="text-xs">Ready</p>
              </div>
            </div>

            <!-- socials -->
            <div class="mt-6 flex justify-center gap-3">
              <a
                aria-label="Email"
                href="mailto:rafaelalpes39@gmail.com"
                class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 text-slate-600 hover:text-blue-600 hover:shadow transition"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
              </a>
              <a
                aria-label="Call"
                href="tel:+639499868198"
                class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 text-slate-600 hover:text-blue-600 hover:shadow transition"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2A19.77 19.77 0 013 6.11 2 2 0 015.11 4h3a2 2 0 012 1.72c.31 3.6-1.15 3.9-.75 5.84a16 16 0 006 6c1.94.4 2.24-1.06 5.84-.75z"
                  />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href="https://facebook.com/rafaelalpes"
                target="_blank"
                class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 text-slate-600 hover:text-blue-600 hover:shadow transition"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3v6.99A10 10 0 0022 12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </aside>

        <!-- RIGHT: headline + typing + CTAs -->
        <div class="lg:col-span-6">
          <div class="mb-4">
            <span
              class="rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold ring-1 ring-slate-200 text-slate-700"
            >
              Manila • Open to hybrid/remote
            </span>
          </div>

          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Rafael
            <span
              class="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
              >Alpes</span
            >
          </h1>
          <p class="mt-3 text-lg md:text-xl text-slate-600">
            IT Staff • Full Stack Developer • Systems Administrator
          </p>

          <!-- typing line -->
          <p
            class="mt-6 max-w-2xl text-slate-700 leading-relaxed text-lg md:text-xl font-medium"
          >
            <span>{{ typed }}</span>
            <span
              class="inline-block w-[2px] h-6 align-middle bg-slate-900/80 ml-0.5 animate-pulse"
            ></span>
          </p>

          <!-- badges -->
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-200"
              >Laravel</span
            >
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
              >Nuxt 3</span
            >
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 ring-1 ring-slate-200"
              >Linux</span
            >
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 ring-1 ring-amber-200"
              >Automation</span
            >
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 ring-1 ring-sky-200"
              >Cloud</span
            >
          </div>

          <!-- CTAs -->
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              class="px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
            <a
              href="/Rafael-Alpes-CV.pdf"
              download
              class="px-7 py-3.5 rounded-xl bg-white text-slate-800 font-semibold ring-1 ring-slate-200 shadow-sm hover:shadow transition"
            >
              Download CV
            </a>
          </div>

          <!-- scroll hint -->
          <div class="mt-12">
            <a
              href="#about"
              class="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition"
            >
              <span class="text-sm font-medium">Scroll to learn more</span>
              <svg
                class="w-4 h-4 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
