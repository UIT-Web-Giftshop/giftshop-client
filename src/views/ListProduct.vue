<template>
  <div id="frame">
    <VHeader></VHeader>
    <VProductGrid></VProductGrid>
  </div>
</template> 


<script>
import VHeader from "@/components/list-product/VHeader.vue";
import VProductGrid from "@/components/list-product/VProductGrid.vue";
export default {
  name: "ListProduct",
  components: {
    VHeader,
    VProductGrid
},
};
</script>
<style lang = "scss" scoped>
#frame{
    margin: 100px
}
</style>
