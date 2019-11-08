<template lang="pug">
  client-only
    v-content
      div.product-layout
        section.intro-product
          p 아이로보 상품소개
          h1 아이로보 상품
          p
            | 고액 자산가에게 국한되어 있던 일임, 자문 서비스를
            br
            | 이젠 아이로보를 통해 누구나 쉽게 받으실 수 있습니다.
        
        section.products
          nav
            ul
              li
                a.active(href="") 전체상품
              li
                a(href="") 일임형
              li
                a(href="") 자문형
          h2 아이로보 상품
          p 증권사별 투자 전략 맞춤 상품
          div.product-list
          Product(buttonTitle="자세히 보기" @emitProduct="productDetail")

        section.securities-firm
          h2 아이로보 일임 증권사
          p 아이로보 일임 상품은 유진투자증권과삼성증권 계좌를 통해 이용 하실 수 있습니다.
          div.images
            img(alt="eugene" src="~/assets/eugene.png")
            img(alt="samsung" src="~/assets/samsung.png")

        section.join
          h2 아이로보 어떻게 가입할까요?
          p 가입절차
          p 
            | 아이로보 상담센터에 연락해 투자자에게 맞는
            br
            | 아이로보 상품 추천 및 가입안내를 받습니다.
          div.dots
            span.active
            span
            span
            span
          div.join-process
            div(v-for="step in steps" :key="step.id")
              img(:src="step.imgSrc")
              span {{step.id}}
              p {{step.title}}
              div {{step.description}}
          button.contract-join 상품 가입 문의

        section.directions
          h2 찾아 오시는 길
          address 가까운 역 : 7호선 청담역 8번 출구 도보 1분
          address 주소 : 서울시 강남구 삼성로 719 3층 (경덕빌딩)
          div.map
          
        section.partners
          div.partner
            h5 아이로보 파트너
            img(src="https://cdn.irobo.co.kr/images/main/sinhan.png")
            img(src="https://cdn.irobo.co.kr/images/common/fsdc.png")
            img(src="https://cdn.irobo.co.kr/images/common/koscom.png")
          div.partner
            h5 아이로보 파트너
            img(src="https://cdn.irobo.co.kr/images/common/fss.png")
            img(src="https://cdn.irobo.co.kr/images/common/fsc.png")
            img(src="https://cdn.irobo.co.kr/images/common/korfin.png")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Product from '~/components/Product.vue'

interface Step {
  id: Number
  title: string
  imgSrc: string
  description: string
}

@Component({
  components: {
    Product
  }
})

export default class Index extends Vue {
  readonly steps: Step[] = [
    {
      id: 1,
      title: '상담문의',
      imgSrc: 'https://cdn.irobo.co.kr/images/sub/joinImg1.png',
      description: '아이로보 상품 설명\n및 가입 안내'
    },
    {
      id: 2,
      title: '투자성향확인',
      imgSrc: 'https://cdn.irobo.co.kr/images/sub/joinImg2.png',
      description: '투자권유 및\n투자성향확인'
    },
    {
      id: 3,
      title: '계약체결',
      imgSrc: 'https://cdn.irobo.co.kr/images/sub/joinImg3.png',
      description: '아이로보 계약 및 계좌개설\n계좌개설'
    },
    {
      id: 4,
      title: '계좌운용',
      imgSrc: 'https://cdn.irobo.co.kr/images/sub/joinImg4.png',
      description: '계약금 입금 확인 후\n계좌 운용 시작'
    }
  ]

  productDetail(data: string) {
    console.log('data:', data)
  }
}
</script>

<style lang="scss" scoped>
  .product-layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;

    section {
      padding: 70px;

      &.intro-product {
        margin-top: 60px;
        background: linear-gradient(190deg, #44b0f6, #4278d6);
      }

      &.products {
        padding: 0 0 50px 0;
        background: linear-gradient(45deg, #85bcf9, #00df6d);
      }

      &.securities-firm,
      &.directions {
        background: #fff;
        color: #333;
      }

      &.join {
        background: #4c8eff;
      }

      &.directions {
        padding: 50px 0 0 0;
      }

      &.partners {
        height: 500px;
        background: url("https://cdn.irobo.co.kr/images/main/compayBg_dexktop.jpg");
        background-size: 100%;
      }
    }

    .product-list {
      display: block;
      margin: 50px auto 0;
    }

      nav {
        margin-bottom: 50px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #f1f2e6;

        & ul {
          position: relative;
          margin: 0;
          padding: 0;

          & li {
            display: inline;
          }

            & a {
              padding: 0 100px;
              color: #333 !important;
              text-decoration: none;

              &.active {
                color: #00c661 !important;
              }
            }
        }
      }

      .images > img:last-child {
        position: relative;
        top: 7px;
      }

      .partner {
        width: 750px;
        margin: 0 auto;

        & > h5 {
          margin-bottom: 20px;
        }

        &:not(:first-child) {
          margin-top: 50px
        }

        & > img {
          margin: 25px 20px;
          width: 180px;
        }
      }

      address {
        width: 1000px;
        margin: 0 auto 5px !important ;
        font-size: 16px;
        font-style: normal;
        text-align: left;
      }

      .map {
        width: 100%;
        height: 600px;
        margin-top: 30px;
        background-color: #fbf6ee;
      }

      .join-process {
        display: block;
        margin: 50px auto 0;
        width: 1000px;

        & > div {
          display: inline-block;
          position: relative;
          width: 21%;
          height: 290px;

          & > div {
            white-space: pre-line;
          }

          &:not(:first-child):after {
            display: block;
            position: absolute;
            top: 50px;
            width: 2px;
            height: 100px;
            background-color: rgba(255, 255, 255, 0.2);
            content: "";
          }

          & img {
            width: 50%;
            margin-left: 25%;
            margin-right: 25%;
          }
          
          & span {
            border-bottom: solid 1px #ffffff;
            font-size: 18px;
            font-weight: 600;
          }

          & p {
            margin-top: 10px;
            margin-bottom: 7px !important;
            font-size: 20px;
            font-weight: 500;
          }
        }
      }

      .contract-join {
        width: 300px;
        margin-top: 50px;
        padding: 15px 0;
        background: #fff;
        border-radius: 60px;
        color: #1f72ff;
        font-size: 18px;
        font-weight: 500;
      }

      .dots {
        display: block;
        text-align: center;

        & span.active {
          background-color: hsla(0, 0%, 100%, 0.8);
        }

        & span {
          display: inline-block;
          width: 8px;
          height: 8px;
          margin: 0 4px;
          background-color: hsla(0, 0%, 100%, 0.2);
          border-radius: 8px;
        }
      }
  }
</style>