<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

import { mapState } from "vuex";
import commentsAPI from "../apis/comments.js";
import { Toast } from "../utility/helpers.js";
export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      text: "",
    };
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  methods: {
    async handleSubmit() {
      try {
        //透過api像伺服器請求新增一筆comment...
        // commentID(取得伺服器回傳的成功訊息 (回傳內容會包含 commentId ))...這裡還沒接api，所以先用uuid代替

        const data1 = {
          text: this.text,
          restaurantId: this.restaurantId,
          // User: {
          //   id: this.currentUser.id,
          //   name: this.currentUser.name,
          //   createdAt: new Date(),
          // },
        };

        const response = await commentsAPI.comments.create( {data1} );

        console.log(response);
        const { data } = response;
        const { commentId } = data;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$emit("after-create-comment", {
          commentId: commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });
        this.text = "";
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍後再試",
        });
      }
    },
  },
};
</script>