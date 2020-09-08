<template>
  <div class="h-full">
    <portal to="background-image"
      ><img
        class="opacity-25 filter-blur h-full object-cover md:opacity-75 md:filter-none"
        src="https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733_960_720.jpg"
      />
    </portal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
