<template>
  <div id="frame">
    <VHeader></VHeader>
    <VGridCard />
    <div style="padding-bottom: 200px">
      <v-card
        elevation="10"
        loading
        loader-height="3px"
        shaped
        style="
          margin: 20px 0px 0px 0px;
          width: fit-content;
          height: ;
          position: absolute;
          right: 3%;
        "
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Bill</div>
            <v-list-item-subtitle>
              <v-row>
                <v-col> Subtotal </v-col>
                <v-col> £24.80 </v-col>
              </v-row>
            </v-list-item-subtitle>
            <v-list-item-title
              class="text-h6 font-weight-bold"
              style="margin-top: 20px"
            >
              <v-row>
                <v-col> TOTAL </v-col>
                <v-col> £24.80 </v-col>
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
          <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
        </v-list-item>

        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn rounded text style="text-transform: none"> Continue shopping </v-btn>
            </v-col>
            <v-col>
              <v-btn
                rounded
                color="teal_lighten_2"
                dark
                class="font-weight-bold"
                style="text-transform: none"
                width="100%"
                @click="buyProduct(product_info)"
              >
                Checkout
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template> 
<script>
import VHeader from "@/components/cart-page/VHeader.vue";
import VGridCard from "@/components/cart-page/VGridCard.vue";
// import VProductGrid from "@/components/list-product/VProductGrid.vue";
export default {
  name: "ListProduct",
  components: {
    VHeader,
    VGridCard,
  },
};
</script>
<style lang = "scss" scoped>
#frame {
  margin: 20px;
}
</style>
