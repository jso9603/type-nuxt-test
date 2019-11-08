<template lang="pug">
  v-app-bar(fixed)
    v-toolbar-title iRobo
    v-spacer
    v-toolbar-items
      v-btn(text v-for="menu in menus") {{menu}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeaderComponent extends Vue {
  readonly menus = [
    '아이로보 소개',
    '포트폴리오 만들기',
    '아이로보 상품',
    '이벤트',
    'FAQ',
    '투자자정보확인',
    '로그인',
    '회원가입',
    '상담신청'
  ]
}
</script>