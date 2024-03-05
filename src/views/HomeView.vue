<template>
  <Header :score="score" />
  <button class="button">Бонус</button>
  <game-button choice="paper" />
  <game-button choice="rock" />
  <game-button choice="scissors" />
</template>
<script>
import Header from "@/components/Header.vue";
import GameButton from "@/components/GameButton.vue";

export default {
  components: {
    GameButton,
    Header
  },
  data() {
    return {
      score: 0
    }
  }
}
</script>