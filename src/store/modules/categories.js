import axios from 'axios';

const categoriesModule = {
  state: {
     categories: [],
  },
  getters: {
    categories: state => state.categories
  },
  actions: {
    async getCategories() {
      const response = await axios.get('/api/categories')
      console.log(response.data)
      this.categories = response.data;
    }
  },

};

export default categoriesModule