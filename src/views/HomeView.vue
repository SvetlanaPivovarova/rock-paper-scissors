<template>
  <Header :score="score" />
  <button class="button">Бонус</button>
  <game-button v-for="item in selections"
               :key="item.id"
               :choice="item.id"
               @picked="pickedButton = $event"
  />
</template>
<script>
import Header from "@/components/Header.vue";
import GameButton from "@/components/GameButton.vue";
import { selectionOptions } from "@/utils/constants.js";

export default {
  components: {
    GameButton,
    Header
  },
  data() {
    return {
      score: 0,
      selections: selectionOptions,
      pickedButton: null
    }
  },
  watch: {
    'pickedButton'() {
      console.log(this.pickedButton)
    }
  }
}
</script>