<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-2 font-weight-bold item-name">
          Just Arrived
        </div>
        <v-list-item-title class="mb-1" style="font-size: 20px">
          Áo mưa Violet
        </v-list-item-title>
        <template>
          <div style="display: flex; justify-content: space-around">
            <v-list-item-subtitle> £4.95 </v-list-item-subtitle>
            <v-list-item-subtitle> SL: 1 </v-list-item-subtitle>
            <v-list-item-subtitle> £4.95 </v-list-item-subtitle>
          </div>
        </template>
      </v-list-item-content>

      <v-list-item-avatar tile size="70" color="grey">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <!-- <v-card-actions>
                          <v-btn outlined rounded text> Button </v-btn>
                        </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  name: "VProductMiniCard",

};
</script>