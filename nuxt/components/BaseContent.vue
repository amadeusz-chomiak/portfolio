<template>
  <div>
    <template v-for="block in content">
      <p :key="block._key">
        <template v-for="span in block.children">
          <span :key="span._key">{{ span.text }}</span>
        </template>
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api'
import { Content } from '~/types/BaseContent'

export default defineComponent({
  props: {
    content: {
      type: Array as () => Content,
      required: true,
    },
  },
  setup(props) {
    return {
      // content: props.content,
    }
  },
})
</script>
