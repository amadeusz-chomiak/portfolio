<template>
  <div class="bg-black flex flex-col h-screen relative">
    <div
      class="m-4 md:mt-8 md:mb-5 md:mx-8 lg:mt-10 lg:mb-6 lg:mx-10 xl:mt-12 xl:mb-8 xl:mx-12 z-10"
    >
      <TheHeader />
    </div>
    <div class="flex flex-col-reverse md:flex-row flex-1 z-10">
      <div class="md:ml-5 lg:ml-6 xl:ml-8">
        <TheNavigation />
      </div>
      <main
        class="px-4 md:px-5 md:mt-8 md:max-w-md lg:px-6 lg:mt-10 lg:max-w-lg xl:px-8 xl:mt-12 xl:max-w-4xl flex-1 overflow-auto"
      >
        <Nuxt />
      </main>
    </div>
    <div class="absolute inset-0 md:left-auto md:right-0 md:w-2/3 xl:w-3/4">
      <portal-target class="h-full" name="background-image"></portal-target>
      <div
        class="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent to-black"
      />
    </div>
  </div>
</template>
