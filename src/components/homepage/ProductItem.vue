<template>
  <v-card width="300px">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-img
          class="white--text align-end"
          height="260"
          :src="product.imageUrl"
        >
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358">
              <v-btn
                color="white"
                class="black--text"
                :to="`/products/sku/${product.sku}`"
                >xem chi tiết</v-btn
              >
            </v-overlay>
          </v-fade-transition>
        </v-img>
      </template>
    </v-hover>
  </v-card>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style>
</style>