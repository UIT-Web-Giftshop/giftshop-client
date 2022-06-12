<template>
  <div class="text-center mt-5">
    <v-pagination
      v-model="pagination.page"
      :length="pagination.pages"
      @input="next"
    ></v-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'VPaging',
  data: () => {
    return {
      pagination: {
        page: 1,
        pages: 15,
      },
    };
  },
  created(){
    console.log(this.getTotalCount);
    this.pagination.pages = parseInt((this.getTotalCount / 2)) + 1;
    console.log(this.getPagesCount);
  },
  computed: {
     ...mapGetters({
      getTotalCount: 'list_products/getTotalCount',
      getPagesCount: 'list_products/getPagesCount'
    })
  },
  methods: {
    setPages: (number) => {
      this.pagination.pages = number;
    },
    setPage: (number) => {
      this.pagination.page = number;
    },
    async next(page) {
      console.log(page);
      // let connectString = '/api/Products?PageIndex=' + page + '&PageSize=20&SortBy=price&IsDesc=true';
      // let connectString = '/api/Products?PageIndex=2&PageSize=20&SortBy=price&IsDesc=true';
      // this.setConnectString(connectString);
      this.setPageIndex(page);
      this.getProductsFromServer();
    },
    ...mapActions({
      setConnectString: 'list_products/setConnectString',
      getProductsFromServer: 'list_products/getProductsFromServer'
    }),
    ...mapMutations({
      setPageIndex: 'list_products/setPageIndex'
    })
   
  },
};
</script>