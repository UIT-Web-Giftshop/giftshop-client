<template>
  <v-progress-linear
    :active="(this.getItemsCount == 0) ? true : false"
    :indeterminate="(this.getItemsCount == 0) ? true : false"
    fixed
    top
    height="2"
    color="red"
  ></v-progress-linear>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "VProgress",
  data() {
    return {

    }
  },
  computed: {
    loading: () => {
      return true;
    },
    ...mapGetters({
      getItemsCount: 'list_products/getItemsCount'
    })
  }
};
</script>