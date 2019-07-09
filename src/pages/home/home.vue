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
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562681642955&di=8e268b3f4f08c8185db902c882468f62&imgtype=0&src=http%3A%2F%2Fuus-img8.android.d.cn%2Fcontent_pic%2F201509%2Fbehpic%2Ficon%2F683%2F2-8683%2Ficon-google.png" alt="">
      </div>
      
    </div>
    <van-tabs v-model="active" animated>
      <van-tab title="推荐">内容 1</van-tab>
      <van-tab title="电视剧">内容 2</van-tab>
      <van-tab title="综艺">内容 3</van-tab>
      <van-tab title="演唱会">内容 4</van-tab>
      <!-- <van-tab title="书籍">内容 4</van-tab> -->

    </van-tabs>

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
      active: 2
    };
  },
  methods: {
   
  },
  components: {
    "v-city": city,
    "v-search":search
  }
};
</script>

<style lang="stylus" scoped>
body,html
  padding 0
  margin 0
.container
  box-sizing border-box
.header {
  position relative
  width: 100%;
  height: 50px;
  display: flex;
  
}
.right{
  flex 1
  margin-left 20px
  

  height: 40px;
  width 100px
  
}

img{
  width 30px
  height 30px
  position absolute
  right 27px
  top 12px
  
}




</style>
