<template>
  <div class="register-box">
    <div class="inputs">
      <InputDefault title="E-mail" type="email" />
      <InputDefault title="Senha" type="password" />
      <InputDefault title="Confirmar senha" type="password" />
    </div>
    <ButtonDefault name="Cadastre-se" />
  </div>
</template>

<script lang='ts'>
import InputDefault from './../components/inputs/InputDefault.vue';
import ButtonDefault from './../components/buttons/ButtonDefault.vue';
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  components: { InputDefault, ButtonDefault }
});
</script>

<style lang='scss'>
.register-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;
  .inputs {
    margin: 1rem 0 10rem 0;
  }
}
</style>