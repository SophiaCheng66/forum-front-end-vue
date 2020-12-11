<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initialRestaurant="restaurant" />
    <hr />

    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurantComments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />

    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurantId="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";

import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";

import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utility/helpers";
import { mapState } from "vuex";
// 做前後分離的時候，後端也會加開一組路由，讓前端可以用類似的手法，在任何需要的時候直接取得登入使用者。在這裡可以用postman get https://forum-express-api.herokuapp.com/api/get_current_user ，當我在postman呼叫這個路由的時候，它就會回傳當前登入的使用者的資訊，等到時串接api後再把資料替換掉
// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: "Sophia",
//     email: "root@example.com",
//     image: "https://i.pravatar.cc/300",
//     isAdmin: true,
//     createdAt: "2020-11-23T10:08:45.000Z",
//   },
//   //是不是成功驗證登入
//   isAuthenticated: true,
// };

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  // data屬性裡放這個頁面所需的所有資料
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      // currentUser: dummyUser.currentUser,
    };
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  created() {
    // 可透過this.$route.params取得使用者點擊的路由id(餐廳頁面＿)
    // console.log(this.$route.params);
    const { id } = this.$route.params;
    // console.log(id);
    this.fetchRestaurant(id);
  },

  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },

  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await restaurantsAPI.getRestaurant({ restaurantId });
        console.log(response);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const { data } = response;

        // console.log("restaurantId", restaurantId);
        // 透過解構賦值拿出資料，可以把陣列或物件中的資料解開擷取成為獨立變數
        //dummyData={restaurant, isFavorited, isLiked}
        const { restaurant, isFavorited, isLiked } = data;

        const {
          id,
          name,
          Category,
          image,
          opening_hours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id: id,
          name: name,
          categoryName: Category ? Category.name : "未分類",
          image: image,
          openingHours: opening_hours,
          tel: tel,
          address: address,
          description: description,
          isFavorited: isFavorited,
          isLiked: isLiked,

          // 原始寫法:
          // id: dummyData.restaurant.id,
          // name: dummyData.restaurant.name,
          // categoryName: dummyData.restaurant.Category.name,
          // image: dummyData.restaurant.image,
          // openingHours: dummyData.restaurant.opening_hours,
          // tel: dummyData.restaurant.tel,
          // address: dummyData.restaurant.address,
          // description: dummyData.restaurant.description,
          // isFavorited: dummyData.isFavorited,
          // isLiked: dummyData.isLiked,
        };
        this.restaurantComments = Comments;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },

    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id(畫面上刪除)
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },

    afterCreateComment(payload) {
      // console.log(payload)
      const { commentId, restaurantId, text } = payload;
      // console.log(commentId); //a389ddd0-a7e1-4cba-8e64-b233f6c04d9f
      this.restaurantComments.push({
        id: commentId,
        text: text,
        RestaurantId: restaurantId,
        // createdAt: "2020-11-23T10:08:45.000Z",
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          createdAt: new Date(),
        },
      });
    },
  },
};
</script>
