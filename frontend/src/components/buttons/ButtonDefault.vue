<template>
  <div class="button-box">
    <button class="button-custom" @click="$emit('clicked')">{{ name }}</button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import * as Types from './../../types';
export default defineComponent({
  props: {
    name: { type: String, required: true }
  }
});
</script>
<style lang="scss">
.button-custom {
  min-height: 50px;
  min-width: 215px;
  width: auto;
  border-radius: 24px;
  border: 1px solid var(--color-button-border);
  color: var(--color-button-text-secundary);
  background: var(--color-button-background);
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background: var(--color-button-hover);
  }
  &:focus {
    outline-style: none;
    background: var(--color-button-hover);
  }
}
</style>