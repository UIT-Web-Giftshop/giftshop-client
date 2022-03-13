<template>
  <div>
    <div class="header__top">Free standard UK delivery for orders over £50</div>
    <div class="header__content">
      <div class="header__left">
        <v-icon color="black">mdi-magnify</v-icon>
        Search
      </div>
      <div class="header__middle">
        <img src="" alt="" />
      </div>
      <div class="header__right">
        <v-row justify="space-around">
          <v-icon color="black">mdi-heart-outline</v-icon>
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
  &__top {
    background-color: #f4f4f4;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  &__content {
    display: flex;
    height: 125px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    /* background-color: red; */
  }

  &__left {
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  &__right {
    width: 150px;
  }
}
</style>