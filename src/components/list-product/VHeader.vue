<template>
  <div>
    <h1 id="header">Just Arrived</h1>
    <p>
      Look what's just arrived here at Rex London! Share the thrill of receiving
      beautiful, on-trend and unique gifts by spontaneously giving these fresh
      and affordable treats to your friends and family.
    </p>
    <div style="display: flex; flex: content; justify-content: space-between">
      <p>Showing <b>120</b> of <b>128</b> Products</p>

      <div class="text-center">
        <v-bottom-sheet v-model="sheet" inset width="fit-content">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              rounded
              color="grey_lighten_3"
              class="black--text"
              dark
              style="text-transform: none"
              v-bind="attrs"
              v-on="on"
            >
              Sort/Filter
            </v-btn>
          </template>
          <v-sheet class="text-center" height="500px" width="500px">
            <v-btn class="mt-6" text color="error" @click="sheet = !sheet">
              close
            </v-btn>
            <div class="my-3" style="padding: 10px">
              <template>
                <div style="text-align: left">
                  <h4>Refine</h4>
                  <v-select
                    :items="items"
                    label="Solo field"
                    dense
                    solo
                  ></v-select>
                </div>
              </template>
              <template>
                <div style="text-align: left">
                  <h4>Design</h4>
                  <v-select
                    :items="items"
                    label="Solo field"
                    dense
                    solo
                  ></v-select>
                </div>
              </template>
              <template>
                <div style="text-align: left">
                  <h4>Sort by</h4>
                  <v-select
                    :items="items"
                    label="Solo field"
                    dense
                    solo
                  ></v-select>
                </div>
              </template>
              <template>
                <div class="text-center">
                  <v-btn
                    rounded
                    color="teal_lighten_2"
                    style="text-transform: none; font-size: 18px"
                    width="200px"
                    dark
                  >
                    Apply
                  </v-btn>
                </div>
              </template>
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data: () => ({
    sheet: false,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap");
</style>

<style lang = "scss" scoped>
#header {
  font-family: "Pacifico", cursive;
  font-size: 70px;
  font-weight: 200;
}
</style>