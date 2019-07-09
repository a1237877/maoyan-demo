<template>
  <div>
    <router-view />

    <van-tabbar route  active-color="#e8323c">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/movie" icon="search">电影</van-tabbar-item>
      <van-tabbar-item replace to="/cinema" icon="coupon-o">影院</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>


    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
