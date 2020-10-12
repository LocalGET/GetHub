<template>
  <div class="input-block">
    <input
      :type="type"
      :placeholder="title"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :required="required"
      class="input-default"
    />
    <span class="mdi mdi-magnify icon" @click="$emit('clicked')"></span>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    value: { type: String },
    title: { type: String, required: true },
    required: { type: Boolean },
    type: { type: String }
  }
});
</script>

<style lang='scss'>
.input-block {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  .icon {
    position: relative;
    right: 45px;
    z-index: 1;
    font-size: 2.5rem;
    cursor: pointer;
  }
  .input-default {
    background: var(--color-input-background);
    border-radius: 2rem;
    min-height: 47px;
    min-width: 300px;
    font-size: 1.8rem;
    border: 1px solid var(--color-input-border);
    text-indent: 50px;
    margin-top: 20px;
    &:focus {
      border: none;
      outline-style: none;
    }
    &::placeholder {
      color: var(--color-input-placeholder);
    }
  }
}
</style>