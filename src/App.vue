<template>
  <v-app>
    <VHeader></VHeader>
  </v-app>
</template>

<script>
import VHeader from './components/common/VHeader';
export default {
  name: 'App',
  components: {
    VHeader,
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
