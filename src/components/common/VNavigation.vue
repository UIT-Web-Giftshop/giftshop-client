<template>
  <div class="background">
    <div>
      <div id="dropin-container"></div>
      <label>Select your plan</label>
      <select v-model="selectedPlan" name="plan" class="form-control">
        <option v-for="plan in plans" :key="plan.value" :value="plan.value">
          {{ plan.name }}
        </option>
      </select>
      <button @click="submitPayment">Submit payment</button>
      {{ payload }}
    </div>
    <div id="dropin-container"></div>
    <label>Select your plan</label>
    <select v-model="selectedPlan" name="plan" class="form-control">
      <option v-for="plan in plans" :key="plan.value" :value="plan.value">
        {{ plan.name }}
      </option>
    </select>
    <button @click="submitPayment">Submit payment</button>
    {{ payload }}
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
import dropin from 'braintree-web-drop-in';
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
        {
          categoryId: 5,
          title: 'Sinh nhật',

          trait: '?trait=Sinh nhật',
        },
      ],

      paymentInstance: null,
      payload: null,
      selectedPlan: 'startup',
      //plans should be received from server which should query braintree plans
      plans: [
        {
          value: 'corporate',
          name: 'Corporate Plan ( $100.00 / month )',
        },
        {
          value: 'startup',
          name: 'Startup Plan ( $25.00 / month )',
        },
      ],
    };
  },

  mounted() {
    // authorization header should be received from server! Replace it.
    dropin.create(
      {
        authorization:
          'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJhNmZiNDhlZDcyYmE1MDZlNDVkOWUzZDU0OWFiN2JiNDVjZDVlYmFjMDRjMTk2ZWRlNTgzZDhiZGM3OWI0NjYyfGNyZWF0ZWRfYXQ9MjAxOC0wMi0xM1QwODoyNDo1Ni4yMDE2NTk4NjcrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWZmZHFjOWZ5ZmZuN3luMmpcdTAwMjZwdWJsaWNfa2V5PXFqNjVubmRibm42cXlqa3AiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZmZkcWM5ZnlmZm43eW4yai9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbImN2diJdLCJlbnZpcm9ubWVudCI6InNhbmRib3giLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZmZkcWM5ZnlmZm43eW4yai9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20vZmZkcWM5ZnlmZm43eW4yaiJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjp0cnVlLCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJDb21tZXJjZSBGYWN0b3J5IiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSIsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJicmFpbnRyZWVDbGllbnRJZCI6Im1hc3RlcmNsaWVudDMiLCJiaWxsaW5nQWdyZWVtZW50c0VuYWJsZWQiOnRydWUsIm1lcmNoYW50QWNjb3VudElkIjoiN2R5aGQ5OGtnMnRrd3F0ZCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJtZXJjaGFudElkIjoiZmZkcWM5ZnlmZm43eW4yaiIsInZlbm1vIjoib2ZmIn0=',
        container: '#dropin-container',
      },
      (createErr, instance) => {
        this.paymentInstance = instance;
      }
    );
  },
  // created() {
  //   this.getCategories();
  // },

  methods: {
    redirectPage() {
      this.submitPayment();
      // if (category.trait)
      //   this.$router.push({
      //     path: `/trang-chu/danh-muc-san-pham${category.trait}`,
      //     replace: true,
      //   });
      // else {
      //   this.$router.push('/trang-chu');
      // }
    },

    submitPayment() {
      // check if instance is set
      this.paymentInstance.requestPaymentMethod(
        (requestPaymentMethodErr, payload) => {
          this.payload = payload;
          // Submit payload to your server and process the payment there
          // send the selected plan to the server as well
        }
      );
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