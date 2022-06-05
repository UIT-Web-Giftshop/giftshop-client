<template>
  <div>
    <Banner></Banner>
    <VFooter></VFooter>
  </div>
</template>


<script>
import Banner from '../components/Banner.vue';
import VFooter from '../components/common/VFooter.vue';
export default {
  name: 'HomeView',
  components: {
    Banner,
    VFooter,
  },
};
</script>


<style lang = "scss" scoped>
</style>
