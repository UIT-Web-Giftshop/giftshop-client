<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width: 100%; margin: 20px auto; height: 300px">
    <!-- Using the slider component -->
    <slider ref="slider" :options="options">
      <!-- slideritem wrapped package with the components you need -->
      <slideritem
        v-for="(item, index) in someList"
        :key="index"
        :style="item.style"
        >{{ item.html }}</slideritem
      >
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";
import { mapActions } from 'vuex';
export default {
  name: "VConslider",
  data() {
    return {
      //data list [array]
      someList: [
        {
          html: "slide1",
          style: {
            background: "#7caabe",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slide2",
          style: {
            background: "#7caabe",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
        {
          html: "slide3",
          style: {
            background: "#7caabe",
            width: "23.5%",
            "margin-right": "2%",
          },
        },
      ],
      //Slider configuration [obj]
      options: {
        currentPage: 0,
        infinite: 1,
        slidesToScroll: 1,
        loop: true,
        loopedSlides: 4
      },
    };
  },
  methods: {
    ...mapActions({
      
    })
  },
  components: {
    slider,
    slideritem,
  },
};
</script>