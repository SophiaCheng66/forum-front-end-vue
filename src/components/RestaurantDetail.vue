<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image | emptyImage"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        :to="{ name: 'restaurants-dashboard', params: { id: restaurant.id } }"
        class="btn btn-primary btn-border mr-2"
        >Dashboard</router-link
      >

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLike(restaurant.id)"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import userAPI from "../apis/user.js";
import { Toast } from "../utility/helpers.js";
import { emptyImageFilter } from "./../utility/mixins";
export default {
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },

  watch: {
    initialRestaurant(newValue) {
      // console.log(newValue, oldValue);
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
  },

  methods: {
    async deleteFavorite(restaurantId) {
      try {
        const response = await userAPI.deleteFavorite({ restaurantId });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除最愛，請稍後再試",
        });
      }
    },

    async addFavorite(restaurantId) {
      try {
        const response = await userAPI.addFavorite({ restaurantId });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入最愛，請稍後再試",
        });
      }
    },

    async deleteLike(restaurantId) {
      try {
        const response = await userAPI.deleteLike({ restaurantId });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除讚，請稍後再試",
        });
      }
    },

    async addLike(restaurantId) {
      try {
        const response = await userAPI.addLike({ restaurantId });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法點讚，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>