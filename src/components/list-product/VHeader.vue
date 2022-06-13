<template>
  <div>
    <!-- <v-sheet height="400" class="overflow-hidden" style="position: relative"> -->
    <!-- <v-container class="fill-height"> -->
    <!-- <v-row align="center" justify="center"> -->

    <v-btn color="pink" fixed dark fab right top @click.stop="drawer = !drawer">
      <v-badge
        :content="countProductCart"
        :value="countProductCart"
        color="black"
        overlap
      >
        <v-icon dark>mdi-cart-outline</v-icon>
      </v-badge>
    </v-btn>
    <!-- </v-row> -->
    <!-- </v-container> -->

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      right
      width="400px"
      style="scrollbar-width: none"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://tinyurl.com/26drtexw"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Giỏ hàng</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-btn
            text
            class="grey_darken_1--text"
            style="text-transform: none; font-size: 15px"
            width="150px"
            dark
            @click="drawer = !drawer"
          >
            Đóng
          </v-btn>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense over>
        <v-row v-for="(product, index) in getProductCart" :key="index">
          <VProductMiniCard :product_info="product"></VProductMiniCard>
        </v-row>
      </v-list>

      <v-list
        style="display: flex; justify-content: space-around"
        v-if="getProductCart != 0"
      >
        <v-btn
          text
          class="grey_darken_1--text"
          style="text-transform: none; font-size: 15px"
          width="150px"
          dark
          to="/trang-chu/danh-muc-mua-sam"
        >
          Thay đổi giỏ hàng
        </v-btn>
        <v-btn
          rounded
          color="teal_lighten_2"
          style="text-transform: none; font-size: 15px"
          width="150px"
          dark
          @click="$router.push(`/dat-hang`)"
        >
          Đặt hàng
        </v-btn>
      </v-list>
    </v-navigation-drawer>
    <!-- </v-sheet> -->
    <h1 id="header">{{ header }}</h1>
    <p>
      The Gift shop là một trang bán hàng lưu niệm uy tín. Sản phảm của chúng
      tôi được nhập khẩu từ trong và ngoài nước và có giấy kiểm định an toàn về
      chất liệu, nguồn gốc xuất sứ rõ ràng.
    </p>
    <div style="display: flex; flex: content; justify-content: space-between">
      <p style="visibility: hidden">
        Showing <b>120</b> of <b>128</b> Products
      </p>
      <div class="text-center">
        <v-dialog v-model="sheet" inset width="400px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              rounded
              color="grey_lighten_3"
              class="black--text"
              dark
              style="text-transform: none"
              v-bind="attrs"
              v-on="on"
            >
              Sắp xếp
            </v-btn>
          </template>
          <v-sheet class="text-center" height="250px" width="400px" outlined>
            <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
              Đóng
            </v-btn>
            <div class="my-3" style="padding: 10px">
              <template>
                <div style="text-align: left">
                  <h4>Sắp xếp theo</h4>
                  <v-select
                    v-model="sort"
                    :items="items_sort"
                    label="Solo field"
                    dense
                    solo
                  ></v-select>
                </div>
              </template>
              <template>
                <div class="text-center">
                  <v-btn
                    rounded
                    color="teal_lighten_2"
                    style="text-transform: none; font-size: 18px"
                    width="200px"
                    dark
                    @click="sortFiler"
                  >
                    Áp dụng
                  </v-btn>
                </div>
              </template>
            </div>
          </v-sheet>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import VProductMiniCard from './VProductMiniCard.vue';
// import VProgress from './VProgress.vue';
export default {
  name: 'VHeader',
  components: {
    VProductMiniCard,
    // VProgress
  },
  created() {
    this.getProductsFromCartServer();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log('"', urlParams.get('trait'), '"');
    if (urlParams.get('trait') != null && urlParams.get('trait') !== '') {
      this.setItemFilter(urlParams.get('trait'));
      this.header = urlParams.get('trait');
    } else {
      this.header = 'Sản phẩm';
      this.setItemFilter('');
    }
    if (urlParams.get('search') != null && urlParams.get('search') !== '')
      this.setSearch(urlParams.get('search'));
    else this.setSearch('');
  },
  data() {
    return {
      sheet: false,
      items_filter: ['Tất cả', 'Sinh nhật', 'Gia đình', 'Lưu niệm'],
      items_sort: ['Giá tăng dần', 'Giá giảm dần', 'Tên sản phẩm'],
      drawer: null,
      items_s: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
      sort: 'Giá giảm dần',
      filter: 'Tất cả',
      header: '',
      urlParams: '',
    };
  },
  watch: {
    $route(value) {
      console.log('xx', value);
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      if (urlParams.get('trait') != null && urlParams.get('trait') !== '') {
        this.setItemFilter(urlParams.get('trait'));
        this.header = urlParams.get('trait');
      } else {
        this.header = 'Sản phẩm';
        this.setItemFilter('');
      }
      if (urlParams.get('search') != null && urlParams.get('search') !== '')
        this.setSearch(urlParams.get('search'));
      else this.setSearch('');
      this.getProductsFromServer();
    },
  },
  computed: {
    ...mapGetters({
      getProductCart: 'cart/getProductCart',
      countProductCart: 'cart/countProductCart',
    }),
  },
  methods: {
    ...mapActions({
      getProductsFromCartServer: 'cart/getProductsFromCartServer',
      getProductsFromServer: 'list_products/getProductsFromServer',
    }),
    ...mapMutations({
      setItemFilter: 'list_products/setItemFilter',
      setItemSort: 'list_products/setItemSort',
      setIsDesc: 'list_products/setIsDesc',
      setSearch: 'list_products/setSearch',
    }),
    sortFiler() {
      this.sheet = !this.sheet;
      switch (this.sort) {
        case 'Giá tăng dần':
          this.setItemSort('price');
          this.setIsDesc('false');
          break;
        case 'Giá giảm dần':
          this.setItemSort('price');
          this.setIsDesc('true');
          break;
        case 'Tên sản phẩm':
          this.setItemSort('name');
          this.setIsDesc('false');
          break;
        default:
          break;
      }
      // switch (this.filter) {
      //   case "Tất cả":
      //     this.setItemFilter("");
      //     break;
      //   case "Sinh nhật":
      //     this.setItemFilter("/trait/birthday");
      //     break;
      //   case "Gia đình":
      //     this.setItemFilter("/trait/family");
      //     break;
      //   case "Lưu niệm":
      //     this.setItemFilter("/trait/memory");
      //     break;
      //   default:
      //     break;
      // }
      this.getProductsFromServer();
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
</style>

<style lang = "scss" scoped>
#header {
  // font-family: "Pacifico", cursive;
  font-size: 70px;
  font-weight: 700;
}
</style>