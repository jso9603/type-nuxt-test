<template lang="pug">
  div
    footer
      address
        span 주식회사 아이로보투자자문
        span 사업자등록번호 : 654-86-00344
        span
          strong 대표번호 : 1544-1403
        span
          a(href="mailto:info.irobo.co.kr") irobo@irobo.co.kr
        span 
          | 주소: 서울특별시 강남구 삼성로 719 3층
          br
        span iRobo Investment Advisory Co., Ltd.
        span T. +82 2 548 9491   F. +82 2 548 9492
        span 3F 719 Samseong-ro, Gangnam-gu, Seoul, Korea 06067
      div.copyright-notice
        p © 2019 iRobo. All rights reserved.
        div.family-site Family site
        ul
          li
            a(href="") 이용약관
          li
            a(href="") 개인정보취급방침
          li
            a(href="") 공지사항
</template>

<style lang="scss" scoped>
  footer {
    padding: 20px 7px;
    background: #1f1f1f;
    color: #eee;

    & address {
      width: 876px;
      padding: 0 0 10px 0;
      margin: 0 auto;
      border-bottom: solid 1px #333;
      color: #eee;
      font-style: normal;
      font-size: 10px;
      font-weight: 200;
      text-align: left;
    }

    & address > span {
      margin-right: 10px;
      font-size: 12px;
    } 

    & address span a {
      color: #eee !important;
      text-decoration: none;
    }

    .copyright-notice {
      width: 876px;
      min-height: 40px;
      margin: 0 auto;
      padding: 10px 0 0 0;

      &.copyright-notice > p {
        margin: 7px 0 0 0 !important;
        color: #eee;
        float: left;
        font-size: 10px;
        font-weight: 200;
      }

      & ul {
        float: right;
      }

       & ul li {
        margin: 0 10px;
        display: inline;
       }

       & ul li a {
        color: #4bddac !important;
        font-size: 11px;
        font-weight: 300;
        text-decoration: none;
       }

       & > .family-site {
        float: right;
        width: 100px;
        padding: 6px 5px;
        background: #000;
        color: #999;
        font-size: 12px;
        text-align: center;
       }
    }
  } 
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({ })
export default class FooterComponent extends Vue { }
</script>