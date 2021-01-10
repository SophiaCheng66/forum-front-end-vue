<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
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
          :disabled="isProcessing"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >
          移除最愛
        </button>
        <button
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          :disabled="isProcessing"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
        >
          加到最愛
        </button>

        <button
          v-if="restaurant.isLiked"
          :disabled="isProcessing"
          @click.stop.prevent="deleteLike(restaurant.id)"
          type="button"
          class="btn btn-danger like mr-2"
        >
          Unlike
        </button>
        <button
          v-else
          @click.stop.prevent="addLike(restaurant.id)"
          :disabled="isProcessing"
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
import { emptyImageFilter } from "./../utility/mixins";
import usersAPI from "../apis/user.js";
import { Toast } from "../utility/helpers.js";

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
      isProcessing: false,
    };
  },
  methods: {
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true;
        const response = await usersAPI.deleteFavorite({ restaurantId });

        const { data } = response;
        console.log(response);

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 先複製一份this.restaurant，把裡面的isFavorited設定成false,當使用者點擊移除最愛的按鈕進入此method，this.restaurant就會等於這份複製並修改過的this.restaurant，原本的this.restaurant不會有改變
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
      }
    },

    async addFavorite(restaurantId) {
      // console.log(this.restaurant);
      try {
        this.isProcessing = true;
        const response = await usersAPI.addFavorite({ restaurantId });
        const { data } = response;
        console.log(response);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
        console.log(this.restaurant);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
      }
    },

    async deleteLike(restaurantId) {
      try {
        this.isProcessing = true;
        const response = await usersAPI.deleteLike({ restaurantId });

        const { data } = response;
        console.log(response);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法將餐廳取消按讚，請稍後再試",
        });
      }
    },

    async addLike(restaurantId) {
      try {
        this.isProcessing = true;
        const response = await usersAPI.addLike({ restaurantId });

        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
        this.isProcessing = false;
      } catch (error) {
        console.log("error", error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法將餐廳按讚，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #efefef;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>