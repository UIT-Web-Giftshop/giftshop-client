<template>
  <!-- <v-card class="mx-auto" outlined> -->
  <v-row>
    <v-col xl="4">
      <div style="height: 100%; display: flex; justify-content: space-between">
        <v-list-item-avatar tile size="60" color="grey">
          <v-img :src="product_info.imageUrl"></v-img>
        </v-list-item-avatar>
        <div class="my-auto">
          <div class="text-subtitle-1 font-weight-bold">
            {{ product_info.name }}
          </div>
          <div>Mã sản phẩm: {{ product_info.sku }}</div>
        </div>
      </div>
    </v-col>

    <v-col>
      <!-- <div
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      > -->
      <div
        class="text-subtitle-1 font-weight-black"
        style="
          width: 100%;
          height: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        {{ toMoney(product_info.price, 1) }}
      </div>

      <div v-if="notify"></div>
      <!-- </div> -->
    </v-col>
    <v-col style="display: flex; align-items: center; justify-content: center">
      <div style="margin-top: 20px">
        <v-select
          rounded
          elevation="2"
          x-small
          style="width: 120px"
          v-model="select"
          :items="items"
          return-object
          solo
          @change="changeNumberSelect(product_info.sku)"
        ></v-select>
      </div>
    </v-col>
    <v-col>
      <div
        style="
          width: 100%;
          height: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <v-btn
          text
          style="text-transform: none"
          @click="removeProduct(product_info)"
        >
          <v-icon left> mdi-close</v-icon>
          Remove
        </v-btn>
      </div>
    </v-col>
    <v-col>
      <div
        class="text-subtitle-1 font-weight-black"
        style="
          width: 100%;
          height: 100%;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        {{ toMoney(product_info.price, product_info.quantity) }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
// import notify from '@/plugins/notify';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import $notify from '../../plugins/notify';
export default {
  data() {
    return {
      oldSelect: this.product_info.quantity,
      select: this.product_info.quantity,
    };
  },
  computed: {
    items: () => {
      // eslint-disable-next-line no-empty
      let arr = [];
      for (let i = 1; i < 5000; i++) {
        arr.push(i);
      }
      return arr;
    },
    notify: function () {
      if (this.getSkuResponse === this.product_info.sku) {
        console.log('info-2: ', this.product_info, ', res', this.getResponse);
        if (this.getResponse == true) {
          console.log(this.getResponse);
          $notify.success(this.getMessage);
          this.setOldSelect(this.select);
        } else if (this.getResponse == false) {
          console.log(this.getSkuResponse, ' ^^ ', this.product_info.sku);
          console.log(this.getSkuResponse);
          $notify.warning(this.getMessage);
          this.setSelect(this.oldSelect);
        }
        this.setResponse(null);
      }

      return this.getResponse;
    },
    ...mapGetters({
      getResponse: 'cart/getResponse',
      getMessage: 'cart/getMessage',
      getSkuResponse: 'cart/getSkuResponse',
    }),
  },
  props: {
    product_info: Object,
    // select: Number
  },
  methods: {
    setSelect(select) {
      this.select = select;
    },
    setOldSelect(select) {
      this.oldSelect = select;
    },
    toMoney(price, number) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(price * number);
    },
    removeProduct: function (product) {
      console.log(product);
      this.changeNumberOfProduct({
        sku: product.sku,
        quantity: 0,
      });
    },
    changeNumberSelect: function (sku) {
      console.log('info: ', this.product_info);
      this.changeNumberOfProduct({
        sku: sku,
        quantity: this.select,
      });
    },
    ...mapActions({
      changeNumberOfProduct: 'cart/changeNumberOfProduct',
      getProductsFromCartServer: 'cart/getProductsFromCartServer',
    }),
    ...mapMutations({
      setResponse: 'cart/setResponse',
    }),
  },
};
</script>