<template>
  <div class="login-box">
    <div class="inputs">
      <InputDefault title="E-mail" type="email" icon="account" v-model="email" />
      <InputDefault title="Senha" type="password" icon="lock" v-model="password" />
    </div>
    <div class="select-box">
      <CheckboxDefault id="remember" label="Lembrar-me" />
      <router-link to="/forget">Esqueceu a senha?</router-link>
    </div>
    <ButtonDefault name="Fazer login" @clicked="click($router)" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import InputDefault from './../components/inputs/InputDefault.vue';
import ButtonDefault from './../components/buttons/ButtonDefault.vue';
import CheckboxDefault from './../components/inputs/CheckboxDefault.vue';
import { auth } from './../services';
import VueRouter from 'vue-router';

export default defineComponent({
  components: { InputDefault, ButtonDefault, CheckboxDefault },
  setup() {
    const email = ref('');
    const password = ref('');

    async function click(router: VueRouter) {
      const response = await auth({ email: email.value, password: password.value });
      if (response) router.push('/home');
    }
    return { email, password, click };
  }
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