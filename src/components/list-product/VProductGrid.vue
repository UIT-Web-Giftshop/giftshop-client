<template>
  <v-container fluid>
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5,
      }"
      min-height="200"
      transition="fade-transition"
    >
      <v-row dense>
        <v-col v-for="(product, index) in getProducts" :key="index">
          <VProductCard :product_info="product"></VProductCard>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
import VProductCard from "./VProductCard.vue";
import {mapGetters, mapActions, mapState } from "vuex";
// import {GET_PRODUCTS_SERVER, GET_PRODUCTS} from '../../store/mutation-types';

export default {
  name: "VProductGrid",
  data: () => {
    return {
      isActive: false,
    };
  },
  components: {
    VProductCard,
  },
  created: function () {
    this.getProductsFromServer();
  },
  methods: {
    ...mapActions ({
      getProductsFromServer: "list_products/getProductsFromServer",
    }),
  },
  computed: {
    ...mapGetters({
      getProducts: "list_products/getProducts",
    }),
    ...mapState(["list_products/products"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap");
</style>

<style lang = "scss" scoped>
#header {
  // font-family: "Pacifico", cursive;
  font-size: 70px;
}
</style>