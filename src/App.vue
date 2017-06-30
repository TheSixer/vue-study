<template>
    <div class="app">
        <!--<Loading></Loading>-->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
      data () {
        return {}
      },
      mounted () {},
      beforeDestroy () {},
      methods: {}
    }
</script>

<style lang="less">
	@import './style/common';
  @screenWidth: 100%;
  @screenHeight: 100%;

  .app {
    width: @screenWidth;
    min-height: @screenHeight;
  }
</style>
