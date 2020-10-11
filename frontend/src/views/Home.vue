<template>
  <div class="home">
    <div class="container-home">
      <h2>Do que você precisa?</h2>
      <div class="container-cards">
        <div class="card">
          <img src="/img/multitask.svg" alt="recebíveis" />
          <h3>Recebíveis</h3>
        </div>
        <div class="card">
          <img src="/img/chat.svg" alt="solicitações" />
          <h3>Solicitações</h3>
        </div>
        <div class="card">
          <img src="/img/idea.svg" alt="gestão" />
          <h3>Gestão</h3>
        </div>
        <div class="card">
          <img src="/img/people.svg" alt="gestão" />
          <h3>Rede</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  components: {}
});
</script>
<style lang="scss">
.container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 5rem;
    font-weight: 300;
  }
  .container-cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 140px;
      height: 125px;
      background: #ffffff;
      border-radius: 12px;
      border: 1px solid var(--color-button-border);
      box-shadow: 0px 3px 6px #00000029;
      margin: 2rem;
      cursor: pointer;
      &:hover {
        background: var(--color-button-placeholder);
      }
    }
  }
}
</style>
