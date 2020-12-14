<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          v-model="user.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          alt=""
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ user.isProcessing ? "處理中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import uesrAPI from "../apis/user.js";
import { Toast } from "../utility/helpers.js";
export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
        isAdmin: true,
      },
      isProcessing: false,
    };
  },

  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },

  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser(newValue) {
      if (newValue.id === -1) return;
      const { id } = this.$route.params;
      this.setUser(id);
      // console.log(newValue);
    },
  },

  methods: {
    setUser(userId) {
      console.log(userId);
      const { id, name, image } = this.currentUser;

      if (id.toString() !== userId.toString()) {
        console.log(id);
        this.$router.push("/*");
      } else {
        this.user = {
          id: id,
          name,
          image,
        };
      }
    },

    handleFileChange(event) {
      // console.log(event.target.files);
      //用解構賦值把files從event.target裡取出來
      const { files } = event.target;
      if (files.length === 0) return;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.user.image = imageURL;
    },

    async handleSubmit(event) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫姓名",
          });
          return;
        }

        console.log(event.target);
        const form = event.target;
        const formData = new FormData(form);
        this.isProcessing = true;
        const response = await uesrAPI.update({
          userId: this.user.id,
          formData,
        });
        console.log(response);
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.$router.push({
          name: "users-detail",
          params: { id: this.user.id },
        });

        //以下可印出formData的內容
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ":" + value);
        // }
      } catch (error) {
        console.log("error", error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>