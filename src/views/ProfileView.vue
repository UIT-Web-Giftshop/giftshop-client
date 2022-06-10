<template>
  <div class="background">
    <div class="wrapper pt-10">
      <v-row>
        <v-col cols="4">
          <div class="d-flex mb-4">
            <v-avatar size="54">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <div class="flex-grow-1 ml-3 my-auto">
              <div
                class="
                  text-h6
                  font-weight-medium
                  blue-grey--text
                  text--darken-3
                "
              >
                {{ profile.lastName }}
              </div>
              <div
                class="
                  blue--text
                  text--lighten-1 text-caption
                  font-weight-medium
                "
              >
                0345123123
              </div>
            </div>
          </div>
          <v-divider class="my-3"></v-divider>

          <v-btn
            height="52"
            class="btn"
            large
            depressed
            block
            @click="redirectPage(page.info)"
            :outlined="tabInfo"
            :color="tabInfo ? `primary` : `rgba(248, 250, 252)`"
          >
            <v-icon color="#6ad9e2" left size="28">
              mdi-account-circle-outline
            </v-icon>

            <div
              class="
                ml-1
                blue-grey--text
                text--darken-1 text-subtile-1
                font-weight-bold
              "
            >
              Thông tin tài khoản
            </div>
            <v-spacer></v-spacer>
            <v-icon right size="24"> mdi-chevron-right</v-icon>
          </v-btn>

          <v-btn
            class="btn mt-1"
            height="52"
            large
            depressed
            block
            @click="redirectPage(page.address)"
            :outlined="tabAddress"
            :color="tabAddress ? `primary` : `rgba(248, 250, 252)`"
          >
            <v-icon color="blue darken-1" left size="28"
              >mdi-map-marker-outline
            </v-icon>

            <div
              class="
                ml-1
                blue-grey--text
                text--darken-1 text-subtile-1
                font-weight-bold
              "
            >
              Thông tin liên hệ
            </div>
            <v-spacer></v-spacer>
            <v-icon right size="24"> mdi-chevron-right</v-icon>
          </v-btn>

          <v-btn
            class="btn mt-1"
            height="52"
            large
            depressed
            block
            @click="redirectPage(page.order)"
            :outlined="tabOrder"
            :color="tabOrder ? `primary` : `rgba(248, 250, 252)`"
          >
            <v-icon color="blue darken-1 " left size="28">
              mdi-cart-outline
            </v-icon>

            <div
              class="
                ml-1
                blue-grey--text
                text--darken-1 text-subtile-1
                font-weight-bold
              "
            >
              Lịch sử mua hàng
            </div>
            <v-spacer></v-spacer>
            <v-icon right size="24"> mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8">
          <v-card class="rounded-lg pa-6 pb-10" v-show="tabInfo">
            <div class="text-h5 mb-6 font-weight-medium">
              Thông tin tài khoản
            </div>
            <v-row>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Họ và tên
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6">
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Số điện thoại
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6">
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Email
                </div>
                <v-text-field
                  disabled
                  height="48"
                  outlined
                  dense
                  v-model="user.email"
                ></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6">
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Ngày sinh
                </div>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  transition="scale-transition"
                  :close-on-content-click="false"
                  min-width="auto"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      readonly
                      outlined
                      height="48"
                      dense
                      append-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    />
                  </template>
                  <v-date-picker no-title scrollable>
                    <v-spacer />
                    <v-btn text color="primary" @click="menu = false">
                      Huỷ
                    </v-btn>
                    <v-btn text color="primary"> Lưu </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col class="py-0" cols="6">
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Giới tính
                </div>
                <v-radio-group v-model="radioGroup" row>
                  <v-radio label="Nam" value="male"></v-radio>
                  <v-radio label="Nữ" value="female"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>

            <div class="text-h6 mb-6 mt-3 font-weight-bold">Đổi mật khẩu</div>
            <v-row>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Mật khẩu hiện tại
                </div>
                <v-text-field
                  height="48"
                  outlined
                  dense
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPass = !showPass"
                  :type="showPass ? 'text' : 'password'"
                  :rules="passwordRules"
                >
                </v-text-field>
              </v-col>
              <v-col class="py-0" cols="6">
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Mật khẩu mới
                </div>
                <v-text-field
                  height="48"
                  outlined
                  dense
                  :append-icon="showNewPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showNewPass = !showNewPass"
                  :type="showNewPass ? 'text' : 'password'"
                  :rules="passwordRules"
                ></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6">
                <v-btn
                  block
                  depressed
                  height="48"
                  class="rounded-lg"
                  color="rgba(254, 52, 100)"
                >
                  <div class="text-body-1 font-weight-bold white--text">
                    Lưu thay đổi
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <v-card v-show="tabAddress" class="rounded-lg pa-6 pb-10">
            <div class="text-h5 mb-6 font-weight-medium">Thông tin liên hệ</div>
            <v-row>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Tên người nhận
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Số điện thoại
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
            </v-row>
            <div class="text-h6 mb-6 font-weight-bold">Địa chỉ</div>
            <v-row>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Tỉnh / Thành phố
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Quận / Huyện
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Phường / Xã
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6" dense>
                <div
                  class="text-caption font-weight-bold blue-grey--text darken-2"
                >
                  Địa chỉ nhận hàng
                </div>
                <v-text-field height="48" outlined dense></v-text-field>
              </v-col>
              <v-col class="py-0" cols="6">
                <v-btn
                  block
                  depressed
                  height="48"
                  class="rounded-lg"
                  color="rgba(254, 52, 100)"
                >
                  <div class="text-body-1 font-weight-bold white--text">
                    Lưu thay đổi
                  </div>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card v-show="tabOrder" class="rounded-lg pa-6 pb-10">
            <div class="text-h5 mb-6 font-weight-medium">Lịch sử mua hàng</div>
            <OrderTable></OrderTable>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderTable from '../components/profile/OrderTable.vue';
export default {
  components: {
    OrderTable,
  },

  data() {
    return {
      page: {
        info: 'thong-tin-tai-khoan',
        address: 'thong-tin-lien-he',
        order: 'lich-su-mua-hang',
      },
      url: '',
      user: '',
      tabInfo: false,
      tabAddress: false,
      tabOrder: false,
      tabs: null,
      menu: false,
      showNewPass: false,
      showPass: false,
      passwordRules: [
        (value) => !!value || 'Mật khẩu không được để trống.',
        (value) =>
          (value && value.length >= 6) || 'Mật khẩu phải có ít nhất 6 ký tự',
      ],
    };
  },

  created() {
    this.url = this.$route.params.url;
    this.user = this.profile;
  },

  watch: {
    $route(value) {
      this.url = value.params.url;
    },

    url(value) {
      this.tabInfo = false;
      this.tabAddress = false;
      this.tabOrder = false;
      switch (value) {
        case this.page.info:
          this.tabInfo = true;
          break;
        case this.page.address:
          this.tabAddress = true;
          break;
        case this.page.order:
          this.tabOrder = true;
          break;
        default:
          break;
      }
    },
  },

  computed: {
    ...mapGetters('auth', ['profile']),
  },

  methods: {
    redirectPage(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style lang ="scss" scoped>
.btn {
  margin-bottom: 12px;
  border-radius: 12px;
  text-transform: unset !important;
}

.wrapper {
  padding: 0 10%;
  background-color: rgba(248, 250, 252);
  height: 100vh;
}
</style>