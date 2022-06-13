<template>
  <div
    style="padding-bottom: 200px"
    v-if="countProductCart <= 0 ? false : true"
  >
    <v-card
      elevation="10"
      loading
      loader-height="3px"
      shaped
      style="
        margin: 20px 0px 0px 0px;
        width: fit-content;
        height: ;
        position: absolute;
        right: 3%;
      "
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">Hoá đơn</div>
          <v-list-item-subtitle>
            <v-row>
              <v-col> Tổng tiền </v-col>
              <v-col> {{ computeTotalBill }} </v-col>
            </v-row>
          </v-list-item-subtitle>
          <v-list-item-title
            class="text-h6 font-weight-bold"
            style="margin-top: 20px"
          >
            <v-row>
              <v-col> Thanh toán </v-col>
              <v-col> {{ computeTotalBill }} </v-col>
            </v-row>
          </v-list-item-title>
        </v-list-item-content>
        <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
      </v-list-item>

      <v-card-actions>
        <v-row>
          <v-col>
            <v-btn
              rounded
              text
              style="text-transform: none"
              to="danh-muc-san-pham"
            >
              Tiếp tục mua sắm
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              @click="$router.push(`/dat-hang`)"
              rounded
              color="teal_lighten_2"
              dark
              class="font-weight-bold"
              style="text-transform: none"
              width="100%"
            >
              Đặt hàng
            </v-btn>
          </v-col>
          <v-col v-if="notify"> </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import $notify from '../../plugins/notify';
export default {
  computed: {
    notify: function () {
      if (this.getResponse == true) {
        console.log(this.getResponse);
        $notify.success(this.getMessage);
      } else if (this.getResponse == false) {
        $notify.warning(this.getMessage);
      }
      this.setResponse(null);
      return this.getResponse;
    },
    ...mapGetters({
      computeTotalBill: 'cart/computeTotalBill',
      getResponse: 'cart/getResponse',
      getMessage: 'cart/getMessage',
      countProductCart: 'cart/countProductCart',
    }),
  },
  methods: {
    ...mapMutations({
      setResponse: 'cart/setResponse',
    }),
  },
};
</script>