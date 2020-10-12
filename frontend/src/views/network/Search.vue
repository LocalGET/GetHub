<template>
  <div class="search-box">
    <SearchInput title="Buscar" v-model="text" @clicked="click()" />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@vue/composition-api';
import SearchInput from './../../components/inputs/SearchInput.vue';

export default defineComponent({
  components: { SearchInput },
  setup() {
    const text = ref('');
    function click() {
      console.log(text.value);
    }
    return { click, text };
  }
});
</script>

<style>
</style>