<template>
  <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
    <!-- LEFT: Contact card -->
    <div
      class="md:col-span-1 rounded-2xl p-8 text-white shadow-md ring-1 ring-emerald-200/40 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400"
    >
      <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
        Get in touch
      </h2>
      <p class="text-emerald-100/90 leading-relaxed mb-8">
        Whether you need dependable IT support or backend development, I’d love
        to connect.
      </p>

      <div class="space-y-6">
        <!-- Phone -->
        <a href="tel:+639499866198" class="group flex items-start gap-4">
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20"
          >
            <!-- phone icon -->
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.77 19.77 0 01-8.63-3.07 19.52 19.52 0 01-6-6 19.77 19.77 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.29 12.29 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.29 12.29 0 002.81.7A2 2 0 0122 16.92z"
              />
            </svg>
          </span>
          <span>
            <span
              class="block text-xs uppercase tracking-wider text-emerald-100/80"
              >Phone</span
            >
            <span class="block text-lg font-semibold group-hover:underline">
              0949 986 6198
            </span>
          </span>
        </a>

        <!-- Email -->
        <a
          href="mailto:rafaelealpes3@gmail.com"
          class="group flex items-start gap-4"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20"
          >
            <!-- mail icon -->
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <span>
            <span
              class="block text-xs uppercase tracking-wider text-emerald-100/80"
              >Email</span
            >
            <span class="block font-semibold text-lg group-hover:underline">
              rafaelealpes3@gmail.com
            </span>
          </span>
        </a>

        <!-- Location -->
        <div class="flex items-start gap-4">
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20"
          >
            <!-- pin icon -->
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span>
            <span
              class="block text-xs uppercase tracking-wider text-emerald-100/80"
              >Location</span
            >
            <span class="block text-lg font-semibold"> Tondo, Manila </span>
          </span>
        </div>

        <!-- GitHub -->
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="group flex items-start gap-4"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20"
          >
            <!-- github icon -->
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.12c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.48v-1.69c-2.78.62-3.37-1.34-3.37-1.34-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0112 6.85c.85.004 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.45.11 2.71.64.71 1.03 1.61 1.03 2.72 0 3.9-2.34 4.75-4.57 5 .36.31.68.93.68 1.87v2.78c0 .27.18.58.69.48A10.14 10.14 0 0022 12.12C22 6.58 17.52 2 12 2z"
              />
            </svg>
          </span>
          <span>
            <span
              class="block text-xs uppercase tracking-wider text-emerald-100/80"
              >GitHub</span
            >
            <span class="block text-lg font-semibold group-hover:underline">
              github.com/yourusername
            </span>
          </span>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          class="group flex items-start gap-4"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20"
          >
            <!-- linkedin icon -->
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.63 1.32 2.98 2.98 2.98 1.67 0 3-1.35 3-2.98 0-1.64-1.33-2.98-3-2.98zM2.43 8.98H7.5v13H2.43v-13zM9.5 8.98h4.83v1.82h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.67v8.1h-5v-7.17c0-1.71-.03-3.92-2.4-3.92-2.4 0-2.77 1.88-2.77 3.81v7.28h-5v-13z"
              />
            </svg>
          </span>
          <span>
            <span
              class="block text-xs uppercase tracking-wider text-emerald-100/80"
              >LinkedIn</span
            >
            <span class="block text-lg font-semibold group-hover:underline">
              linkedin.com/in/yourusername
            </span>
          </span>
        </a>
      </div>

      <!-- CTA Buttons -->
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:rafaelealpes3@gmail.com"
          class="inline-flex items-center justify-center rounded-xl bg-white text-emerald-700 font-semibold px-4 py-2 shadow-sm hover:shadow transition"
        >
          Email me
        </a>
        <a
          href="tel:+639499866198"
          class="inline-flex items-center justify-center rounded-xl bg-emerald-900/20 text-white font-semibold px-4 py-2 ring-1 ring-white/20 hover:bg-emerald-900/30 transition"
        >
          Call now
        </a>
      </div>
    </div>

    <!-- RIGHT: Intro + image -->
    <div
      class="md:col-span-2 rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200"
    >
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <img
          src="/Profile.jpg"
          alt="Rafael Alpes"
          class="h-40 w-40 rounded-2xl object-cover ring-1 ring-slate-200 shadow-sm"
        />
        <div class="flex-1">
          <h3 class="text-2xl font-bold text-slate-900 mb-2">
            Let’s build something amazing together.
          </h3>
          <p class="text-slate-600 leading-relaxed">
            I’m Rafael Alpes—IT staff and backend developer focused on Laravel,
            Vue/Nuxt, automation, and cloud services. I love turning complex
            requirements into clean, scalable solutions.
          </p>

          <!-- Badges -->
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
              >Laravel</span
            >
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
              >Nuxt 3</span
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

          <!-- Primary CTAs -->
          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:rafaelealpes3@gmail.com?subject=Project%20Inquiry"
              class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-700 transition"
            >
              <!-- paper plane -->
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Start a project
            </a>

            <a
              href="/Rafael-Alpes-CV.pdf"
              download
              class="inline-flex items-center gap-2 rounded-xl bg-white text-slate-800 px-5 py-3 font-semibold ring-1 ring-slate-200 shadow-sm hover:shadow transition"
            >
              <!-- download -->
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- /RIGHT -->
  </div>
</template>
