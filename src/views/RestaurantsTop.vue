<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <Top10
      :initialRestaurant="restaurant"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    />
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";
import Top10 from "../components/Top10.vue";
import RestaurantsTopAPI from "../apis/restaurantsTop.js";
import { Toast } from "../utility/helpers.js";

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs: NavTabs,
    Top10,
    //使用到template上是用組件的名字，也就是第一個NavTabs，可以自己取名，但大多都會取跟內容一樣的名字
  },

  data() {
    return {
      restaurants: [],
    };
  },

  created() {
    this.fetchRestaurantsTop();
  },

  methods: {
    async fetchRestaurantsTop() {
      try {
        const response = await RestaurantsTopAPI.getRestaurantsTop();
        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        const { restaurants } = data;

        this.restaurants = restaurants;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>