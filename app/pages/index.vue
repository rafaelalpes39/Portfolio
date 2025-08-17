<template>
  <div id="home" class="scroll-smooth bg-white text-gray-800">
    <!-- Hero -->
    <Homehero />

    <!-- About -->
    <section id="about" class="bg-white py-16">
      <About />
    </section>

    <!-- Skills -->
    <section
      id="skills"
      class="min-h-screen w-full flex items-center bg-slate-50"
    >
      <Skills />
    </section>

    <!-- Experience -->
    <section id="expi-Stacks" class="max-w-7xl mx-auto px-6 py-16 font-sans">
      <expirienceStacks />
    </section>

    <!-- Contact -->
    <section
      id="contact"
      class="min-h-screen bg-slate-50 px-6 py-16 md:px-10 lg:px-16"
    >
      <Contact />
    </section>
  </div>
</template>
