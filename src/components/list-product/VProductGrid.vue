<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(card, index) in cards" :key="index">
        <VProductCard></VProductCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VProductCard from "./VProductCard.vue";

export default {
  name: "VProductGrid",
  components: {
    VProductCard,
  },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://www.rexlondon.com/sites/default/files/styles/product_teaser/public/2022-02/29621_1-baby-first-book-numbers.png?itok=Qn4V6M6f",
        flex: 12,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap");
</style>

<style lang = "scss" scoped>
#header {
  font-family: "Pacifico", cursive;
  font-size: 70px;
}
</style>