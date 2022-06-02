<template>
  <div style="margin-top: 60px">
    <VProductCard />
  </div>
</template>

<script>
import VProductCard from "./VProductCard.vue";

export default {
  data: () => {
    return {};
  },
  mounted() {
    // this.$set(this.loading, 'loading', true);
  },
  components: { VProductCard },
};
</script>