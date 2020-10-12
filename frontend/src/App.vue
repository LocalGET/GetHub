<template>
  <div id="app">
    <router-view />
    <Navigation />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Global from './Global.vue';
import Navigation from './components/buttons/Navigation.vue';

export default defineComponent({
  components: {
    Global,
    Navigation
  },
  setup(props, context) {
    console.log(context.root.$router);
  }
});
</script>
<style>
</style>
