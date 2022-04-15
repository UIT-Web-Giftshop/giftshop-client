<template>
  <v-app>
    <VHeader></VHeader>
    <ProductPage></ProductPage>
  </v-app>
</template>

<script>
import VHeader from './components/common/VHeader';
import ProductPage from './components/product-detail/ProductPage';

export default {
  name: 'App',
  components: {
    VHeader,
    ProductPage
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
