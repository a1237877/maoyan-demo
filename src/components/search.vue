<template>
  <div class="searchBar">
    <div class="searBar-box">
      <img src="../assets/search.png" class="search-icon" />
      <input class="input" type="texsearchBart" disabled="true" placeholder-class="search-plac" placeholder="搜索" @click="search" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    search(){
      this.$route.push('/search')
    }
  },
};
</script>

<style lang="stylus" scoped>
.seachBar{
  justify-content: center;
  height: 70px;
}
.searchBar .searBar-box{
  display: inline-block;
  position relative
  width:85%;
  height: 50px;
  background: #fff;
}
.searBar-box.tap{
  background: rgba(255,247,231,.9);
}

.searBar-box .search-icon{
  position: absolute;
  left: 16%;
  top: 16px;
  width: 20px;
  height: 20px;
}
.input{
  border-radius: 40px;
  background #ffffff
  margin-top 11px
  text-align center
  border 1px solid #f0f0f0
  padding 3px
  width 200px
}
</style>
