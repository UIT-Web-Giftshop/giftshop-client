<template>
  <div>
    <Banner></Banner>
    <div style="width: 60%" class="mx-auto my-8">
      <div class="text-h4 text-center font-weight-medium mb-8">
        Sản phẩm mới về
      </div>
      <v-row>
        <v-col
          align="center"
          lg="3"
          xl="3"
          md="3"
          sm="6"
          v-for="product in products"
          :key="product.sku"
        >
          <ProductItem :product="product"></ProductItem>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6"> <v-img :src="banners[0]"> </v-img></v-col>
        <v-col cols="6"><v-img :src="banners[1]"> </v-img></v-col>
      </v-row>
    </div>
  </div>
</template>


<script>
import Banner from '../components/Banner.vue';
import ProductItem from '../components/homepage/ProductItem.vue';

export default {
  name: 'HomeView',

  data() {
    return {
      products: [],
      banners: [
        'https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/banner_a1.jpg?1638096620754',
        'https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/banner_a2.jpg?1638096620754',
      ],
    };
  },

  components: {
    Banner,
    ProductItem,
  },

  created() {
    this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        const response = await this.$http.get('/products', {
          PageIndex: 1,
          PageSize: 16,
          SortBy: 'date',
        });
        this.products = response.data.items;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<style lang = "scss" scoped>
</style>
