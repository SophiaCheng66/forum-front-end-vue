 
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants v-bind:restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments v-bind:comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue"; // "./../components/NavTabs.vue"
import NewestRestaurants from "../components/NewestRestaurants.vue"; //  "./../components/NewestRestaurants.vue"

import NewestComments from "../components/NewestComments.vue";
import RestaurantsFeedsAPI from "../apis/restaurantsFeeds.js";
import { Toast } from "../utility/helpers.js";

export default {
  name: "RestaurantsFeeds", //在vue dev裡沒取名字會先顯示anonymous
  components: {
    NavTabs: NavTabs,
    //使用到template上是用組件的名字，也就是第一個NavTabs，可以自己取名，但大多都會取跟內容一樣的名字
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },

  created() {
    this.fetchFeeds();
    // console.log(this.fetchFeeds());
  },

  methods: {
    async fetchFeeds() {
      try {
        const response = await RestaurantsFeedsAPI.getRestaurantsFeeds();
        console.log(response);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        const { restaurants, comments } = data;

        this.comments = comments;
        this.restaurants = restaurants;

        this.comments = comments.filter(
          //過濾出有餐廳名稱和留言評論的才保留
          (comment) => comment.Restaurant && comment.text
        );
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

