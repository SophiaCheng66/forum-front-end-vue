<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "../utility/helpers.js";
export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
        Comments: [],
      },
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchReataurant(id);
  },

  methods: {
    async fetchReataurant(restaurantId) {
      try {
        const response = await restaurantsAPI.getRestaurant({ restaurantId });

        console.log(response);
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        const { restaurant } = data;

        const { id, name, Category, Comments, viewCounts } = restaurant;
        this.restaurant = {
          ...this.restaurant,
          id: id,
          name: name,
          categoryName: Category ? Category.name : "未分類",
          commentsLength: Comments.length,
          viewCounts: viewCounts,
        };
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