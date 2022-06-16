<template>
  <!-- <v-card class="mx-auto" outlined> -->
  <v-row>
    <v-col :cols="6">
      <div style="height: 100%; display: flex; justify-content: space-between">
        <v-list-item-avatar tile size="60" color="grey">
          <v-img
            :src="product_info.imageUrl"
          ></v-img>
        </v-list-item-avatar>
        <div style="width: 100%; height: 100%; margin: auto">
          <div class="text-subtitle-1 font-weight-bold"> {{ product_info.name }} </div>
          <div>Product code: {{product_info.sku}} </div>
        </div>
      </div>
    </v-col>

    <v-col :cols="6">
      <div
        style="
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <div>
          <v-btn color="teal_lighten_2" rounded style="text-transform: none; margin-right: 20px" @click="addProduct(product_info)">
            <!-- <v-icon left> mdi-close</v-icon> -->
            Add to bag
          </v-btn>
          <v-btn text style="text-transform: none" @click="removeProduct(product_info)">
            <v-icon left> mdi-close</v-icon>
            Remove
          </v-btn>
        </div>
        <div v-if="notify"></div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import $notify from '../../plugins/notify';
export default {
  data() {
    return {
      select: this.product_info.number
    }
  },
  computed: {
    notify: function () {
      if (this.getResponse == true) {
        console.log(this.getResponse);
        $notify.success(this.getMessage);
        // this.setOldSelect(this.select);
      } else if (this.getResponse == false) {
        $notify.warning(this.getMessage);
        // this.setSelect(this.oldSelect);
      }
      this.setResponse(null);
      return this.getResponse;
    },
    ...mapGetters({
      getResponse: "cart/getResponse",
      getMessage: "cart/getMessage",
    }),
  },
  props: {
    product_info: Object,
  },
  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct',
      removeProduct: 'wishlist/removeProduct'
    }),
     ...mapMutations({
      setResponse: "cart/setResponse"
    })
  },
 
};
</script>