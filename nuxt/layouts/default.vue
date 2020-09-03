<template>
  <div class="bg-black flex flex-col h-screen">
    <div
      class="m-4 md:mt-8 md:mb-5 md:mx-6 lg:mt-10 lg:mb-6 lg:mx-8 xl:mt-12 xl:mb-8 xl:mx-10"
    >
      <TheHeader />
    </div>
    <div class="flex flex-col-reverse md:flex-row flex-1">
      <div class="md:ml-5 lg:ml-6 xl:ml-8">
        <TheNavigation />
      </div>
      <main
        class="px-4 md:px-5 md:mt-8 md:max-w-md lg:px-6 lg:mt-10 lg:max-w-lg xl:px-8 xl:mt-12 xl:max-w-4xl flex-1 overflow-auto"
      >
        <Nuxt />
      </main>
    </div>
  </div>
</template>
