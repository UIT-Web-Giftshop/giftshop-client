<template>
  <component :is="layout"> </component>
</template>

<script>
const default_layout = 'default';
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),

  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
}
</style>
