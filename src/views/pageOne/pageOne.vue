<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="https://raw.githubusercontent.com/iview/iview/master/assets/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <router-link to="/">To home page</router-link>
                    <router-link to="pageTwo">To page two</router-link>
                    <Button type="ghost" @click="tips">Start Tips</Button>
                    <Button type="ghost" @click="success">Start success</Button>
                    <Button type="ghost" @click="success">Start info</Button>
                    <Button type="ghost" @click="error">Start error</Button>
                    <Button type="ghost" @click="warning">Start warning</Button>
                    <Button type="ghost" @click="flexible">Start flexible</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
      methods: {
        tips () {
          this.$Tips.info('this is a tips modal!')
        },
        success () {
          this.$Aleter.success('this is a tips modal!')
        },
        error () {
          this.$Aleter.error('this is a tips modal!')
        },
        warning () {
          this.$Aleter.warning('this is a tips modal!')
        },
        flexible () {
          this.$Aleter.flexible('this is a tips modal!')
        },
        info () {
          this.$Aleter.info('this is a tips modal!')
        }
      }
    }
</script>
