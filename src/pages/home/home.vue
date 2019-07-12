<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <v-city></v-city>
      </div>
      <div class="right">
        <v-search></v-search>
      </div>
      <div class="imgae">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562681642955&di=8e268b3f4f08c8185db902c882468f62&imgtype=0&src=http%3A%2F%2Fuus-img8.android.d.cn%2Fcontent_pic%2F201509%2Fbehpic%2Ficon%2F683%2F2-8683%2Ficon-google.png"
          alt
        />
      </div>
    </div>

    <div class="navBar">
        <router-link tag="div" to="/home/recommand" active-class="active" class="hot-item">推荐</router-link>
        <router-link tag="div" to="/home/TV" active-class="active" class="hot-item">电视剧</router-link>
        <router-link tag="div" to="/home/show" active-class="active" class="hot-item">综艺</router-link>
        <router-link tag="div" to="/home/book" active-class="active" class="hot-item">书籍</router-link>
    </div>
    <!-- <van-tabs v-model="active" animated>
      <van-tab title="推荐">
        111
        
      </van-tab>
      <van-tab title="电视剧">内容 2</van-tab>
      <van-tab title="综艺">内容 3</van-tab>
      <van-tab title="演唱会">内容 4</van-tab>
      <van-tab title="书籍">内容 4</van-tab>
    </van-tabs> -->

    <router-view />

    

    <div class="tabBar">
      <van-tabbar route active-color="#e8323c">
        <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/movie" icon="search">电影</van-tabbar-item>
        <van-tabbar-item replace to="/cinema" icon="coupon-o">影院</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import city from "@/components/city/city";
import search from '@/components/search'
export default {
  data() {
    return {
      active: 0,
     
    };
  },
  methods: {
   search(){}
  },
  components: {
    "v-city": city,
    "v-search":search
  }
};
</script>

<style lang="stylus" scoped>
body, html {
  padding: 0;
  margin: 0;
}

.container {
  box-sizing: border-box;
}

.header {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
}

.tabBar {
  position: fixed;
}

.right {
  flex: 1;
  margin-left: 20px;
  height: 40px;
  width: 100px;
}

img {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 27px;
  top: 12px;
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
