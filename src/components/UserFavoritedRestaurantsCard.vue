<template>
  <div class="card" style="width: 610px">
    <div class="card-header">
      <strong>{{ FavoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'restaurant', params: { id: FavoritedRestaurants.id } }"
      >
        <img
          v-for="FavoritedRestaurant in FavoritedRestaurants"
          :key="FavoritedRestaurant.id"
          :src="FavoritedRestaurant.image"
          width="60"
          height="60"
          class="avatar mr-1"
        />
      </router-link>
      <!-- <a href="/restaurants/11">
        <img
          src="https://loremflickr.com/320/240/restaurant,food/?random=35.25135222681837"
          width="60"
          height="60"
          class="avatar"
        />
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    FavoritedRestaurants: {
      type: Array,
      require: true,
    },
  },
};
</script>
       