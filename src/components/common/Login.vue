<template>
  <div>
    <v-dialog v-model="showDialog" persistent max-width="800px">
      <v-card class="d-flex overflow-y-hidden" v-if="isLogin">
        <div class="content">
          <div class="d-flex align-center">
            <v-card-title class="text-h5">Đăng nhập</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title class="title text-h6"
            >Gift Store xin chào!</v-card-title
          >
          <div class="px-4">
            <v-form ref="formLogin" lazy-validation>
              <v-text-field
                validate-on-blur
                label="Email"
                ref="email"
                v-model="user.email"
                :rules="emailRules"
                outlined
              ></v-text-field>
              <v-text-field
                validate-on-blur
                label="Mật khẩu"
                hide-details
                v-model="user.password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                :type="showPass ? 'text' : 'password'"
                :error-messages="errorMessages"
                :rules="passwordRules"
                outlined
              ></v-text-field>
            </v-form>
          </div>
          <div class="px-4">
            <div class="my-2 d-flex justify-end">
              <a
                class="text-subtitle-2 teal--text teal-lighten-4"
                @click="showForgotPassword"
                >Quên mật khẩu?</a
              >
            </div>
            <v-btn
              :loading="isLoading"
              bottom
              width="100%"
              height="48px"
              class="mx-auto"
              color="#81ccb7"
              @click="handleLogin"
            >
              <div class="text">Đăng nhập</div>
            </v-btn>
          </div>
          <v-divider class="my-4"></v-divider>

          <div class="mb-8 d-flex justify-center">
            <div class="text-bottom">Bạn chưa có tài khoản ?</div>
            <div class="ml-2">
              <a class="text-bottom--highlight" @click="changeType">Đăng ký</a>
            </div>
          </div>
        </div>
        <div class="check"></div>
      </v-card>
      <v-card class="d-flex overflow-y-hidden" v-else>
        <div class="content">
          <div class="d-flex align-center">
            <v-card-title class="text-h5">Đăng ký</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title class="title text-h6"
            >Gift Store xin chào!</v-card-title
          >
          <div class="px-4">
            <v-form ref="formRegister" lazy-validation>
              <v-text-field
                validate-on-blur
                label="Email"
                ref="email"
                v-model="user.email"
                :rules="emailRules"
                outlined
              ></v-text-field>
              <v-text-field
                validate-on-blur
                label="Mật khẩu"
                v-model="user.password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                :type="showPass ? 'text' : 'password'"
                :rules="passwordRules"
                outlined
              ></v-text-field>
              <v-text-field
                label="Nhập lại mật khẩu"
                validate-on-blur
                v-model="user.confirmPassword"
                :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showConfirmPassword = !showConfirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                :rules="confirmPasswordRules"
                outlined
              ></v-text-field>
            </v-form>
          </div>
          <div class="px-4">
            <v-btn
              :loading="isLoading"
              bottom
              width="100%"
              height="48px"
              class="mx-auto"
              color="#81ccb7"
              @click="handleRegister"
            >
              <div class="text">Đăng ký</div>
            </v-btn>
          </div>
          <v-divider class="my-8"></v-divider>
          <div class="mb-8 d-flex justify-center">
            <div class="text-bottom">Bạn đã có tài khoản rồi ?</div>
            <div class="ml-2">
              <a class="text-bottom--highlight" @click="changeType"
                >Đăng nhập</a
              >
            </div>
          </div>
        </div>
        <div class="check"></div>
      </v-card>
    </v-dialog>
    <SendMail
      :isShowSendMail="isShowSendMail"
      @closeSendMail="closeSendMail"
      @changeType="showLogin"
    ></SendMail>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SendMail from '../SendMail.vue';
export default {
  name: 'Login',

  components: {
    SendMail,
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    show(isShow) {
      this.showDialog = isShow;
    },
  },

  computed: {},

  data() {
    return {
      isLoading: false,
      showConfirmPassword: false,
      showPass: false,
      isLogin: true,
      showDialog: false,
      user: {},
      isShowSendMail: false,
      errorMessages: '',
      emailRules: [
        (v) => !!v || 'E-mail không được để trống',
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || 'E-mail có định dạng không đúng',
      ],

      passwordRules: [
        (value) => !!value || 'Mật khẩu không được để trống.',
        (value) =>
          (value && value.length >= 6) ||
          'Password must be at least 6 characters',
      ],

      confirmPasswordRules: [
        (value) => !!value || 'Nhập lại mật khẩu không đƯợc để trống',
        (value) => value === this.user.password || 'Mật khẩu không trùng nhau',
      ],
    };
  },

  methods: {
    ...mapActions('auth', ['login', 'register']),

    close() {
      if (this.isLogin) this.$refs.formLogin.resetValidation();
      else this.$refs.formRegister.resetValidation();
      this.user = {};
      this.isLogin = true;
      this.isLoading = false;
      this.errorMessages = '';
      this.isShowSendMail = false;
      this.$emit('closeLogin');
    },

    changeType() {
      if (this.isLogin) {
        this.user = {};
        this.$refs.formLogin.resetValidation();
        this.isLogin = false;
      } else {
        this.user = {};
        this.$refs.formRegister.resetValidation();
        this.isLogin = true;
      }
    },

    async handleLogin() {
      if (!this.$refs.formLogin.validate()) {
        return;
      }
      this.isLoading = true;
      if (this.user.email && this.user.password) {
        const response = await this.login(this.user);
        if (response.success) {
          this.$notify.success('Đăng nhập thành công');
          this.close();
        } else this.$notify.error('Email hoặc mật khẩu bạn nhập không đúng');
      }
      this.isLoading = false;
    },

    async handleRegister() {
      if (!this.$refs.formRegister.validate()) {
        return;
      }

      this.isLoading = true;
      if (this.user.email && this.user.password && this.user.confirmPassword) {
        const response = await this.register(this.user);
        if (response.success) {
          this.$notify.success('Đăng ký thành công');
          const data = {
            isShow: true,
            email: this.user.email,
          };
          this.$emit('showConfirmMail', data);
          this.close();
        } else this.errorMessages = 'Đăng ký không thành công';
      }
      this.isLoading = false;
    },

    showForgotPassword() {
      this.isShowSendMail = true;
      this.showDialog = false;
    },

    closeSendMail() {
      this.close();
    },

    showLogin() {
      this.showDialog = true;
    },
  },
};
</script>
<style lang ="scss" scoped>
.content {
  width: 50%;
}
.title {
  color: #81ccb7;
}

.text-bottom {
  color: black;
  opacity: 0.6;

  &--highlight {
    color: #81ccb7;
  }
}
.text {
  font-weight: bold;
  font-size: 16px;
  color: #fff;
}

.dialog-bottom {
  height: 100px;
}
.check {
  background-size: 100% 100%;
  width: 50%;
  background-image: url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm422-047-x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=16ea540dabc12e86960a8b74ab282c3f');
}
</style>