<template>
  <div class="container py-5">
    <form class="w-100" v-on:submit.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
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
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "../apis/authorization.js";
import { Toast } from "../utility/helpers.js";

export default {
  //data是一個函式
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  //methods是一個物件
  methods: {
    //Submit事件是跟在表單(form)的
    async handleSubmit(e) {
      try {
        // e.preventDefault();
        //取得資料後，向後端送出資料，送出資料之前會轉成JSON格式，這是瀏覽器和伺服器之間溝通常用的格式。
        // console.log(
        //   JSON.stringify({
        //     email: this.email,
        //     password: this.password,
        //   })
        // );

        // TODO: 向後端驗證使用者登入資訊是否合法
        // 呼叫 axios 之後會回傳一個 Promise 物件,就可以用then把資料接進來，得到的資料是response，可以先把response console出來看一下
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }
        //防止使用者再次點擊表單
        this.isProcessing = true;

        //     authorizationAPI
        //       .signIn({ email: this.email, password: this.password })
        //       .then((response) => {
        //         console.log(response);
        //         const { data } = response;

        //         if (data.status !== "success") {
        //           throw new Error(data.message);
        //         }

        //         localStorage.setItem("token", data.token);

        //         this.$router.push("/restaurants");
        //       })
        //       .catch((error) => {
        //         // 將密碼欄位清空
        //         this.password = "";
        //         // 顯示錯誤提示
        //         Toast.fire({
        //           icon: "warning",
        //           title: "請確認您輸入了正確的帳號密碼",
        //         });
        //         this.isProcessing = false;
        //         console.log("error", error);
        //       });
        //   },
        // },

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        console.log(response);
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.token);

        this.$router.push("/restaurants");
      } catch (error) {
        // 將密碼欄位清空
        this.password = "";
        this.isProcessing = false;
        // 顯示錯誤提示
        Toast.fire({
          icon: "warning",
          title: "請確認您輸入了正確的帳號密碼",
        });
        console.log("error", error);
      }
    },

    //    methods: {
    //     handleSubmit (e) {
    //       const data = JSON.stringify({
    //         email: this.email,
    //         password: this.password
    //       })

    //       /
    //       console.log('data', data)
    //     }
    //   }
    // }
  },
};
</script>