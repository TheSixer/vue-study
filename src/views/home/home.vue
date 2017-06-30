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
                <router-link to="login">Log in</router-link>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <router-link to="pageOne">To page one</router-link>
                    <router-link to="pageTwo">To page two</router-link>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                    <Button type="ghost" @click="alert">Alert iView</Button>
                    <Button type="ghost" @click="logout">Log out</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
      methods: {
        handleStart () {
          this.$Message.info('Yes, you success!')
        },
        alert () {
          this.$Tips.info('Yes, you success!')
        },
        logout () {
          this.$store.dispatch('logout')
        }
      }
    }
</script>
