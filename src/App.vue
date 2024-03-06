<script setup>
import HomeView from "@/views/HomeView.vue";
import {useScoreStore} from "@/stores/score.js";

const store = useScoreStore()
function count() {
  store.increment()
}
</script>

<template>
  <div class="container">
    <HomeView />
    <p @click="count">{{store.count}}</p>
  </div>
</template>

<style scoped>

</style>
