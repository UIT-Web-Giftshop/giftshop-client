<template>
  <div class="background">
    <v-tabs class="categories" v-model="model" centered color="#000">
      <v-tab
        v-for="category in categories"
        :key="category.id"
        @click="redirectPage(category)"
        class="text-body-1 font-weight-medium"
      >
        {{ category.title }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'VNavigation',
  data() {
    return {
      model: '',
      categories: [
        { categoryId: 0, title: 'Trang chủ', link: 'trang-chu' },
        {
          categoryId: 1,
          title: 'Gia đình',

          trait: '?trait=Gia đình',
        },
        {
          categoryId: 2,
          title: 'Bạn bè',

          trait: '?trait=Bạn bè',
        },
        {
          categoryId: 3,
          title: 'Lưu niệm',

          trait: '?trait=Lưu niệm',
        },
        {
          categoryId: 4,
          title: 'Tình yêu',

          trait: '?trait=Tình yêu',
        },
      ],
    };
  },
  // created() {
  //   this.getCategories();
  // },

  methods: {
    redirectPage(category) {
      if (category.trait)
        this.$router.push({
          path: `/trang-chu/danh-muc-san-pham${category.trait}`,
          replace: true,
        });
      else {
        this.$router.push('/trang-chu');
      }
    },
    // async getCategories() {
    //   const response = await axios.get('http://localhost:5000/categories');
    //   console.log(response.data);
    //   this.categories = response.data;
    // },
  },
};
</script>

<style lang="scss" scoped>
// .categories {
// &::v-deep .v-slide-group__content {
//   background-color: rgb(238, 237, 237) !important;
// }
// }
</style>