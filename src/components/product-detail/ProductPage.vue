<template>
  <v-layout v-if="product" column>
    <v-layout row wrap ma-12>
      <v-flex xs12 md5 class="pa-2">
        <v-layout column>
          <v-img height="350" max-width="450" :src="product.imageUrl"></v-img>
        </v-layout>
      </v-flex>

      <v-flex xs12 md7 class="pa-2">
        <v-layout column>
          <div class="text-h2 font-weight-bold">
            {{ product.name }}
          </div>
          <div class="text-h4 font-weight-bold py-4">
            {{ toMoney(product.price, 1) }}
          </div>
          <div
            :class="[
              'text-h6',
              'font-weight-bold',
              `${product.stock > 0 ? 'green' : 'red'}--text`,
            ]"
          >
            {{
              product.stock > 0
                ? `Còn ${product.stock} sản phẩm`
                : `Hết Sản phẩm`
            }}
          </div>
          <!-- <div
                        row
                        v-if="isReadMore"
                        @click="isReadMore = !isReadMore"
                        class="text-h6 font-weight-light"
                    >
                        {{ readMoreHandler(product.description, 20)
                        }}<a
                            v-if="
                                product.description !=
                                readMoreHandler(product.description, 20)
                            "
                            class="text-h6 green--text mx-2"
                            >Read more</a
                        >
                    </div> -->
          <!-- <div
                        v-if="!isReadMore"
                        @click="isReadMore = !isReadMore"
                        class="text-h6 font-weight-light"
                        v-html="product.description"
                    >
                        <div v-html="product.description">abc</div>
                        <a class="text-h6 green--text mx-2">Close</a>
                    </div> -->
          <v-layout row wrap my-4>
            <v-flex xs4 md4 align-self-center>
              <v-col class="d-flex">
                <v-btn
                  @click="addToCart()"
                  class="white--text font-weight-bold green"
                  width="100%"
                  depressed
                  large
                  rounded
                  height="60"
                  :disabled="isDisabledBag"
                  >Thêm vào giỏ hàng</v-btn
                >
              </v-col>
            </v-flex>
            <v-flex xs7 md4 align-self-center>
              <v-col class="d-flex">
                <v-btn
                  class="white--text font-weight-bold green"
                  width="100%"
                  depressed
                  large
                  rounded
                  height="60"
                  @click="favoriteHandler"
                  :disabled="isDisabledFav"
                  ><v-icon left>{{
                    user
                      ? user.isFavorite
                        ? 'mdi-cards-heart'
                        : 'mdi-cards-heart-outline'
                      : 'mdi-cards-heart-outline'
                  }}</v-icon
                  >Yêu thích</v-btn
                >
              </v-col>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout v-if="product" row wrap ma-6 ml-12 justify-space-between>
      <v-flex xs12 md7>
        <v-layout column>
          <div class="text-h4 font-weight-bold py-4">Mô tả sản phẩm</div>
          <div
            class="text-h7"
            v-html="product.description"
          ></div>
        </v-layout>
      </v-flex>

      <v-flex xs12 md4>
        <v-layout column v-if="product.detail">
          <div class="text-h4 font-weight-bold py-4">Thuộc tính</div>
          <div
            class="text-h6 font-weight-light py-1"
            v-for="(item, i) in createStructureForDetail(product.detail)"
            :key="i"
          >
            <span class="font-weight-bold">{{ item.keyName }}: </span
            >{{ item.value }}
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
    <!-- related -->
    <!-- <v-layout v-if="product" column ma-6>
            <div class="text-h4 font-weight-bold py-4">Related</div>

            <v-slide-group show-arrows>
                <v-slide-item
                    class="ma-4"
                    v-for="(src, i) in product.related"
                    :key="i"
                    v-slot="{ toggle }"
                >
                    <v-card
                        class="pa-4 green lighten-5"
                        width="220"
                        height="250"
                        @click="toggle"
                    >
                        <v-img
                            class="white--text"
                            height="120px"
                            :src="src"
                            width="100%"
                        >
                        </v-img>
                        <v-card-subtitle class="text-body-2 text-center">
                            {{ readMoreHandler(src.name, 5) }}
                        </v-card-subtitle>
                        <v-card-text
                            class="text-body-1 font-weight-bold text-center"
                        >
                            {{ src.price }} VNĐ
                        </v-card-text>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-layout> -->
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// const domain = 'https://16.163.241.13/api';
//function
const sliceFunction = function (data, numberOfWord) {
  if (!data) return data;
  var arraySplited = data.split(' ');
  var result;
  if (arraySplited.length > numberOfWord) {
    var arraySliced = arraySplited.slice(0, numberOfWord);
    result = arraySliced.join(' ');
    result += '...';
  } else {
    result = data;
  }
  return result;
};
const createSelectArray = function (quantity) {
  var result = [];
  for (var i = 0; i < quantity; i++) {
    result.push(i + 1);
  }
  return result;
};
const createStructureForDetail = function (detail) {
  var result = [];
  var objectKey = Object.keys(detail);

  for (var key of objectKey) {
    detail[key] &&
      result.push({
        keyName: uppercaseFirstLetter(key.split('_').join(' ')),
        value: uppercaseFirstLetter(detail[key]),
      });
  }
  return result;
};
const uppercaseFirstLetter = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
//
export default {
  name: 'ProductPage',
  components: {},
  data: () => ({
    carouselModel: 0,
    isReadMore: true,
    user: {},
    product: {},
    selected: 1,
    isDisabledBag: false,
    isDisabledFav: false,
  }),
  computed: {
    libRenderHTML: function (string) {
      var str = `<div><p>${string}</p></div>`;
      console.log('render html - ', str);
      return str;
    },
  },
  methods: {
    toMoney(price, number) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(price * number);
    },
    renderDescription(text) {
      return `<span> ${text} </span>`;
    },
    ...mapActions({
      getProductsFromCartServer: 'cart/getProductsFromCartServer',
      getProductsFromWishlistFromServer:
        'wishlist/getProductsFromWishlistFromServer',
    }),
    ...mapGetters({
      getProductCart: 'cart/getProductCart',
      getProductsWishlist: 'wishlist/getProductsWishlist',
    }),
    async addToCart() {
      const stateProducts = this.getProductCart();
      var isCollected = stateProducts.some(
        (item) => item.sku === this.product.sku
      );

      if (!isCollected) {
        const response = await this.$http.put('Carts/add', {
          sku: this.product.sku,
          quantity: 1,
        });

        if (response.success === true) {
          this.$notify.success('Thêm thành công');
        } else {
          if (response.status === 401) {
            this.$notify.warning('Bạn cần đăng nhập');
          } else if (response.status === 400) {
            this.$notify.warning('Đã hết hàng');
          }
        }
      } else {
        this.isDisabledBag = true;
      }
    },
    async addWishList() {
      const result = await this.$http.post(`Wishlists`, {
        sku: this.product.sku,
      });
      if (result.success === true) {
        this.$notify.success('Thêm thành công');

        this.isDisabledFav = true;
      } else {
        if (result.status === 401) {
          this.$notify.warning('Bạn cần đăng nhập');
        }
      }
    },
    readMoreHandler(data, numberOfWord) {
      return sliceFunction(data, numberOfWord);
    },
    favoriteHandler() {
      this.addWishList();
    },
    addToCartClickHandler() {},
    createSelectArray,
    createStructureForDetail,
    async getProduct() {
      try {
        const responseProduct = await this.$http.get(
          `/products/sku/${this.$route.params.sku}`
        );
        this.product = responseProduct.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.user = {
      isFavorite: false,
    };
    this.getProduct();
    this.getProductsFromWishlistFromServer();
  },
  props: {},
};
</script>

<style scoped></style>
