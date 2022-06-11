<template>
  <div style="padding-bottom: 200px">
      <v-card
        elevation="10"
        loading
        loader-height="3px"
        shaped
        style="
          margin: 20px 0px 0px 0px;
          width: fit-content;
          height: ;
          position: absolute;
          right: 3%;
        "
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Bill</div>
            <v-list-item-subtitle>
              <v-row>
                <v-col> Subtotal </v-col>
                <v-col> {{computeTotalBill}} </v-col>
              </v-row>
            </v-list-item-subtitle>
            <v-list-item-title
              class="text-h6 font-weight-bold"
              style="margin-top: 20px"
            >
              <v-row>
                <v-col> TOTAL </v-col>
                <v-col> {{computeTotalBill}} </v-col>
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
          <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
        </v-list-item>

        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn rounded text style="text-transform: none" to="danh-muc-san-pham"> Continue shopping </v-btn>
            </v-col>
            <v-col>
              <v-btn
                rounded
                color="teal_lighten_2"
                dark
                class="font-weight-bold"
                style="text-transform: none"
                width="100%">
                Checkout
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script>
import { mapGetters  } from 'vuex'
export default {
  computed: {
    ...mapGetters ({
      computeTotalBill: "cart/computeTotalBill"
    })
  }
}
</script>