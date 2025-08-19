<script setup lang="ts">
type StackItem = {
  name: string;
  icon: string;
  alt?: string;
  fallbackIcon?: string;
  rounded?: boolean;
};
type StackCategory = {
  title: string;
  items: StackItem[];
};

/** neutral fallback SVG (inline, no external request) */
const fallbackIcon =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
      <rect width="100%" height="100%" rx="8" fill="#E5E7EB"/>
      <path d="M15 24h18M15 18h18M15 30h12" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  );

/** your categories — edit here only */
const stackCategories: StackCategory[] = [
  {
    title: " Frameworks & UI Toolkit",
    items: [
       { name: "Laravel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLwCaJOflAPsOBczXZlGz6NFgFg4ihNU2Cg&s" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain.svg" },
      { name: "Nuxt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "NestJS", icon: "https://cdn.worldvectorlogo.com/logos/nestjs.svg" },
      { name: "Pinia", icon: "https://pinia.vuejs.org/logo.svg" },
      { name: "Vuetify", icon: "https://cdn.worldvectorlogo.com/logos/vuetify.svg" },
      { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=512&id=WoopfRcDj3RF&format=png" },
      { name: "Flowbite", icon: "https://flowbite.com/docs/images/logo.svg" },
    ],
  },
  
  {
    title: "AI & Programming Languages",
    items: [
      { name: "OpenAI / ChatGPT", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/openai.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Databases & Messaging",
    items: [
      { name: "MySQL", icon: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-21-1174941.png?f=webp" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
    ],
  },
  {
    title: "DevOps & Infra",
    items: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Jump Server", icon: "https://img.icons8.com/ios-filled/50/server.png" },
      { name: "PuTTY", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/PuTTY_Icon.svg" },
    ],
  },
  {
    title: "Cloud & Hosting",
    items: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/amazonaws.svg" },
      { name: "AWS EC2", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/amazonec2.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/microsoftazure.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/googlecloud.svg" },
      { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/cloudflare.svg" },
      { name: "Dynadot", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtQsiUP6MkfjYfwNQlib03WEnyFriEbPTbQ&s" },
      { name: "ZeroSSL", icon: "https://avatars.githubusercontent.com/u/27781978?v=4", rounded: true },
      { name: "CNZZ Analytics", icon: "https://img.icons8.com/color/48/000000/analytics.png" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    ],
  },
];


/** graceful icon fallback */
function onIconError(e: Event, item: StackItem) {
  const img = e.target as HTMLImageElement;
  img.onerror = null;
  img.src = item.fallbackIcon || fallbackIcon;
}
</script>

<template>
  <h2
    class="text-3xl font-extrabold text-slate-900 my-8 text-center tracking-wide"
  >
    Job Experiences
  </h2>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    <!-- Card -->
    <article
      class="rounded-2xl bg-white bg-gradient-to-b from-white to-emerald-50/30 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6"
    >
      <h3 class="text-lg font-extrabold text-slate-900 leading-snug">
        Seaversity —
        <span class="text-emerald-700">Junior Backend Developer</span>
      </h3>
      <p class="text-xs text-slate-500 mt-1 italic">Apr 2025 – Present</p>
      <ul class="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-800">
        <li class="flex gap-2">
          <span>✅</span
          ><span
            ><strong>Developed backend features</strong> using Laravel and Nuxt
            3</span
          >
        </li>
        <li class="flex gap-2">
          <span>✅</span
          ><span
            ><strong>Improved system reliability</strong> and enhanced QA
            collaboration</span
          >
        </li>
        <li class="flex gap-2">
          <span>✅</span
          ><span
            ><strong>Handled deployment & API integration</strong> and fixed
            critical bugs</span
          >
        </li>
      </ul>
    </article>

    <article
      class="rounded-2xl bg-white bg-gradient-to-b from-white to-emerald-50/30 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6"
    >
      <h3 class="text-lg font-extrabold text-slate-900 leading-snug">
        Solaire W Bridges Manpower —
        <span class="text-emerald-700">IT Staff</span>
      </h3>
      <p class="text-xs text-slate-500 mt-1 italic">Jan 2024 – Oct 2024</p>
      <ul class="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-800">
        <li class="flex gap-2">
          <span>🛠️</span
          ><span
            ><strong>Maintained Linux systems</strong> and resolved
            server/network issues</span
          >
        </li>
        <li class="flex gap-2">
          <span>🛠️</span
          ><span
            ><strong>Performed hardware troubleshooting</strong> and
            automation</span
          >
        </li>
        <li class="flex gap-2">
          <span>🛠️</span
          ><span
            ><strong>Supported IT operations</strong> and asset management</span
          >
        </li>
      </ul>
    </article>

    <article
      class="rounded-2xl bg-white bg-gradient-to-b from-white to-emerald-50/30 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6"
    >
      <h3 class="text-lg font-extrabold text-slate-900 leading-snug">
        Seaversity —
        <span class="text-emerald-700">Frontend Developer (Intern)</span>
      </h3>
      <p class="text-xs text-slate-500 mt-1 italic">Jul 2023 – Jul 2024</p>
      <ul class="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-800">
        <li class="flex gap-2">
          <span>✨</span
          ><span><strong>Built UI components</strong> using Vue/Nuxt</span>
        </li>
        <li class="flex gap-2">
          <span>✨</span
          ><span
            ><strong>Contributed to responsive design</strong> and API
            integration</span
          >
        </li>
        <li class="flex gap-2">
          <span>✨</span
          ><span
            ><strong>Collaborated with cross-functional teams</strong></span
          >
        </li>
      </ul>
    </article>
  </div>

  <!-- ===== Stacks & Technologies ===== -->
  <section id="stacks" class="space-y-10">
    <h2
      class="text-3xl font-extrabold text-slate-900 mb-8 text-center tracking-wide"
    >
      Stacks &amp; Technologies
    </h2>

    <!-- Loop categories -->
    <div v-for="cat in stackCategories" :key="cat.title">
      <h3 class="text-sm uppercase tracking-wider text-slate-500 mb-3">
        {{ cat.title }}
      </h3>

      <!-- Loop items -->
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        <div
          v-for="item in cat.items"
          :key="item.name"
          class="group flex flex-col items-center gap-2"
        >
          <img
            :src="item.icon"
            :alt="item.alt || item.name"
            class="w-12 h-12 transition-transform duration-200 group-hover:scale-110"
            :class="item.rounded ? 'rounded' : ''"
            loading="lazy"
            @error="onIconError($event, item)"
          />
          <span class="text-slate-800 text-sm font-medium">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
