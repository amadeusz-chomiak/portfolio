<template>
  <transition name="modal" :duration="500">
    <div
      v-if="show"
      class="fixed z-50 inset-0 flex items-center justify-center p-4 md:p-8 lg:p-16 xl:p-24"
    >
      <div
        class="transition-bg cursor-pointer absolute inset-0 bg-crosses"
        data-testid="bg"
        @click="close"
      />
      <BaseCard class="transition-card cursor-default w-full z-10 relative">
        <template #content>
          <FocusLock>
            <div>
              <div class="flex justify-between items-end">
                <p class="text-primary-50 text-2xl">{{ title }}</p>
                <ButtonIcon
                  secondary
                  data-testid="btn-close"
                  icon="close"
                  @click="close"
                />
              </div>
              <div>
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
