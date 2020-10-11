<template>
  <div class="layout-auth">
    <div class="header-auth">
      <img src="/img/gethub_logo_branco.png" alt="logo" />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>

<style lang='scss'>
.header-auth {
  display: flex;
  width: 100vw;
  height: 10%;
  align-items: center;
  justify-content: center;

  background: var(--color-primary);

  img {
    min-width: 146px;
    min-height: 82px;
  }
}
</style>