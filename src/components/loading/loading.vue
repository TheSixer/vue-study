<template>
  <div class="loader-bg">
    <transition name="slide">
      <div class="loader">
          <div class="loader-inner ball-spin-fade-loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>


<style scoped>
    /* 必需 */
    .slide-transition {
      transition: all .3s ease;
      height: 30px;
      padding: 10px;
      background-color: #eee;
      overflow: hidden;
    }
    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .slide-enter, .slide-leave {
      height: 0;
      padding: 0 10px;
      opacity: 0;
    }
    .loader-bg {
      position: fixed;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 1000;
      opacity: .45;
    }
    .loader{
      position: fixed;
      top: 50%;
      left: 50%;
      width: 80px;
      height: 80px;
      margin: 0 auto;
      transform: translate(-50%, -50%);
    }
    @keyframes ball-spin-fade-loader {
        50% {
            opacity: 0.3;
            -webkit-transform: scale(0.4);
            transform: scale(0.4); }

        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1); } }

    .ball-spin-fade-loader {
        position: relative;
        left: 30px; }
    .ball-spin-fade-loader > div:nth-child(1) {
        top: 25px;
        left: 0;
        -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
        animation: ball-spin-fade-loader 1s 0s infinite linear; }
    .ball-spin-fade-loader > div:nth-child(2) {
        top: 17.04545px;
        left: 17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
        animation: ball-spin-fade-loader 1s 0.12s infinite linear; }
    .ball-spin-fade-loader > div:nth-child(3) {
        top: 0;
        left: 25px;
        -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
        animation: ball-spin-fade-loader 1s 0.24s infinite linear; }
    .ball-spin-fade-loader > div:nth-child(4) {
        top: -17.04545px;
        left: 17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
        animation: ball-spin-fade-loader 1s 0.36s infinite linear; }
    .ball-spin-fade-loader > div:nth-child(5) {
        top: -25px;
        left: 0;
        -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
        animation: ball-spin-fade-loader 1s 0.48s infinite linear; }
    .ball-spin-fade-loader > div:nth-child(6) {
        top: -17.04545px;
        left: -17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
        animation: ball-spin-fade-loader 1s 0.6s infinite linear; }
    .ball-spin-fade-loader > div:nth-child(7) {
        top: 0;
        left: -25px;
        -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
        animation: ball-spin-fade-loader 1s 0.72s infinite linear; }
    .ball-spin-fade-loader > div:nth-child(8) {
        top: 17.04545px;
        left: -17.04545px;
        -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
        animation: ball-spin-fade-loader 1s 0.84s infinite linear; }
    .ball-spin-fade-loader > div {
        background-color: #FFF;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        position: absolute; }
</style>
