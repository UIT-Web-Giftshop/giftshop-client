<template>
  <div id="frame">
    <VHeader></VHeader>
    <VProgress></VProgress>
    <VProductGrid></VProductGrid>
    <VPagingVue></VPagingVue>
  </div>
</template> 
<script>
import VHeader from '@/components/list-product/VHeader.vue';
import VProductGrid from '@/components/list-product/VProductGrid.vue';
import VPagingVue from '@/components/list-product/VPaging.vue';
import VProgress from '@/components/list-product/VProgress.vue';
export default {
  name: 'ListProduct',
  components: {
    VHeader,
    VProductGrid,
    VPagingVue,
    VProgress
  },
};
</script>
<style lang = "scss" scoped>
#frame {
  margin: 100px;
}
</style>
