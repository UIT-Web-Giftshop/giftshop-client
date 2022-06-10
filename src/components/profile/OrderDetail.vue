<template>
  <v-dialog v-model="showDialog" persistent max-width="1000">
    <v-card class="">
      <div class="d-flex align-center">
        <v-card-title class="text-h5">Chi tiết đơn hàng</v-card-title>
        <v-spacer></v-spacer>
        <div class="mr-2">
          <v-btn icon @click="$emit('closeOrderDetail')">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex justify-space-between">
        <div class="px-4">
          <div><strong>Mã đơn hàng: </strong> {{ order.id }}</div>
          <div><strong>Ngày tạo đơn: </strong> {{ order.createdAt }}</div>
          <div><strong>Trạng thái: </strong> {{ order.status }}</div>
          <div>
            <strong>Tổng tiền: </strong>
            {{ order.totalPrice.toLocaleString() }} đ
          </div>
          <div><strong>Giảm giá: </strong> {{ order.promotionPercent }}%</div>
          <div>
            <strong>Thanh toán: </strong
            >{{ order.totalPaid.toLocaleString() }} đ
          </div>
        </div>
        <v-btn
          :loading="isLoading"
          depressed
          height="36"
          class="mr-4"
          color="rgba(254, 52, 100)"
          @click="save"
        >
          <div class="text-body-2 font-weight-bold white--text">Huỷ đơn</div>
        </v-btn>
      </div>
      <div class="my-2">
        <v-data-table
          :headers="headers"
          :items="order.items"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:item.imageUrl="{ item }">
            <v-img class="ma-2" width="48" height="48" :src="item.imageUrl">
            </v-img>
          </template>
          <template v-slot:item.price="{ item }">
            <span>{{ item.price.toLocaleString() }} đ</span>
          </template>
          <template v-slot:item.total="{ item }">
            <span>{{ (item.price * item.quantity).toLocaleString() }} đ</span>
          </template>
        </v-data-table>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      showDialog: true,
      headers: [
        {
          text: '',
          align: 'start',
          sortable: false,
          value: 'imageUrl',
        },
        { text: 'Mã SKU', value: 'sku' },
        { text: 'Tên sản phẩm', value: 'name' },
        { text: 'Đơn giá', value: 'price' },
        { text: 'Số lượng', value: 'quantity' },
        { text: 'Thành tiền', value: 'total' },
      ],
    };
  },

  props: {
    order: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style>
</style>