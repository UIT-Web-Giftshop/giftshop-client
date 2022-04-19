<template>
  <div>
    <div class="header-top">Free standard UK delivery for orders over £50</div>
    <div class="header-content">
      <div class="header-left">
        <v-icon color="black">mdi-magnify</v-icon>
        Search
      </div>

      <div class="header-middle">
        <img src="" alt="" />
      </div>
      <div class="header-right">
        <v-row justify="space-around">
          <v-icon color="black"> mdi-heart-outline </v-icon>
          <v-icon color="black">mdi-account-outline</v-icon>
          <v-icon color="black">mdi-cart-outline</v-icon>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VHeader',
};
</script>

<style lang = "scss" scoped>
.header {
  &-top {
    background-color: #f4f4f4;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  &-content {
    display: flex;
    height: 125px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    /* background-color: red; */
  }

  &-left {
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  &-right {
    width: 150px;
  }
}
</style>