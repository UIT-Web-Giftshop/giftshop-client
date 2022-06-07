<template>
  <div style="margin-top: 60px">
    <v-list-item>
      <v-list-item-content style="padding: 0px">
        <v-container fluid>
          <v-row
            v-for="(product, index) in getProductCart"
            :key="index"
            style="border-bottom: 1px solid grey"
          >
          <VProductCard :product_info="product"/>
          </v-row>
        </v-container>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VProductCard from "./VProductCard.vue";
export default {
  data: () => {
    return {};
  },
  mounted() {
    this.getProductsFromCartServer();
  },
  methods: {
    ...mapActions({
      getProductsFromCartServer: "cart/getProductsFromCartServer",
    }),
  },
  computed: {
    ...mapGetters({
      getProductCart: "cart/getProductCart",
    }),
  },
  components: { VProductCard },
};
</script>