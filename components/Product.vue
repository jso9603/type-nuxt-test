<template lang="pug">
  div
    div.product-box(v-for="product in products" :key="product.id")
      header
        h3 {{product.title}}
        p.subhead {{product.subTitle}}
        p {{product.description}}
        button.btn-product-detail(@click="onEmitEvent") {{buttonTitle}}
</template>

<style lang="scss" scoped>
  .product-box {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    padding: 50px 25px;
    margin: 20px 25px;
    width: 450px;
    height: 450px;
    background-size: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    &:first-child {
      background-image: url("https://cdn.irobo.co.kr/images/sub/miraeassetBg.jpg");
    }
    
    &:last-child {
      background-image: url("https://cdn.irobo.co.kr/images/sub/dongbuBg.jpg");
    }

    & h3 {
      font-size: 28px;
    }

    & header > p {
      margin-bottom: 35px !important;
      font-size: 18px;
      white-space: pre-line;
    }

    & button.btn-product-detail {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      padding: 6px 20px;
      border: solid 1px #fff;
      border-radius: 30px;
    }
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface Product {
  id: Number;
  title: string;
  subTitle: string;
  description: string;
}

@Component
export default class ProductComponent extends Vue {
  @Prop() buttonTitle!: String
  private parentData: string = 'parent'

  readonly products: Product[] = [
    {
      id: 1,
      title: '아이로보 알파 국내주식',
      subTitle: '(안정형 ~ 공격투자형)',
      description: `아이로보만의 주식선정모델, 포트폴리오최적화 모델\n국면포착모델을 결합하여 시장보다 우월한 주식부문\n수익률을 추구하며, 동시에 시장 하락국면에서의\n적극걱 비중축소 전략을 추구하여 중장기적\n절대 수익을 목표로 운영`
    },
    {
      id: 2,
      title: '아이로보 글로벌 자산배분',
      subTitle: '(안정형 ~ 적극투자형)',
      description: `국내 상장된 ETP를 활용하여 위험 대비 수익을\n극대화하는 자산배분 모델 및 위험자산의 추세적 하락시\n안전채권으로 전환하는 국면모델을 통해 손실 위험을\n최소화하는 전력을 동시에 추구`
    }
  ]

  onEmitEvent() {
    this.$emit('emitProduct', this.parentData)
  }
}
</script>