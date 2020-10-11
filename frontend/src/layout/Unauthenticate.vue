<template>
  <div class="layout-box">
    <img src="/img/getnet_logo.png" alt="logo" class="logo" />
    <div class="select-buttons" :style="colors">
      <button class="btn-login" @click="login($router, $route.path)">
        Entrar
      </button>
      <button class="btn-register" @click="register($router, $route.path)">
        Cadastrar
      </button>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  setup(props, context) {
    const colors = reactive<object>({});

    function login(router, path) {
      (colors['--color-login'] = `var(--color-primary)`),
        (colors['--color-text-login'] = 'var(--color-button-text-primary)'),
        (colors['--color-hover-login'] = 'var(--color-primary-ligth)'),
        (colors['--color-register'] = `var(--color-secundary)`),
        (colors['--color-text-register'] = 'var(--color-button-text-secundary)'),
        (colors['--color-hover-register'] = 'var(--color-button-hover)');

      if (path != '/login') router.push('/login');
    }
    function register(router, path) {
      (colors['--color-login'] = `var(--color-secundary)`),
        (colors['--color-text-login'] = 'var(--color-button-text-secundary)'),
        (colors['--color-hover-login'] = 'var(--color-button-hover)'),
        (colors['--color-register'] = `var(--color-primary)`),
        (colors['--color-text-register'] = 'var(--color-button-text-primary)'),
        (colors['--color-hover-register'] = 'var(--color-primary-ligth)');
      if (path != '/register') router.push('/register');
    }

    if (context.root.$route.path == '/login') login(context.root.$router, context.root.$route.path);
    else register(context.root.$router, context.root.$route.path);

    return { login, register, colors };
  }
});
</script>

<style lang='scss'>
.layout-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;
  .logo {
    min-width: 195px;
    min-height: 110px;
    margin: 5rem 0 1rem 0;
  }
  .select-buttons {
    margin: 0.8rem 0 10rem 0;
    .btn-login,
    .btn-register {
      min-height: 50px;
      min-width: 144px;
      font-weight: 700;
      border: 1px solid var(--color-button-border);
      cursor: pointer;
    }
    .btn-login {
      background: var(--color-login);
      color: var(--color-text-login);
      border-radius: 12px 0 0 12px;
      &:hover {
        background: var(--color-hover-login);
      }
      &:focus {
        outline-style: none;
        background: var(--color-hover-login);
      }
    }
    .btn-register {
      background: var(--color-register);
      color: var(--color-text-register);
      border-radius: 0 12px 12px 0;
      &:hover {
        background: var(--color-hover-register);
      }
      &:focus {
        outline-style: none;
        background: var(--color-hover-register);
      }
    }
  }
}
</style>