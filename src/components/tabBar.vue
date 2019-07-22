<template>
  <div>
    <div class="bottom-tab">
      <router-link to='/home' class="tab-item">
        <img :src="testPath == 1 ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" 
        />
        <span>推荐</span>
      </router-link>
      <router-link to='/movie' class="tab-item">
        <img :src="testPath == 2 ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" 
        />
        <span>电影</span>
      </router-link>
      <router-link to='/cinema' class="tab-item">
        <img :src="testPath == 3 ? tabBarImgArr[2].selected : tabBarImgArr[2].normal"
        />
        <span>影院</span>
      </router-link>
       <router-link to='/mine' class="tab-item">
        <img :src="testPath == 4 ? tabBarImgArr[3].selected : tabBarImgArr[3].normal"
        />
        <span>我的</span>
      </router-link>
      <!-- <div class="tab-item" @click="switchTo('/home/recommand')">
        <img
          :src="
           '/home/recommand' === this.$route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal
           "
          alt="首页"
        />
        <span :class="{on: '/home/recommand' === this.$route.path  }">首页</span>
      </div> -->
      <!-- <div class="tab-item" @click="switchTo('/movie/intheater')">
        <img
          :src="
          '/movie/intheater' === this.$route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal 
          "
          alt="推荐"
        />
        <span :class="{on: '/movie/intheater'===this.$route.path }">推荐</span>
      </div>
      <div class="tab-item" @click="switchTo('/cinema')">
        <img
          :src="'/cinema' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal"
          alt="搜索"
        />
        <span :class="{on: '/cinema' === $route.path}">搜索</span>
      </div>
      <div class="tab-item" @click="switchTo('/chat')">
        <img
          :src="'/chat' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal"
          alt="聊天"
        />
        <span :class="{on: '/chat' === $route.path}">聊天</span>
      </div>
      <div class="tab-item" @click="switchTo('/me')">
        <img
          :src="'/me' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal"
          alt="我的"
        />
        <span :class="{on: '/me' === $route.path}">我的</span>
      </div> -->
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      testPath: null,
      tabBarImgArr: [
        //图片切换
        {
          normal: require("../images/shouye.png"),
          selected: require("../images/yemian-copy.png")
        },
        {
          normal: require("../images/shipin.png"),
          selected: require("../images/dianying.png")
        },
        {
          normal: require("../images/yingyuan.png"),
          selected: require("../images/yingyuana.png")
        },
        {
          normal: require("../images/wode2.png"),
          selected: require("../images/wode.png")
        }
       
      ]
    };
  },
  methods: { 
    switchTo() {
      
      let oPath = this.$route.path
      if (oPath.indexOf('/home') !== -1) {
        this.testPath = 1
      } else if (oPath.indexOf('/movie') !== -1) {
        this.testPath = 2
      } else if (oPath.indexOf('/cinema') !== -1) {
        this.testPath = 3
      }else if(oPath.indexOf('/mine') !== -1){
        this.testPath = 4
      }
    }
  },
  mounted() {
    this.switchTo()
  },
  watch:{
    routerPath() {
      this.switchTo()
    }
  },
  computed: {
    routerPath () {
      // console.log(this.$route.path)
      return this.$route.path
    }
  },
};
</script>

<style lang="stylus" scoped>
.tab-item.router-link-active
  color red
.bottom-tab {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  left: 0px;
  bottom: 0px;
  display: flex;
  z-index: 999;
}
  .tab-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
    img {
      width: 30%;
      height 25px
      margin-bottom: 2px;
    }

    .on {
      color: red;
    }
  
.navBar
  flex 1
  display flex 
  margin-left 5px
  margin-top 15px
  .hot-item
    padding 0
    text-align center
    flex 1
    &.active
      color #f03d37
      // text-decoration underline
      border-bottom 2px solid red

</style>
