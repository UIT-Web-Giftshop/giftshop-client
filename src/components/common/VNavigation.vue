<template>
  <v-tabs v-model="model" centered>
    <v-tab
      v-for="category in categories"
      :key="category.id"
      :to="`/${category.title}`"
    >
      {{ category.title }}
    </v-tab>
  </v-tabs>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VNavigation',
  data() {
    return {
      model: '',
      categories: [],
    };
  },

  created() {
    this.getCategories();
  },

  methods: {
    async getCategories() {
      const response = await axios.get('api/categories');
      console.log(response.data);
      this.categories = response.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-tab {
  font-weight: 600;
}
</style>