<template>
  <v-footer :bottom-active="bottomActive"></v-footer>
</template>

<script>
import Footer from '../../components/Footer'
export default {
  data() {
    return {
       bottomActive: 0
    }
  },
  components:{
    "v-footer":Footer
  }
}
</script>

<style>

</style>
