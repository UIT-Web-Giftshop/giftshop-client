<template>
  <div>
    <v-dialog v-model="showDialog" persistent max-width="800px">
      <v-card class="d-flex overflow-y-hidden" v-if="isLogin">
        <div class="content">
          <div class="d-flex align-center">
            <v-card-title class="text-h5">Login</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title class="title text-h6">Giftshop Hi!</v-card-title>
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
                label="Password"
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
            <v-btn
              bottom
              width="100%"
              height="48px"
              class="mx-auto"
              color="#81ccb7"
              @click="handleLogin"
            >
              <div class="text">Login</div>
            </v-btn>
          </div>
          <v-divider class="my-8"></v-divider>
          <div class="mb-8 d-flex justify-center">
            <div class="text-bottom">New to giftshop?</div>
            <div class="ml-2">
              <a class="text-bottom--highlight" @click="changeType">Register</a>
            </div>
          </div>
        </div>
        <div class="check"></div>
      </v-card>
      <v-card class="d-flex overflow-y-hidden" v-else>
        <div class="content">
          <div class="d-flex align-center">
            <v-card-title class="text-h5">Register</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title class="title text-h6">Giftshop Hi!</v-card-title>
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
                label="Password"
                v-model="user.password"
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPass = !showPass"
                :type="showPass ? 'text' : 'password'"
                :rules="passwordRules"
                outlined
              ></v-text-field>
              <v-text-field
                label="Confirm Password"
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
              bottom
              width="100%"
              height="48px"
              class="mx-auto"
              color="#81ccb7"
            >
              <div class="text">Register</div>
            </v-btn>
          </div>
          <v-divider class="my-8"></v-divider>
          <div class="mb-8 d-flex justify-center">
            <div class="text-bottom">Already have account?</div>
            <div class="ml-2">
              <a class="text-bottom--highlight" @click="changeType">Login</a>
            </div>
          </div>
        </div>
        <div class="check"></div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',

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
      showConfirmPassword: false,
      showPass: false,
      isLogin: true,
      showDialog: false,
      user: {},
      errorMessages: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || 'E-mail must be valid',
      ],

      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) =>
          (value && value.length >= 6) ||
          'Password must be at least 6 characters',
      ],

      confirmPasswordRules: [
        (value) => !!value || 'Please type confirm password',
        (value) =>
          value === this.user.password ||
          'The password confirmation does not match.',
      ],
    };
  },

  methods: {
    ...mapActions('auth', ['login']),

    close() {
      if (this.isLogin) this.$refs.formLogin.resetValidation();
      else this.$refs.formRegister.resetValidation();
      this.user = {};
      this.isLogin = true;
      this.errorMessages = '';
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
      if (this.user.email && this.user.password) {
        const isSuccess = await this.login(this.user);
        if (isSuccess) {
          this.close();
        } else
          this.errorMessages = 'The email or password you entered is incorrect';
      }
    },

    async handleRegister() {
      if (!this.$refs.formRegister.validate()) {
        return;
      }
      if (this.user.email && this.user.password && this.user.confirmPassword) {
        console.log('ok');
        const isSuccess = await this.register(this.user);
        if (isSuccess) {
          this.changeType();
        } else this.errorMessages = 'Oops, Something went wrong!';
      }
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