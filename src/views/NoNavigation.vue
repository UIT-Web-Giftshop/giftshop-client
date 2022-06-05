<template>
  <v-app>
    <v-main>
      <VHeader />
      <div class="main-content-wrapper">
        <v-scroll-x-transition hide-on-leave>
          <router-view />
        </v-scroll-x-transition>
      </div>
    </v-main>
    <app-notification />
  </v-app>
</template>

<script>
import AppNotification from '../components/common/notification';
import VHeader from '../components/common/VHeader.vue';
export default {
  name: 'DefaulView',
  components: {
    VHeader,
    AppNotification,
  },
};
</script>

<style>
</style>