<template>
  <div>
    <div class="header-top">Free standard UK delivery for orders over £50</div>
    <div class="header-content">
      <div class="header-left">
        <v-icon color="black">mdi-magnify</v-icon>
        Search
      </div>

      <div class="header-middle">
        <img src="" alt="" />
      </div>
      <div class="header-right">
        <v-row justify="space-around">
          <v-btn icon>
            <v-icon color="black"> mdi-heart-outline </v-icon>
          </v-btn>
          <v-menu content-class="menu-account" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon color="black">mdi-account-outline</v-icon>
              </v-btn>
            </template>
            <v-card width="300px">
              <span>alibaba</span>
            </v-card>
          </v-menu>
          <!-- <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon>
                <v-icon color="black">mdi-account-outline</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-icon color="black" @click="handleClickAccount"
                >mdi-account-outline</v-icon
              >
              <v-icon color="black" @click="handleClickAccount"
                >mdi-account-outline</v-icon
              >
            </v-card>
          </v-tooltip> -->

          <v-btn icon>
            <v-icon color="black">mdi-cart-outline</v-icon>
          </v-btn>
        </v-row>
      </div>
    </div>
    <Login :show="showLogin" @closeLogin="closeLogin"></Login>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Login from './Login.vue';
export default {
  name: 'VHeader',
  components: {
    Login,
  },

  computed: {
    ...mapState('auth', ['status']),
  },

  data() {
    return {
      showLogin: false,
    };
  },

  methods: {
    handleClickAccount() {
      // if (!this.isLoggedIn)
      this.showLogin = true;
    },

    closeLogin() {
      this.showLogin = false;
    },
  },
};
</script>

<style lang = "scss" scoped>
.menu-account {
  margin-top: 10px;
  contain: initial;
  overflow: visible;
}
.menu-account::before {
  position: absolute;
  content: '';
  top: 0;
  right: 10px;
  transform: translateY(-100%);
  width: 10px;
  height: 13px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 13px solid #fff;
}

.header {
  &-top {
    background-color: #f4f4f4;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  &-content {
    display: flex;
    height: 125px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    /* background-color: red; */
  }

  &-left {
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  &-right {
    width: 150px;
  }
}
</style>