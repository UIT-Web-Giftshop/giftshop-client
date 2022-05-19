<template>
  <div class="header">
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
          <v-menu
            :close-on-click="closeModal"
            :close-on-content-click="closeOnContentClick"
            offset-y
            nudge-bottom="6px"
            nudge-left="3px"
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon @click="handleClickAccount">
                <v-icon color="black">mdi-account-outline</v-icon>
              </v-btn>
            </template>
            <ModalAccount
              v-if="showModal"
              @close="handleModalAccount"
            ></ModalAccount>
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
import ModalAccount from '../ModalAccount.vue';
export default {
  name: 'VHeader',
  components: {
    Login,
    ModalAccount,
  },

  computed: {
    ...mapState('auth', ['status']),
  },

  data() {
    return {
      showModal: false,
      showLogin: false,
      closeModal: false,
      closeOnContentClick: false,
    };
  },

  methods: {
    handleClickAccount() {
      console.log(this.status.loggedIn);
      if (!this.status.loggedIn) {
        this.showLogin = true;
        this.showModal = false;
      } else {
        this.showLogin = false;
        this.showModal = true;
        this.handleModalAccount();
      }
    },

    closeLogin() {
      this.showLogin = false;
    },

    handleModalAccount() {
      this.closeOnContentClick = !this.closeOnContentClick;
    },
  },
};
</script>

<style lang = "scss" scoped>
.header {
  &-top {
    background-color: #f4f4f4;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  &-content {
    display: flex;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    /* border-bottom: 1px solid #cccc; */
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