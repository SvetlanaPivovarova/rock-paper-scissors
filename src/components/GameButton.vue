<template>
  <label class="game-button">
    <input type="radio" :id="choice" :value="choice" v-model="picked" />
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
  data() {
    return {
      picked: false
    }
  },
  methods: {
    gameButtonClass(choice) {
      return `game-button__label game-button__label_type_${choice}`
    }
  },
  watch: {
    'picked'() {
      this.$emit('picked', this.choice)
    }
  }
}
</script>