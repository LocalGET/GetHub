<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Global from './Global.vue';

export default defineComponent({
  components: {
    Global
  }
});
</script>
<style>
</style>
