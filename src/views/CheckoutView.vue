<template>
  <v-layout justify-center>
    <v-flex md8 xs10>
      <v-layout column>
        <v-layout column ma-0 ml-2 mb-2 mt-8
          ><span class="text-h6 text-uppercase">Danh sách sản phẩm</span>
          <v-layout
            v-for="(product, idx) in getProductCart"
            :key="idx"
            row
            wrap
            my-4
            ml-8
            mr-0
            justify-space-between
            align-center
          >
            <v-flex md3 sm4 xs3>
              <v-layout column no-gutters>
                <v-img
                  height="160"
                  max-width="160"
                  min-width="160"
                  :src="product.imageUrl"
                />
              </v-layout>
            </v-flex>

            <v-flex md2 xs4 sm3 align-self-center>
              <v-layout justify-space-between align-center max-width="150">
                <div class="font-weight-bold d-inline" px-4>
                  {{ product.quantity }}
                </div>
              </v-layout>
            </v-flex>

            <v-flex md6 xs12 sm12 column>
              <v-layout justify-start my-1 wrap
                ><p width="100%" class="text-h6 text-capitalize">
                  {{ sliceFunction(product.name, 10) }}
                </p></v-layout
              >
              <v-layout my-1 justify-space-between align-center
                ><span>SKU</span><span>{{ product.sku }}</span></v-layout
              >
              <v-layout my-1 justify-space-between align-center
                ><span>Giá</span
                ><span>{{ toMoney(product.price, 1) }}</span></v-layout
              >
              <v-layout my-1 justify-space-between align-center
                ><span class="font-weight-bold">Tổng</span
                ><span>{{ toMoney(product.price, product.quantity) }}</span>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-divider />
        <v-layout column ma-0 ml-2 my-4
          ><span class="text-h6 text-uppercase">Thông tin vận chuyển</span>
          <v-layout column my-4 ml-8 mr-0>
            <!-- <v-layout my-1 justify-space-between align-center>
                            <v-text-field
                                label="Tên"
                                :rules="rules"
                                hint="Minh Thắng"
                            >
                            </v-text-field>
                        </v-layout> -->
            <v-layout wrap my-1 justify-space-between align-center>
              <v-flex md5 sm5 xs5>
                <v-select
                  :items="provincesAPI"
                  label="Tỉnh/Thành phố"
                  v-model="currentProvince"
                  :item-text="'name'"
                  return-object
                  hide-details
                ></v-select>
              </v-flex>
              <v-flex md5 sm5 xs5>
                <v-select
                  label="Huyện/Quận"
                  :items="districtsAPI"
                  v-model="currentDistrict"
                  :item-text="'name'"
                  return-object
                  hide-details
                ></v-select>
              </v-flex>
              <v-flex md5 sm5 xs5>
                <v-select
                  label="Xã/Phường"
                  :items="wardsAPI"
                  v-model="currentWard"
                  :item-text="'name'"
                  return-object
                  hide-details
                ></v-select>
              </v-flex>
              <v-flex md5 sm5 xs5>
                <v-text-field
                  label="Số nhà, đường"
                  :rules="rules"
                  hint="72, đường Thác Bà"
                  v-model="currentStreet"
                >
                </v-text-field>
              </v-flex>
              <!-- <v-flex md5 sm5 xs5>
                                <v-text-field
                                    label="Số điện thoại liên lạc"
                                    hint="0123456789"
                                    :rules="rules"
                                >
                                </v-text-field>
                            </v-flex> -->
              <v-flex md5 sm5 xs5>
                <v-text-field
                  label="Mã giảm giá"
                  :rules="couponRule"
                  v-model="currentCoupon"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
            <!-- <v-layout my-1 justify-space-between align-start>
                            <v-textarea label="Ghi chú" auto-grow></v-textarea>
                        </v-layout> -->
          </v-layout>
        </v-layout>
        <v-divider />
        <v-layout mt-4 ml-2>
          <v-row no-gutters wrap align="center" justify="space-between">
            <v-col md="4" sm="12"
              ><v-layout justify-space-between align-center
                ><span class="text-h5 font-weight-bold">Tổng tiền</span
                ><span class="text-h5 font-weight-bold">{{
                  computeTotalBill
                }}</span></v-layout
              ></v-col
            >
            <v-col md="2" sm="5"
              ><v-btn @click="handleConfirm" width="100%" class="info"
                >Xác nhận</v-btn
              ></v-col
            >
          </v-row>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import { $http } from '../plugins/http-wrapper';
