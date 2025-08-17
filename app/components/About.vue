<template>
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-5 gap-10 items-center">
      <!-- Left: portrait + quick facts -->
      <aside class="lg:col-span-2">
        <div
          class="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-6 shadow-sm"
        >
          <img
            src="/Profile.jpg"
            alt="Rafael Alpes"
            class="w-full aspect-square object-cover rounded-xl ring-1 ring-slate-200"
          />
          <div class="mt-5 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-slate-500 text-sm">Role</span>
              <span class="font-semibold text-slate-900"
                >IT Staff • Backend Dev</span
              >
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500 text-sm">Base</span>
              <span class="font-semibold text-slate-900">Tondo, Manila</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-slate-500 text-sm">Focus</span>
              <span class="font-semibold text-slate-900"
                >Laravel • Nuxt • Linux • Cloud</span
              >
            </div>

            <!-- mini badges -->
            <div class="pt-2 flex flex-wrap gap-2">
              <span
                class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                >Scalable APIs</span
              >
              <span
                class="px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 ring-1 ring-sky-200"
                >Cloud (AWS/Azure/GCP)</span
              >
              <span
                class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                >Automation</span
              >
              <span
                class="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
                >DevOps</span
              >
            </div>

            <!-- contact shortcuts -->
            <div class="pt-4 flex flex-wrap gap-3">
              <a
                href="mailto:rafaelealpes3@gmail.com"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white ring-1 ring-slate-200 text-slate-800 font-medium shadow-sm hover:shadow transition"
              >
                <!-- mail -->
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3,7 12,13 21,7" />
                </svg>
                Email
              </a>
              <a
                href="tel:+639499866198"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition"
              >
                <!-- phone -->
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2A19.77 19.77 0 0 1 1.99 9.19 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.08.96.31 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.39 1.85.62 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </svg>
                Call
              </a>
            </div>
          </div>
        </div>
      </aside>

      <!-- Right: about narrative -->
      <div class="lg:col-span-3">
        <h2 class="text-4xl font-extrabold text-slate-900 tracking-tight">
          About Me
        </h2>
        <p class="mt-4 text-lg text-slate-700 leading-relaxed">
          I’m a multi-skilled IT professional with a strong foundation in
          <span class="font-semibold"
            >system administration, backend development, and DevOps</span
          >. I help teams streamline operations, secure infrastructure, and ship
          scalable applications using
          <span class="font-semibold">Laravel, Nuxt, Node.js</span>, and major
          cloud providers.
        </p>
        <p class="mt-4 text-slate-700 leading-relaxed">
          I enjoy turning complex requirements into backend systems that
          <span class="font-semibold">just work</span>— clean, secure, and
          scalable—while collaborating closely with frontend and QA to deliver
          reliable releases.
        </p>

        <!-- Highlights -->
        <div class="mt-6 grid sm:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
              >✓</span
            >
            <div>
              <p class="font-semibold text-slate-900">Linux & Networking</p>
              <p class="text-sm text-slate-600">
                Server management, VPN, Nginx/OpenResty, SSL/TLS.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
              >✓</span
            >
            <div>
              <p class="font-semibold text-slate-900">Cloud & Automation</p>
              <p class="text-sm text-slate-600">
                AWS, Azure, GCP, CI/CD, Telegram/Node.js bots.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
              >✓</span
            >
            <div>
              <p class="font-semibold text-slate-900">Backend Engineering</p>
              <p class="text-sm text-slate-600">
                Laravel/NestJS APIs, PostgreSQL/MySQL, Redis/RabbitMQ.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span
              class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
              >✓</span
            >
            <div>
              <p class="font-semibold text-slate-900">
                Quality & Collaboration
              </p>
              <p class="text-sm text-slate-600">
                Cross-functional delivery with QA, design, and ops.
              </p>
            </div>
          </div>
        </div>

        <!-- CTA row -->
        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 font-semibold shadow hover:bg-emerald-700 transition"
          >
            Work with me
          </a>
          <a
            href="/Rafael-Alpes-CV.pdf"
            download
            class="inline-flex items-center gap-2 rounded-xl bg-white text-slate-800 px-5 py-3 font-semibold ring-1 ring-slate-200 shadow-sm hover:shadow transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
