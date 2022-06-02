<template>
  <!-- <v-card class="mx-auto" outlined> -->
    <v-list-item>
      <v-list-item-content style="padding: 0px">
        <v-container fluid>
          <v-row v-for="index in 5" :key="index" style="border-bottom: 1px solid grey">
            <v-col :cols="4">
              <div
                style="
                  height: 100%;
                  display: flex;
                  justify-content: space-between;
                "
              >
                <v-list-item-avatar tile size="60" color="grey">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                  ></v-img>
                </v-list-item-avatar>
                <div style="width: 100%; height: 100%; margin: auto">
                  <div class="text-h6 font-weight-bold">Áo len</div>
                  <div>Product code: 29561</div>
                </div>
              </div>
            </v-col>

            <v-col :cols="8">
              <div
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <div class="text-subtitle-1 font-weight-black">£9.95</div>
                <div style="margin-top: 20px">
                  <v-select
                    rounded
                    elevation="2"
                    x-small
                    style="width: 120px"
                    :items="items"
                    :value="items[0]"
                    solo
                  ></v-select>
                </div>
                <div>
                  <v-btn text style="text-transform: none">
                    <v-icon left> mdi-close</v-icon>
                    Remove
                  </v-btn>
                </div>
                <div class="text-subtitle-1 font-weight-black">£9.95</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-list-item-content>
    </v-list-item>
  <!-- </v-card> -->
</template>

<script>
export default {
  data: () => ({
    items: ["1", "2", "3000"],
  }),
};
</script>