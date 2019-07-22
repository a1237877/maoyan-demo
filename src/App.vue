<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import jsonp from 'jsonp'
export default {
  
  name: "App",
  created() {
    // var that = this
    //  axios.get('https://www.easy-mock.com/mock/5ca466ee13e4cf68f04a4308/wzxhh').then(function(result) {
            // result是所有的返回回来的数据
            // 包括了响应报文行
            // 响应报文头
            // 响应报文体
            // console.log(result.data.data);
           

        // });
  },
};
</script>


