<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <!-- 有時候資料裡的Category會是null，再去取name的話就會造成錯誤，所以要先判斷有沒有Category，有的話再呈現restaurant.Category.name，沒有的話就呈現未分類 -->
        <span class="badge badge-secondary">{{
          restaurant.Category ? restaurant.Category.name : "未分類"
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >
          移除最愛
        </button>
        <button
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
        >
          加到最愛
        </button>

        <button
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLike"
          type="button"
          class="btn btn-danger like mr-2"
        >
          Unlike
        </button>
        <button
          v-else
          @click.stop.prevent="addLike"
          type="button"
          class="btn btn-primary like mr-2"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    deleteFavorite(restaurantId) {
      this.restaurant = {
        // 先複製一份this.restaurant，把裡面的isFavorited設定成false,當使用者點擊移除最愛的按鈕進入此method，this.restaurant就會等於這份複製並修改過的this.restaurant，原本的this.restaurant不會有改變
        ...this.restaurant,
        isFavorited: false,
      };
    },

    addFavorite(restaurantId) {
      console.log(this.restaurant);
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true,
      };
      console.log(this.restaurant);
    },

    deleteLike() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false,
      };
    },

    addLike() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true,
      };
    },
  },
};
</script>