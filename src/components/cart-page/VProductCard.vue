<template>
  <!-- <v-card class="mx-auto" outlined> -->
  <v-row>
    <v-col :cols="4">
      <div style="height: 100%; display: flex; justify-content: space-between">
        <v-list-item-avatar tile size="60" color="grey">
          <v-img
            :src="product_info.image"
          ></v-img>
        </v-list-item-avatar>
        <div style="width: 100%; height: 100%; margin: auto">
          <div class="text-subtitle-1 font-weight-bold"> {{ product_info.title }} </div>
          <div>Product code: {{product_info.id}} </div>
        </div>
      </div>
    </v-col>

    <v-col :cols="8">
      <div
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <div class="text-subtitle-1 font-weight-black">
        {{toMoney(product_info.price, 1)}}
        </div>
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
            @change="changeNumberSelect(product_info.id)"
          ></v-select>
        </div>
        <div>
          <v-btn text style="text-transform: none">
            <v-icon left> mdi-close</v-icon>
            Remove
          </v-btn>
        </div>
        <div class="text-subtitle-1 font-weight-black"> {{toMoney(product_info.price, product_info.number)}} </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      select: this.product_info.number
    }
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
  },
  props: {
    product_info: Object,
    // select: Number
  },
  methods: {
    toMoney (price, number){
      return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price*number);
    },
    changeNumberSelect: function (id){  
      // console.log(this.select);
      this.changeNumberOfProduct({
        id: id,
        number: this.select
      });
    },
     ...mapActions({
    changeNumberOfProduct: "cart/changeNumberOfProduct"
  })
  },
 
};
</script>