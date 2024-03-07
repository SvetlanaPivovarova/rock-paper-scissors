<template>
  <header-default :score="store.count" />
  <playing-field v-if="startGame" @pickedButton="choice = $event" @checkResult="toggle" />
  <round-field
    v-if="!startGame"
    :player-choice="choice"
    @increase="store.increment()"
    @decrease="store.decrement()"
    @playAgain="toggle"
  />
  <footer-default />
</template>

<script setup>
import { ref } from 'vue'
import HeaderDefault from '@/components/Header.vue'
import PlayingField from '@/components/PlayingField.vue'
import FooterDefault from '@/components/Footer.vue'
import RoundField from '@/components/RoundField.vue'
import { useScoreStore } from '@/stores/score.js'

const store = useScoreStore()
const choice = ref(null)
const startGame = ref(true)

const toggle = () => {
  startGame.value = !startGame.value
}
</script>
