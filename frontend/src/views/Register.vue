<template>
  <div class="register-box">
    <div class="inputs">
      <InputDefault title="E-mail" type="email" icon="account" v-model="email" />
      <InputDefault title="Senha" type="password" icon="lock" v-model="password" />
      <InputDefault title="Confirmar senha" type="password" icon="lock" />
    </div>
    <ButtonDefault name="Cadastre-se" @clicked="click($router)" />
  </div>
</template>

<script lang='ts'>
import InputDefault from './../components/inputs/InputDefault.vue';
import ButtonDefault from './../components/buttons/ButtonDefault.vue';
import { defineComponent, ref } from '@vue/composition-api';
import { register } from '../services';
import VueRouter from 'vue-router';
export default defineComponent({
  components: { InputDefault, ButtonDefault },
  setup() {
    const email = ref<string>('');
    const password = ref<string>('');
    async function click(router: VueRouter) {
      const response = await register({ email: email.value, password: password.value });
      if (response.id) router.push('/login');
    }
    return { email, password, click };
  }
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