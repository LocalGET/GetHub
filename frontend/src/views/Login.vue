<template>
  <div class="login-box">
    <div class="inputs">
      <InputDefault title="E-mail" type="email" />
      <InputDefault title="Senha" type="password" />
    </div>
    <div class="select-box">
      <CheckboxDefault id="remember" label="Lembrar-me" />
      <router-link to="/forget">Esqueceu a senha?</router-link>
    </div>
    <ButtonDefault name="Fazer login" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';
import InputDefault from './../components/inputs/InputDefault.vue';
import ButtonDefault from './../components/buttons/ButtonDefault.vue';
import CheckboxDefault from './../components/inputs/CheckboxDefault.vue';

export default defineComponent({
  components: { InputDefault, ButtonDefault, CheckboxDefault }
});
</script>

<style lang='scss'>
a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.5rem;
}
.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;

  .select-box {
    display: flex;
    flex-direction: row;
    min-width: 300px;
    width: auto;
    justify-content: space-between;
    align-items: baseline;
    margin: 1rem 0 10rem 0;
  }
}
</style>