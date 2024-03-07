<template>
  <header class="header container">
    <img src="../assets/images/logo.svg" alt="Rock Paper Scissors" class="icon icon-logo" />
    <div class="score">
      <p>Счет</p>
      <p class="score__digital">{{ score }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0
    }
  }
}
</script>
