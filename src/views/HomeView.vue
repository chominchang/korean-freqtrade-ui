<script setup lang="ts"></script>

<template>
  <div class="mt-5">
    <div class="flex justify-center">
      <BotList />
    </div>
    <Divider />
    <!-- <img alt="Freqtrade logo" src="../assets/freqtrade-logo.png" width="450px" class="my-5" /> -->
    <div title="프리퀀트레이드 로고" class="logo-svg my-5 mx-auto dark:bg-white bg-black" />
    <h1 class="font-bold text-4xl mb-4">프리퀀트레이드 UI에 오신 것을 환영합니다</h1>
    <div>이 페이지에서 거래 봇을 제어할 수 있습니다.</div>
    <Divider />
    <p class="mb-2">
      도움이 필요하시면 다음을 참조하세요:
      <a
        class="text-primary underline cursor-pointer"
        href="https://www.freqtrade.io/en/latest/"
        target="_blank"
        >프리퀀트레이드 문서</a
      >.
    </p>

    <p>즐거운 시간 되세요 - <i>프리퀀트레이드 팀 드림</i></p>
  </div>
</template>

<style lang="css" scoped>
.logo-svg {
  -webkit-mask: url(../assets/freqtrade-logo-mask.png) no-repeat center;
  -webkit-mask-size: 240px 240px;
  mask: url(../assets/freqtrade-logo-mask.png) no-repeat center;
  mask-size: contain;
  width: 250px;
  height: 250px;
}
</style>
