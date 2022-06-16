<template>
  <v-card class="mx-auto" style="width: 90%; margin-bottom: 12px" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-2 font-weight-bold item-name">
          Just Arrived
        </div>
        <div class="title">
          {{ product_info.name }}
        </div>
        <template>
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin-top: 4px;
            "
          >
            <v-list-item-subtitle>
              Giá: {{ toMoney(product_info.price, 1) }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              SL: {{ product_info.quantity }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Tổng: {{ toMoney(product_info.price, product_info.quantity) }}
            </v-list-item-subtitle>
          </div>
        </template>
      </v-list-item-content>

      <v-list-item-avatar tile size="32" color="grey">
        <v-img :src="product_info.imageUrl"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'VProductMiniCard',
  props: {
    product_info: Object,
  },
  methods: {
    toMoney(price, number) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(price * number);
    },
  },
};
</script>