<template>
  <div class="my-6">
    <v-carousel
      height="500"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      :show-arrows="false"
      cycle
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div class="d-flex justify-center my-6">
      <div class="pa-6">
        <v-img
          class="img-policy"
          src="https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/policy2.png?1638096620754"
        ></v-img>
        <div class="text-h5 text-center font-weight-medium mt-4 mb-1">
          Sản phẩm chính hãng
        </div>
        <div
          class="text-subtitle-1 text-center grey--text g"
          style="max-width: 250px"
        >
          Nói không với sản phẩm không có thương hiệu
        </div>
      </div>

      <div class="img-divider pa-6 mx-10">
        <v-img
          class="img-policy"
          src="https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/policy1.png?1638096620754"
        ></v-img>
        <div class="text-h5 text-center font-weight-medium mt-4 mb-1">
          Thiết kế đẹp mắt
        </div>
        <div class="text-subtitle-1 text-center">Tối giản tinh tế</div>
      </div>

      <div class="pa-6">
        <v-img
          class="img-policy"
          src="https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/policy3.png?1638096620754"
        ></v-img>
        <div class="text-h5 text-center font-weight-medium mt-4 mb-1">
          Dịch vụ 5 sao
        </div>
        <div class="text-subtitle-1 text-center" style="max-width: 300px">
          Không để khách hàng chịu thiệt thòi. Hoàn tiền 100% nếu có than phiền
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Banner',
  data() {
    return {
      items: [
        {
          src: 'https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/slider_1.png?1638096620754',
        },
        {
          src: 'https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/slider_2.png?1638096620754',
        },
        {
          src: 'https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/slider_3.png?1638096620754',
        },
      ],
    };
  },
};
</script>


<style lang = "scss" scoped>
.img-policy {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
}

.img-divider {
  min-width: 300px;
  border-left: 1px dashed #ccc;
  border-right: 1px dashed #ccc;
}
</style>
