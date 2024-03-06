<template>
  <header-default :score="store.count" />
  <playing-field @pickedButton="choice = $event"/>
  <round-field :player-choice="choice" @increase="store.increment()" @decrease="store.decrement()"/>
  <footer-default />
</template>

<script setup>
import {ref} from "vue";
import HeaderDefault from "@/components/Header.vue";
import PlayingField from "@/components/PlayingField.vue";
import FooterDefault from "@/components/Footer.vue";
import RoundField from "@/components/RoundField.vue";
import {useScoreStore} from "@/stores/score.js";

const store = useScoreStore();
const choice = ref(null);


//function increaseScore() {
////}

//function decreaseScore() {
//  this.score--;
//}

</script>