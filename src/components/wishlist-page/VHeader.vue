<template>
  <div>
    <h1 id="header">Wish List</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "VHeader",
  components: {

  },
  data() {
    return {
      sheet: false,
      drawer: null,
      items_s: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getProductCart: "cart/getProductCart",
      countProductCart: "cart/countProductCart"
    }),
  },
  methods: {
    ...mapActions({}),
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap");
</style>

<style lang = "scss" scoped>
#header {
  // font-family: "Pacifico", cursive;
  font-size: 30px;
  font-weight: 600;
}
</style>