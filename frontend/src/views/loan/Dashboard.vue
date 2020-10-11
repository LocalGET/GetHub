<template>
  <div class="dashboard-box">
    <div class="loan-box">
      <div class="score-box">
        <fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="chart" />
      </div>
      <div class="message-loan">
        <div class="credit-aproved" v-if="credit">
          <h2>O valor disponível no momento é de R$ 10.000,00</h2>
          <p>Este valor pode mudar diariamente devido à nossa análise de crédito</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">Entenda como funciona ></a>
        </div>
        <div class="credit-reproved" v-if="!credit">
          <h2>No momento você não possui crédito pré-aprovado 😢</h2>
          <p>Este resultado pode mudar diariamente devido à nossa análise de crédito</p>
          <a href="http://" target="_blank" rel="noopener noreferrer">Entenda os motivos de não possuir crédito ></a>
        </div>
      </div>
      <div class="btn-loan">
        <ButtonDefault
          :name="credit ? 'Novo empréstimo' : 'Solicitar reavaliação'"
          @clicked="credit ? $router.push('/loan/simulator') : $router.push('/loan/reavability')"
        />
      </div>
    </div>
    <div class="loan-history">
      <p>
        Você não possui nenhum empréstimo ativo
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';
import ButtonDefault from './../../components/buttons/ButtonDefault.vue';

export default defineComponent({
  components: { ButtonDefault },
  setup() {
    const credit = ref(true);
    const width = ref('90%');
    const height = ref('20%');
    const type = ref('angulargauge');
    const dataFormat = ref('json');
    const chart = reactive({
      chart: {
        caption: 'Seu Score (Pontuação)',
        bgColor: '#fafafa',
        lowerLimit: '0',
        upperLimit: '1000',
        showValue: '1',
        theme: 'fusion'
      },
      colorRange: {
        color: [
          {
            minValue: '0',
            maxValue: '250',
            code: '#F2726F'
          },
          {
            minValue: '500',
            maxValue: '750',
            code: '#FFC533'
          },
          {
            minValue: '750',
            maxValue: '1000',
            code: '#62B58F'
          }
        ]
      },
      dials: {
        dial: [
          {
            value: '810'
          }
        ]
      }
    });
    return { credit, chart, dataFormat, type, height, width };
  }
});
</script>

<style lang='scss'>
.loan-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  border-bottom: 1px solid var(--color-button-border);
  .score-box {
    margin: 20px;
  }
  .message-loan {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    margin-bottom: 20px;
    h2 {
      font-weight: 300;
      margin: 20px;
    }
    p {
      margin: 20px 20px 2px 20px;
    }
    a {
      text-decoration: none;
      color: var(--color-primary);
      margin-left: 20px;
    }
  }
  .btn-loan {
    margin-bottom: 20px;
  }
}
.loan-history {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    margin: 20px;
    font-size: 1.5rem;
    color: var(--color-text-light);
  }
}
</style>