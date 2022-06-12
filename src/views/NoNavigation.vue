<template>
  <v-app>
    <v-main>
      <VHeader />
      <div class="main-content-wrapper">
        <v-scroll-x-transition hide-on-leave>
          <router-view />
        </v-scroll-x-transition>
      </div>
      <VFooter></VFooter>
    </v-main>
    <app-notification />
  </v-app>
</template>

<script>
import AppNotification from '../components/common/notification';
import VHeader from '../components/common/VHeader.vue';
import VFooter from '../components/common/VFooter.vue';
export default {
  name: 'DefaulView',
  components: {
    VHeader,
    VFooter,
    AppNotification,
  },
};
</script>

<style>
</style>