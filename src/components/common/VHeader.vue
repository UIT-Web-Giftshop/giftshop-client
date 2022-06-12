<template>
  <div class="header">
    <div class="header-top">
      <!-- Khuyến mãi bộ quà tặng khi đơn hàng lớn hơn 300k -->
    </div>
    <div class="header-content">
      <div class="header-left">
        <v-text-field
          @keydown.enter="searchProduct"
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          placeholder="Tìm kiếm"
        ></v-text-field>
      </div>

      <div class="header-middle">
        <a
          href="
        /trang-chu"
        >
          <v-img
            width="400"
            height="40"
            contains
            src="https://bizweb.dktcdn.net/100/357/842/themes/723819/assets/logo.png?1638096620754"
          ></v-img
        ></a>
      </div>
      <div class="header-right">
        <v-row justify="space-around">
          <v-btn icon to="/trang-chu/danh-muc-yeu-thich">
            <v-icon color="black"> mdi-heart-outline </v-icon>
          </v-btn>
          <v-menu
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

          <v-btn icon to="/trang-chu/danh-muc-mua-sam">
            <v-icon color="black">mdi-cart-outline</v-icon>
          </v-btn>
        </v-row>
      </div>
    </div>
    <Login
      :show="showLogin"
      @closeLogin="closeLogin"
      @showConfirmMail="showConfirmMail"
    ></Login>
    <ConfirmMail
      v-if="isShowConfirmMail"
      :email="email"
      @showConfirmMail="showConfirmMail"
    ></ConfirmMail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from './Login.vue';
import ModalAccount from '../ModalAccount.vue';
import ConfirmMail from '../ConfirmMail.vue';
export default {
  name: 'VHeader',
  components: {
    Login,
    ModalAccount,
    ConfirmMail,
  },

  computed: {
    ...mapGetters('auth', ['isAuthendicated']),
  },

  data() {
    return {
      showModal: false,
      showLogin: false,
      isShowConfirmMail: false,
      closeModal: false,
      closeOnContentClick: false,
      email: '',
      search: '',
    };
  },

  methods: {
    handleClickAccount() {
      if (!this.isAuthendicated) {
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

    showConfirmMail(data) {
      console.log(data);
      const { email, isShow } = data;
      this.isShowConfirmMail = isShow;
      this.email = email;
    },

    handleModalAccount() {
      this.closeOnContentClick = !this.closeOnContentClick;
    },

    searchProduct() {
      this.$router.push(`/trang-chu/tim-kiem?search=${this.search}`);
    },
  },
};
</script>

<style lang = "scss" scoped>
.header {
  &-top {
    background-color: #f4f4f4;
    height: 40px;

    line-height: 40px;
  }

  &-content {
    display: flex;
    height: 100px;
    justify-content: space-around;
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

  &-middle {
    width: 400px;
    height: 30px;
  }

  &-right {
    width: 150px;
  }
}
</style>