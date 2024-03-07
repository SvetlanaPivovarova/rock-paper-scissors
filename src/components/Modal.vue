<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <div class="modal-body">
        <slot name="body">default body</slot>
      </div>
      <button class="close-button icon icon-24 icon-close" @click="$emit('close')"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
}
</script>
