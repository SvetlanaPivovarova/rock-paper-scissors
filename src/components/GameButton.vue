<template>
  <label class="game-button">
    <input type="checkbox" />
    <span :class="gameButtonClass(choice)">
      <span class="game-button__inner">
        <span class="icon"></span>
      </span>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    choice: {
      type: String,
    }
  },
  methods: {
    gameButtonClass(choice) {
      return `game-button__label game-button__label_type_${choice}`
    }
  }
}
</script>