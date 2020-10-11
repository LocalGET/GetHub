<template>
  <div class="home">
    Página Home - A ser desenvolvida
    <ButtonDefault name="Cadastrar-se" color="secundary" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ButtonDefault from './../components/buttons/ButtonDefault.vue';
export default defineComponent({
  components: { ButtonDefault }
});
</script>
