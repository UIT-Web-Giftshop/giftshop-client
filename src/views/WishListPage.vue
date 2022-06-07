<template>
  <div id="frame">
    <VHeader/>
    <VGridCard/>
  </div>
</template> 
<script>
import VHeader from "@/components/wishlist-page/VHeader.vue";
import VGridCard from "@/components/wishlist-page/VGridCard.vue";
// import VProductGrid from "@/components/list-product/VProductGrid.vue";
export default {
  name: "WishlistPage",
  components: {
    VHeader,
    VGridCard
},
};
</script>
<style lang = "scss" scoped>
#frame {
  margin: 20px;
}
</style>
