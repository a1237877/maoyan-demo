<template>
  <div class="city">
    <div class="index">
      <div class="address-choose">
        <router-link tag="span" :to="{name: 'cityList'}" class="address-choose-content">
          {{cityName}}
          <span class="address-choose-icon">></span>
        </router-link>
      </div>

      <div id="allmap"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [ "shouldChangeCity"],
  data() {
    return {
      cityName:''
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.baiduLocation();
    });
  },
  methods: {
    /**
     * [百度地图定位]
     * @param  {[type]}       [无入参]
     * @return {[type]}       [无返回值]
     */
    baiduLocation() {
      this.$parent.shouldChangeCity = true;
      let _that = this;
      /*eslint-disable*/
      // 百度地图定位
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      var geoc = new BMap.Geocoder();
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() === BMAP_STATUS_SUCCESS) {
            console.log("定位成功");
            console.log(r.point);
            geoc.getLocation(r.point, function(rs) {
              var addComp = rs.addressComponents;
              console.log(
                addComp.province +
                  ", " +
                  addComp.city +
                  ", " +
                  addComp.district +
                  ", " +
                  addComp.street +
                  ", " +
                  addComp.streetNumber
              );

              _that.cityName = addComp.city.replace("市", "");
            });
          } else {
            console.log("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
      /*eslint-disable*/
    }
  }
};
</script>

<style lang="stylus" scoped>
.city
  height 40px
  width 70px
  .index
    margin-top 15px
    margin-left 15px
    .address-choose
      font-size 16px
      color #333
      .address-choose-content
        font-family Microsoft YaHei,Helvetica,Arial,sans-serif
        margin-right 10px
        font-weight bold
        .address-choose-icon
          color #9c9c9c
        


  
 

  

</style>