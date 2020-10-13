<template>
  <div
    class="fixed z-50 inset-0 bg-crosses flex items-center justify-center cursor-pointer"
    @click="close"
  >
    <BaseCard class="cursor-default">
      <template #content>
        <FocusLock>
          <div>
            <div>
              <ButtonIcon
                secondary
                data-testid="btn-close"
                icon="close"
                @click="close"
              />
            </div>
          </div> </FocusLock
      ></template>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { emit }) {
    const close = () => emit('close')

    return {
      close,
    }
  },
})
</script>
