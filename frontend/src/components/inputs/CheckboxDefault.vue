<template>
  <div class="checkbox-block">
    <input type="checkbox" :id="id" @change="$emit('check', $event.target.checked)" />
    <label :for="id">{{ label }}</label>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    label: { type: String, required: true },
    id: String,
    value: Boolean
  }
});
</script>


<style>
.checkbox-block [type='checkbox']:not(:checked),
.checkbox-block [type='checkbox']:checked {
  position: absolute;
  left: -9999px;
}
.checkbox-block [type='checkbox']:not(:checked) + label,
.checkbox-block [type='checkbox']:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
}
/* checkbox aspect */
.checkbox-block [type='checkbox']:not(:checked) + label:before,
.checkbox-block [type='checkbox']:checked + label:before {
  content: '';
  position: absolute;
  left: 0.6rem;
  top: 0rem;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--color-input-border);
  background: var(--color-input-background);
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
.checkbox-block [type='checkbox']:not(:checked) + label:after,
.checkbox-block [type='checkbox']:checked + label:after {
  content: '\02688\0020';
  position: absolute;
  top: 0.3rem;
  left: 0.8rem;
  line-height: 1;
  color: var(--color-primary);
  transition: all 0.2s;
}
.checkbox-block [type='checkbox']:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
.checkbox-block [type='checkbox']:checked + label:after {
  opacity: 1;
  transform: scale(1);
  border-color: var(--color-primary);
}

/* hover style just for information */
label:hover:before {
  border: 2px solid var(--color-primary) !important;
}
.checkbox-block label {
  font-size: 1.5rem;
}
a {
  position: relative;
  z-index: -1;
}
</style>
