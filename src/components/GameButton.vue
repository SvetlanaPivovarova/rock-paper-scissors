<template>
  <label :class="gameButtonClass">
    <input type="radio" :id="choice" :value="choice" v-model="picked" />
    <span :class="gameButtonSpanClass(choice)">
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
    },
    size: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      picked: false
    }
  },
  methods: {
    gameButtonSpanClass(choice) {
      return `game-button__label game-button__label_type_${choice}`
    }
  },
  watch: {
    'picked'() {
      this.$emit('picked', this.choice)
    }
  },
  computed: {
    gameButtonClass() {
      if(this.size) {
        if(this.status) {
          return `game-button game-button_size_${this.size} game-button_${this.status}`
        } else return `game-button game-button_size_${this.size}`
      } else {
        if(this.status) {
          return `game-button game-button_${this.status}`
        } else return `game-button`
      }
    }
  }
}
</script>