<template>
  <div class="simulator-box">
    <h2>Simulador</h2>
    <InputDefault title="Valor a resgatar" v-model="value" icon="cash-multiple" />
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import InputDefault from './../../components/inputs/InputDefault.vue';
export default defineComponent({
  components: { InputDefault },
  setup(props, context) {
    const value = ref('100000');
    console.log(context.root.$router);
    return { value };
  }
});
</script>

<style lang="scss">
.simulator-box {
  h2 {
    text-align: center;
    margin: 20px;
  }
}
</style>