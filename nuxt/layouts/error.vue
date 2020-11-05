<template>
  <BaseCard background="circuit">
    <template #content>
      <div class="mb-4">
        <h1
          v-if="error.statusCode === 404"
          class="text-xl font-semibold text-primary-950"
        >
          Niestety, ta strona nie istnieje
        </h1>
        <h1 v-else class="text-xl">Niestety, wystąpił problem</h1>
      </div>
    </template>
    <template #action>
      <BaseButton content="Wróć na stronę główną" route target="/" fill />
    </template>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: ['error'],
  layout: 'center',
})
</script>
