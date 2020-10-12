<template>
  <div class="navigation-box" :class="{ active: isActive }" @click="active()">
    <span class="mdi mdi-dots-grid"></span>
    <ul :class="{ active: isActive }">
      <li @click="$router.push('/')">
        <img src="/img/multitask_secundary.svg" alt="recebíveis" />
        Recebíveis
      </li>
      <li @click="$router.push('/loan/dashboard')">
        <img src="/img/chat_secundary.svg" alt="solicitações" /> Solicitações
      </li>
      <li @click="$router.push('/')"><img src="/img/idea_secundary.svg" alt="gestão" /> Gestão</li>
      <li @click="$router.push('/network/search')"><img src="/img/people_secundary.svg" alt="rede" />Rede</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const isActive = ref(false);
    function active() {
      isActive.value = !isActive.value;
    }
    return { isActive, active };
  }
});
</script>

<style lang="scss">
.navigation-box {
  position: fixed;
  bottom: 40px;
  left: 40px;
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  span {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-secundary);
    font-size: 2rem;
    transition: 0.3s ease-in-out;
  }
  ul {
    position: absolute;
    bottom: 55px;
    background: var(--color-primary);
    min-width: 250px;
    padding: 20px;
    border-radius: 20px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
.navigation-box.active {
  span {
    transform: rotate(135deg);
  }
  ul {
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
    li {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 0;
      color: var(--color-secundary);
      &:hover {
        font-weight: 600;
        img {
          opacity: 0.8;
        }
      }
      &:not(:last-child) {
        border-bottom: 1px solid #cccccc77;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        opacity: 0.4;
      }
    }
  }
}
</style>