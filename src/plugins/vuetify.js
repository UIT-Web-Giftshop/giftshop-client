import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            teal_lighten_2: colors.teal.lighten2, // #3F51B5
            grey_lighten_3: colors.grey.lighten3, //#EEEEE
            grey_darken_1 : colors.grey.darken1 //#EEEEE
          },
        },
      },
});
