<template>
  <v-card style="margin-top: 50px; margin-left: 2px; min-width: 242px;" width="300px" height="480px">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-img
          class="white--text align-end"
          height="300px"
          :src="product_info.imageUrl"
        >
          <v-fade-transition>
            <v-overlay v-if="hover" absolute co lor="#036358">
              <v-btn color="white" class="black--text" :to="urlDetailProduct"
                >xem chi tiết</v-btn
              >
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </template>
    </v-hover>

    <v-card-title class="font d-block" style="text-overflow:ellipsis;  overflow: hidden; white-space: nowrap;">{{ product_info.name }}</v-card-title>

    <v-card-subtitle class="pb-0 pt-3 font-weight-bold price">
      {{ toMoney }}
    </v-card-subtitle>

    <v-card-actions style="margin-top: 25px">
      <v-btn
        rounded
        color="teal_lighten_2"
        dark
        style="text-transform: none"
        width="100px"
        @click="buyProduct(product_info)"
      >
        Mua
      </v-btn>

      <v-btn color="black" text style="text-transform: none; margin-left: 20px" to="/products/sku/GIFT05">
        xem chi tiết
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import VProductMiniCard from "./VProductMiniCard.vue";
export default {
  name: 'VProductCard',
  data() {
    return {
      sheet: false,
      loader: null,
      loading: false,
      products: [],
    };
  },
  props: {
    product_info: Object,
  },
  created() {
    // console.log(sessionStorage.getItem("cart"));
    // if (sessionStorage.getItem('cart') !== null)
    //   this.createProductCart(JSON.parse(sessionStorage.getItem('cart')));
    // this.getProductsFromCartServer();
    // this.getProducts();
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  methods: {
    buyProduct: function (product) {
      // console.log('ok', ' ', product);
      this.addProduct(product);
    },
    async getProducts() {
      try {
        const response = await this.$http.get('Carts');
        this.products = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions({
      addProduct: 'cart/addProduct',
      createProductCart: 'cart/createProductCart',
      getProductsFromCartServer: 'cart/getProductsFromCartServer'
    }),
  },
  computed: {
    ...mapGetters({
      getProductCart: 'cart/getProductCart',
    }),
    toMoney: function () {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(this.product_info.price);
    },
    urlDetailProduct: function () {
      return '/products/sku/' + this.product_info.sku;
    },
  },
  // components: { VProductMiniCard },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Open+Sans:ital,wght@1,300&family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Roboto+Mono:wght@100;400&family=Tapestry&display=swap');
</style>

<style lang = "scss" scoped>
.font,
h1,
.item-name {
  font-family: 'Roboto Mono', monospace;
  font-size: 25px;
}
.price {
  font-size: 20px;
}
</style>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
