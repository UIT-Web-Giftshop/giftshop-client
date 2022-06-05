<template>
  <div id="frame">
    <VHeader/>
    <VGridCard />
    <VBottomPay/>
  </div>
</template> 
<script>
import VHeader from "@/components/cart-page/VHeader.vue";
import VGridCard from "@/components/cart-page/VGridCard.vue";
import VBottomPay from "@/components/cart-page/VBottomPay.vue";
// import VProductGrid from "@/components/list-product/VProductGrid.vue";
export default {
  name: "ListProduct",
  components: {
    VHeader,
    VGridCard,
    VBottomPay
},
};
</script>
<style lang = "scss" scoped>
#frame {
  margin: 20px;
}
</style>
