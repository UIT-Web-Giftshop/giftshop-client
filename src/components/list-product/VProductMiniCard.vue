<template>
  <v-card class="mx-auto" style="width: 90%" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-2 font-weight-bold item-name">
          Just Arrived
        </div>
        <v-list-item-title class="mb-1" style="font-size: 20px">
          {{product.title}}
        </v-list-item-title>
        <template>
          <div style="display: flex; justify-content: space-around">
            <v-list-item-subtitle> Giá: {{ toMoney(product.price, 1) }}</v-list-item-subtitle>
            <v-list-item-subtitle> SL: {{ number }} </v-list-item-subtitle>
            <v-list-item-subtitle> Tổng: {{ toMoney(product.price, product.number) }} </v-list-item-subtitle>
          </div>
        </template>
      </v-list-item-content>

      <v-list-item-avatar tile size="70" color="grey">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

  </v-card>
</template>

<script>
export default {
  name: "VProductMiniCard",
  props: {
    typeProduct: String,
    number: Number,
    product: {
    }
  },
  methods: {
    toMoney (price, number){
      return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(price*number);
    }
  }
};
</script>