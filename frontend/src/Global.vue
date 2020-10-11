<template>
  <div></div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Global'
});
</script>

<style>
:root {
  font-size: 60%;

  --color-background: #fafafa;
  --color-text-base: #000000;
  --color-text-light: #444444;
  --color-primary-ligth: #ff0001;
  --color-primary: #cc0001;
  --color-primary-dark: #990001;
  --color-secundary: #ffffff;
  --color-button-background: #ffffff;
  --color-button-hover: #ffe6e6;
  --color-button-text-primary: #ffffff;
  --color-button-text-secundary: #cc0001;
  --color-button-border: #e4e4e4;
  --color-input-background: #ffffff;
  --color-input-text: #000000;
  --color-input-placeholder: #262626;
  --color-input-border: #e4e4e4;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100vh;
}

body {
  background: var(--color-background);
}
#app {
  display: flex;
  justify-content: center;
}
body,
input,
button,
textarea {
  font: 500 1.6rem Roboto;
  color: var(--color-text-base);
}
@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
</style>