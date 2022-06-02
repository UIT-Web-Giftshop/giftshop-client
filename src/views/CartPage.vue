<template>
  <div id="frame">
    <VHeader></VHeader>
  </div>
</template> 
<script>
import VHeader from "@/components/cart-page/VHeader.vue";
// import VProductGrid from "@/components/list-product/VProductGrid.vue";
export default {
  name: "ListProduct",
  components: {
    VHeader,
    // VProductGrid
},
};
</script>
<style lang = "scss" scoped>
#frame{
    margin: 100px
}
</style>