import $notify from '../plugins/notify';
import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    chooseItem: [],
    rules: [
      (value) => !!value || 'Trường yêu cầu.',
      (value) => (value && value.length >= 3) || 'Ít nhất 3 ký tự',
    ],
    couponRule: [
      async () => {
        // if (value  && value !== "") {
        //     const result = await $http.get("/coupons/info/" + value);
        //     console.log(result);
        //     if (result.status === 200) {
        //       this.currentCoupon = value
        //       this.isValidCoupon = true
        //         return "";
        //     } else {
        //       $notify.warning("Mã giảm giá không hợp lệ")
        //       this.currentCoupon = ""
        //       this.currentCoupon = value
        //       this.isValidCoupon = false
        //         return "Mã không hợp lệ";
        //     }
        // }
        console.log('di');
      },
    ],
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    provincesAPI: null,
    districtsAPI: null,
    wardsAPI: null,
    currentProvince: null,
    currentDistrict: null,
    currentWard: null,
    currentStreet: '',
    currentCoupon: '',
    isValidCoupon: false,
  }),
  computed: {
    ...mapGetters({
      getProductCart: 'cart/getProductCart',
      computeTotalBill: 'cart/computeTotalBill',
    }),
    getFullAddress: function () {
      return `${this.currentStreet}, ${this.currentWard.name}, ${this.currentDistrict.name}, ${this.currentProvince.name}`;
    },
  },
  methods: {
    ...mapActions({
      getProductsFromCartServer: 'cart/getProductsFromCartServer',
    }),
    toMoney(price, number) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(price * number);
    },
    sliceFunction: function (data, numberOfWord) {
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
    },
    getProvince: async function () {
      try {
        const response = await axios.get(
          `https://provinces.open-api.vn/api/?depth=3`
        );
        this.provincesAPI = response.data;
      } catch (e) {
        console.log(e);
      }
    },
    handleConfirm: async function () {
      if (this.currentCoupon !== '') {
        const result = await $http.get('/coupons/info/' + this.currentCoupon);
        console.log(result);
        if (result.status === 200) {
          this.isValidCoupon = true;
        } else {
          $notify.warning('Mã giảm giá không hợp lệ');
          this.currentCoupon = '';
          this.isValidCoupon = false;
          return;
        }
      }
      if (
        this.currentStreet &&
        this.currentWard &&
        this.currentDistrict &&
        this.currentProvince
      ) {
        const payload = this.isValidCoupon
          ? {
              couponCode: this.currentCoupon,
              address: this.getFullAddress,
            }
          : { couponCode: '', address: this.getFullAddress };
        console.log(payload);
        const result = await $http.post('/orders', payload);
        console.log(result);
        if (result.status === 200) {
          $notify.success('Đặt hàng thành công');
          this.$router.push('/');
        } else {
          $notify.warning('Lỗi');
        }
      }
    },
  },
  watch: {
    currentProvince(newCurrentProvince) {
      console.log(this.currentProvince);
      this.districtsAPI = newCurrentProvince.districts;
    },
    currentDistrict(newCurrentDistrict) {
      this.wardsAPI = newCurrentDistrict.wards;
    },
  },
  created() {
    this.getProvince();
    this.getProductsFromCartServer();
  },
};
</script>

<style scoped></style>
