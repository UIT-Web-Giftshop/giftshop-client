<template>
  <!-- <v-card class="mx-auto" outlined> -->
  <v-row>
    <v-col :cols="6">
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
          <v-btn color="teal_lighten_2" rounded style="text-transform: none; margin-right: 20px">
            <!-- <v-icon left> mdi-close</v-icon> -->
            Add to bag
          </v-btn>
          <v-btn text style="text-transform: none">
            <v-icon left> mdi-close</v-icon>
            Remove
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      select: this.product_info.number
    }
  },
  computed: {
  },
  props: {
    product_info: Object,
  },
  methods: {
   
  },
 
};
</script>