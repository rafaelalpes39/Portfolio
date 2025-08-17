<template>
  <div class="max-w-6xl mx-auto px-6 w-full">
    <h2
      class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-center"
    >
      Skills & Expertise
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Linux Administration -->
      <div
        class="group bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-md transition"
      >
        <div class="flex items-center gap-3 mb-3">
          <svg
            class="h-6 w-6 text-emerald-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16v16H4z" />
          </svg>
          <h3 class="text-lg font-semibold text-slate-900">
            Linux Administration
          </h3>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          Skilled in managing Linux servers (CentOS, Ubuntu), troubleshooting,
          and system optimization.
        </p>
      </div>

      <!-- Cloud Computing -->
      <div
        class="group bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-md transition"
      >
        <div class="flex items-center gap-3 mb-3">
          <svg
            class="h-6 w-6 text-sky-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M3 15a4 4 0 0 1 4-4h1l1-2a4 4 0 0 1 6 0l1 2h1a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4z"
            />
          </svg>
          <h3 class="text-lg font-semibold text-slate-900">Cloud Computing</h3>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          Hands-on with AWS, Azure, and GCP for deployment, scaling, and
          resource management.
        </p>
      </div>

      <!-- Web Development -->
      <div
        class="group bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-md transition"
      >
        <div class="flex items-center gap-3 mb-3">
          <svg
            class="h-6 w-6 text-indigo-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
            <path d="M3 10h18" />
          </svg>
          <h3 class="text-lg font-semibold text-slate-900">Web Development</h3>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          Proficient in Vue.js, Nuxt.js, Laravel, and modern frontend/backend
          development workflows.
        </p>
      </div>

      <!-- Automation -->
      <div
        class="group bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-md transition"
      >
        <div class="flex items-center gap-3 mb-3">
          <svg
            class="h-6 w-6 text-amber-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <h3 class="text-lg font-semibold text-slate-900">Automation</h3>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          Experienced in Node.js scripting, Telegram bot automation, and CI/CD
          pipelines for workflow efficiency.
        </p>
      </div>

      <!-- Networking & Security -->
      <div
        class="group bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-md transition"
      >
        <div class="flex items-center gap-3 mb-3">
          <svg
            class="h-6 w-6 text-rose-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 22c4.97 0 9-8 9-12a9 9 0 0 0-18 0c0 4 4.03 12 9 12z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <h3 class="text-lg font-semibold text-slate-900">
            Networking & Security
          </h3>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          Strong background in VPN and network configuration, SSL management,
          and secure communication protocols.
        </p>
      </div>

      <!-- Tools & Collaboration -->
      <div
        class="group bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6 hover:shadow-md transition"
      >
        <div class="flex items-center gap-3 mb-3">
          <svg
            class="h-6 w-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 18a4 4 0 1 0-8 0" />
            <circle cx="12" cy="11" r="3" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <h3 class="text-lg font-semibold text-slate-900">
            Tools & Collaboration
          </h3>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed">
          Proficient in Git, Docker, PowerShell scripting, and team
          collaboration using agile practices.
        </p>
      </div>
    </div>
  </div>
</template>
