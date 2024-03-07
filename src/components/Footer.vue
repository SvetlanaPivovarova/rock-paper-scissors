<template>
  <footer class="footer">
    <div class="footer__container">
      <button class="button button_primary" @click="openBonusModal">Бонус</button>
      <button class="button button_primary" @click="openRulesModal">Правила</button>
    </div>
  </footer>
  <modal :show="showRulesModal" @close="showRulesModal = false">
    <template #body>
      <rules />
    </template>
  </modal>
  <modal :show="showBonusModal" @close="showBonusModal = false">
    <template #body>
      <article class="article">
        <h2>Бонусная игра</h2>
        <p>
          В будущем можно будет сыграть в «Камень, ножницы, бумагу, ящерицу, спока» против
          компьютера
        </p>
      </article>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue'
import Rules from '@/components/Rules.vue'
export default {
  components: {
    Rules,
    Modal
  },
  data() {
    return {
      showRulesModal: false,
      showBonusModal: false
    }
  },
  methods: {
    openRulesModal() {
      this.showRulesModal = true
    },
    openBonusModal() {
      this.showBonusModal = true
    }
  }
}
</script>
