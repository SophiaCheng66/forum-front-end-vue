<template>
  <div>
    <Spinner v-if="isLoading" />
    <template v-else>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Name</th>
            <th scope="col" width="300">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <th scope="row">
              {{ restaurant.id }}
            </th>
            <td>
              {{ restaurant.Category ? restaurant.Category.name : "未分類" }}
            </td>
            <td>{{ restaurant.name }}</td>
            <td class="d-flex justify-content-between">
              <router-link
                :to="{
                  name: 'admin-restaurant',
                  params: { id: restaurant.id },
                }"
                class="btn btn-link"
                >Show</router-link
              >

              <router-link
                :to="{
                  name: 'admin-restaurantEdit',
                  params: { id: restaurant.id },
                }"
                class="btn btn-link"
                >Edit</router-link
              >

              <button
                @click.stop.prevent="deleteRestaurant(restaurant.id)"
                type="button"
                class="btn btn-link"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import adminAPI from "../apis/admin.js";
import { Toast } from "../utility/helpers.js";
import Spinner from "../components/Spinner";
export default {
  components: {
    Spinner,
  },
  // props: {
  //   isLoading1: {
  //     type: Boolean,
  //     default: true,
  //   },
  // },
  data() {
    return {
      restaurants: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        this.isLoading = true;
        const response = await adminAPI.restaurants.get();
        console.log(response);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;
        this.restaurants = data.restaurants;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法取得餐廳資料，請稍候再試!",
        });
      }
    },

    async deleteRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.delete({ restaurantId });

        // console.log(response);

        this.restaurants = this.restaurants.filter(
          (restaurant) => restaurant.id !== restaurantId
        );
        console.log(this.restaurants);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法取得餐廳資料，請稍候再試!",
        });
      }
    },
  },
};
</script>
