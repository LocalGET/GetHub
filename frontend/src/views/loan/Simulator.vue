<template>
  <div class="simulator-box">
    <h3>Simulador</h3>
    <InputDefault title="Valor a resgatar" v-model="value" icon="cash-multiple" />
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import InputDefault from './../../components/inputs/InputDefault.vue';
export default defineComponent({
  components: { InputDefault },
  setup() {
    const value = ref('100000');
    return { value };
  }
});
</script>

<style>
</style>