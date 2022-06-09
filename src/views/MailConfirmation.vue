<template>
  <v-container
    class="d-flex align-center justify-center overflow-y-hidden"
    style="height: 60vh"
  >
    <v-card class="rounded-lg pa-6 pb-10">
      <div class="d-flex flex-column align-center">
        <v-icon size="64" color="green">mdi-check-circle-outline</v-icon>
        <div class="text-h6 my-4">Địa chỉ email của bạn đã được xác nhận</div>
        <v-btn
          depressed
          height="48"
          class="rounded-lg px-8"
          color="rgba(254, 52, 100)"
          to="/trang-chu"
        >
          <div class="text-body-1 font-weight-bold white--text">
            Về trang chủ
          </div>
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      confirmPassword: '',
      isLoading: false,
      showConfirmPassword: false,
      showPass: false,
    };
  },
};
</script>

<style>
</style>  