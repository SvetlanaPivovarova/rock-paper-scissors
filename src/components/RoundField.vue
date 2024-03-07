<template>
  <section class="round-field">
    <div class="round-field__wrapper">
      <p>Вы выбрали</p>
      <game-button
        :choice="playerChoice"
        size="large"
        :status="playerWon && !deadHeat ? 'winner' : ''"
      />
    </div>
    <div class="round-field__result">
      <p v-if="playerWon">Вы выиграли</p>
      <p v-if="!playerWon && !deadHeat">Вы проиграли</p>
      <p v-if="!playerWon && deadHeat">Ничья!</p>
      <button @click="play" class="button button_secondary">Играть снова</button>
    </div>
    <div class="round-field__wrapper">
      <span class="winner"></span>
      <p>Компьютер выбрал</p>
      <game-button
        :choice="computerChoice"
        size="large"
        :status="!playerWon && !deadHeat ? 'winner' : ''"
      />
    </div>
  </section>
</template>

<script>
import GameButton from '@/components/GameButton.vue'
import { selectionOptions } from '@/utils/constants.js'

export default {
  components: { GameButton },
  props: {
    playerChoice: {
      type: String,
      default: 'rock'
    }
  },
  data() {
    return {
      computerChoice: null,
      playerWon: null,
      deadHeat: false,
      variantsQuantity: 3
    }
  },
  mounted() {
    this.computerChoice = this.makeMoveForComputer()
    this.refereeGame()
  },
  unmounted() {
    this.deadHeat = false
  },
  methods: {
    makeMoveForComputer() {
      const random = Math.floor(Math.random() * this.variantsQuantity)
      return selectionOptions[random].id
    },
    refereeGame() {
      if (this.playerChoice === this.computerChoice) {
        this.playerWon = false
        this.deadHeat = true
      } else if (
        this.playerChoice === selectionOptions[0].id &&
        this.computerChoice === selectionOptions[1].id
      ) {
        this.playerWon = true
        this.$emit('increaseScore')
      } else if (
        this.playerChoice === selectionOptions[1].id &&
        this.computerChoice === selectionOptions[2].id
      ) {
        this.playerWon = true
        this.$emit('increaseScore')
      } else if (
        this.playerChoice === selectionOptions[2].id &&
        this.computerChoice === selectionOptions[0].id
      ) {
        this.playerWon = true
        this.$emit('increase')
      } else {
        this.playerWon = false
        this.$emit('decrease')
      }
    },
    play() {
      this.playerWon = false
      this.deadHeat = false
      this.$emit('playAgain')
    }
  }
}
</script>
