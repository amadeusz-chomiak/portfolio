<template>
  <transition name="modal" :duration="500">
    <div
      v-if="show"
      class="fixed z-50 inset-0 flex max-h-screen items-center justify-center p-4 md:p-6 lg:p-8 xl:p-10"
    >
      <div
        class="transition-bg cursor-pointer absolute inset-0 bg-crosses"
        data-testid="bg"
        @click="close"
      />
      <BaseCard
        class="transition-card cursor-default max-h-full overflow-auto scroll scroll-thin scroll-rounded-full z-10 relative"
      >
        <template #content>
          <FocusLock>
            <div class="lg:m-2 xl:m-4 2xl:m-6">
              <div class="flex justify-between items-end">
                <p class="text-primary-50 text-2xl">{{ title }}</p>
                <ButtonIcon
                  secondary
                  data-testid="btn-close"
                  icon="close"
                  @click="close"
                />
              </div>
              <div class="flex flex-wrap">
                <slot />
              </div>
            </div> </FocusLock
        ></template>
      </BaseCard>
    </div>
  </transition>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const close = () => emit('close')

    return {
      close,
    }
  },
})
</script>
