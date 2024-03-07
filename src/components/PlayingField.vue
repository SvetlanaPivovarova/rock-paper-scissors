<template>
  <div class="playing-field">
    <game-button
      v-for="item in selections"
      :key="item.id"
      :choice="item.id"
      @picked="pickedButton = $event"
    />
  </div>
</template>

<script>
import GameButton from './GameButton.vue'
import { selectionOptions } from '@/utils/constants.js'

export default {
  components: {
    GameButton
  },
  data() {
    return {
      selections: selectionOptions,
      pickedButton: null
    }
  },
  watch: {
    pickedButton() {
      this.$emit('pickedButton', this.pickedButton)
      this.$emit('checkResult')
    }
  }
}
</script>
