<template>
  <header-default :score="score" />
  <button class="button">Бонус</button>
  <playing-field />
</template>
<script>
import HeaderDefault from "@/components/Header.vue";
import PlayingField from "@/components/PlayingField.vue";


export default {
  components: {
    PlayingField,
    HeaderDefault
  },
  data() {
    return {
      score: 0,
    }
  },

}
</script>