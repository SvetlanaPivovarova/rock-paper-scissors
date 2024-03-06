<template>
  <footer class="footer">
    <div class="footer__container">
      <button class="button button_primary">Бонус</button>
      <button class="button button_primary" @click="openModal">Правила</button>
    </div>
  </footer>
  <modal :show="showModal" @close="showModal = false" >
    <template #body>
      <rules />
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal.vue"
import Rules from "@/components/Rules.vue";
export default {
  components: {
    Rules,
    Modal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal() {
      this.showModal = true;
    }
  }
}
</script>