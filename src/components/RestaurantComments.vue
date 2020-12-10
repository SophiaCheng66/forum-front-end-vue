<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="Comment in restaurantComments" :key="Comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeleteButtonClick(Comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'users-detail' }">{{
            Comment.User.name
          }}</router-link>
        </h3>
        <p>{{ Comment.text }}</p>
        <footer class="blockquote-footer">
          {{ Comment.User.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
// 載入撰寫好的 mixin
import { fromNowFilter } from "../utility/mixins.js";
// console.log({ fromNowFilter });
import { mapState } from "vuex";
import commentsAPI from "../apis/comments.js";
import { Toast } from "../utility/helpers.js";

//照著專案的規劃，只有管理員才能刪除使用者評論，因此只有管理員看到刪除按鈕。
// 讓我們先設定一個 dummyUser 來模擬登入使用者
// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: "管理者",
//     email: "root@example.com",
//     image: "https://i.pravatar.cc/300",
//     isAdmin: true,
//   },
//   isAuthenticated: true,
// };

export default {
  // 透過 mixins 屬性將撰寫好的 mixin 放入
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },

  // data() {
  //   return {
  //     currentUser: dummyUser.currentUser,
  //   };
  // },
  computed: {
    ...mapState(["currentUser"]),
  },

  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        //請求 API 伺服器刪除 id 為 commentId 的評論(資料庫刪除)

        const response = await commentsAPI.comments.delete({ commentId });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.status);
        }
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit("after-delete-comment", commentId);
      } catch (error) {
        console.log("error".error);
        Toast.fire({
          icon: "error",
          title: "無法刪除評論，請稍後再試",
        });
      }
    },
  },
};
</script>