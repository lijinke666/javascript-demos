<template>
  <div :class="[styles.container,{[styles.safari]: isSafari}]" ref="container" @touchmove="onTouch">
    <div
      v-for="(item,i) in sapLists"
      :class="[styles.wrap,{
        [styles.prevCard]: (5 + index) % sapLists.length === i,
        [styles.lastCard]: (2 + index) % sapLists.length === i,
        [styles.nextCard]: (1 + index) % sapLists.length === i,
        [styles.currentCard]: (0 + index) % sapLists.length === i,
      }]"
      :key="i"
      :style="{
        backgroundColor: item.color
      }"
    >
      <div>1</div>
    </div>
  </div>
</template>
<script type="text/babel">
  import styles from './index.scss'
  import AlloyFinger from 'alloyfinger'
  import { mapActions } from 'vuex'

  export default {
    props: ['lists'],
    data() {
      return {
        quizLabels,
        styles,
        icon,
        heandle: null,
        touchType: {
          down: 'DOWN',
          up: 'UP',
        },
        index: 6000,
      }
    },
    computed: {
      sapLists() {
        if(this.lists.length >= 1){
          const lists = [...this.lists,...this.lists]
          return lists
        }
      },
      isSafari() {
        const ua = navigator.userAgent
        return /Safari/.test(ua) && (!/Chrome/.test(ua))
      },
    },
    methods: {
      ...mapActions([
        'actFestivalSapList',
        'sapListSliderUp',
        'sapListSliderDown',
      ]),
      onTouch(e) {
        e.preventDefault()
      },
      onSlideDown() {
        this.index -= 1
      },
      onSlideUp() {
        this.index += 1
      },
      onSwipe({ direction }) {
        const currentDirection = direction.toUpperCase()
        switch (currentDirection) {
          case this.touchType['down']:
            this.onSlideDown()
            break
          case this.touchType['up']:
            this.onSlideUp()
            break
          default:
            this.onSlideUp()
        }
      },
    },
    mounted() {
      this.handle = new AlloyFinger(this.$refs.container, {
        swipe: this.onSwipe,
      })
    },
    beforeDestroyed() {
      Reflect.deleteProperty(this, 'handle')
    },
  }
</script>