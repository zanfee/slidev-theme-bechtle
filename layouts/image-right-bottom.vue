<script setup lang="ts">
  import { computed } from 'vue'
  import { handleBackground } from '../layoutHelper'
  
  const props = defineProps({
    image: {
      type: String,
    },
    class: {
      type: String,
    },
    imageStyles: {
      type: String,
    },
  })
  
  const style = computed(() => handleBackground(props.image))
  </script>
  
  <template>
    <div class="grid grid-cols-2 w-full h-full">
      <div class="slidev-layout default" :class="props.class">
        <slot />
      </div>
      <div class="w-full" :style="style" style="background-position: bottom" />
    </div>
  </template>
  