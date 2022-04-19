<template>
  <v-app>
    <v-main>
      <VHeader />
      <VNavigation />
      <div class="main-content-wrapper">
        <v-scroll-x-transition hide-on-leave>
          <router-view />
        </v-scroll-x-transition>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import VHeader from '../components/common/VHeader.vue';
import VNavigation from '../components/common/VNavigation.vue';
export default {
  name: 'DefaulView',
  components: {
    VHeader,
    VNavigation,
  },
};
</script>

<style>
</style>