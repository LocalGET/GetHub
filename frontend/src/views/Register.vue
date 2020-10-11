<template>
  <div class="register-box">
    <div class="inputs">
      <InputDefault title="E-mail" type="email" icon="account" />
      <InputDefault title="Senha" type="password" icon="lock" />
      <InputDefault title="Confirmar senha" type="password" icon="lock" />
    </div>
    <ButtonDefault name="Cadastre-se" @clicked="$router.push('/home')" />
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