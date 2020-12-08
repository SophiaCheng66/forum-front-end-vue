<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSignUp">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "處理中" : "送出" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import signupAPI from "../apis/signUp.js";
import { Toast } from "../utility/helpers.js";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },

  methods: {
    async handleSignUp() {
      try {
        const data1 = {
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck,
        };

        if (!this.name) {
          Toast.fire({
            icon: "warning",
            title: "請輸入姓名，謝謝!",
          });
          return;
        }

        if (!this.email) {
          Toast.fire({
            icon: "warning",
            title: "請輸入email，謝謝!",
          });
          return;
        }

        if (!this.password || !this.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "請輸密碼，謝謝!",
          });
          return;
        }

        this.isProcessing = true;

        //將資料送到後端註冊
        const response = await signupAPI.create({ data1 });

        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.status);
        }

        this.$router.push({ name: "sign-in" });

        //以下為把資料存成JSON格式
        // console.log(JSON.stringify(data));
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法註冊，請稍後再試",
        });
      }
    },
  },
};
</script>  