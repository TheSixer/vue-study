<template>
    <transition name="fade">
        <i>{{ type }}</i>
        <div
            :v-if="isShow">
            {{ content }}
        </div>
    </transition>
</template>
<script>
    export default {
      props: {
        content: {
          type: String,
          default: prefixCls
        },
        styles: {
          type: Object,
          default: function () {
            return {
              top: '65px',
              left: '50%'
            }
          }
        },
        content: {
          type: String
        },
        className: {
          type: String
        }
      },
      data () {
        return {
          notices: []
        }
      },
      computed: {
        classes () {
          return [
            `${this.prefixCls}`,
            {
              [`${this.className}`]: !!this.className
            }
          ]
        }
      },
      methods: {
        add (notice) {
          const name = notice.name || getUuid()

          let _notice = Object.assign({
            styles: {
              right: '50%'
            },
            content: '',
            duration: 1.5,
            closable: false,
            name: name
          }, notice)

          this.notices.push(_notice)
        },
        close (name) {
          const notices = this.notices
          for (let i = 0; i < notices.length; i++) {
            if (notices[i].name === name) {
              this.notices.splice(i, 1)
              break
            }
          }
        },
        closeAll () {
          this.notices = []
        },
        clearCloseTimer () {
          if (this.closeTimer) {
            clearTimeout(this.closeTimer)
            this.closeTimer = null
          }
        },
        close () {
          this.clearCloseTimer()
          this.onClose()
          this.$parent.close(this.name)
        }
      },
      mounted () {
        this.clearCloseTimer()

        if (this.duration !== 0) {
          this.closeTimer = setTimeout(() => {
            this.close()
          }, this.duration * 1000)
        }

        // check if with desc in Notice component
        if (this.prefixCls === 'ivu-notice') {
          this.withDesc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0].innerHTML !== ''
        }
      },
      beforeDestroy () {
        this.clearCloseTimer()
      }
    }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
