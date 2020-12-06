<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="d-flex flex-row flex-wrap ml-5 col-12">
      <Users
        v-for="usersData in usersDatas"
        :key="usersData.id"
        :initialUsers="usersData"
      />

      <!-- :initialUsersDatasList="usersDatasList" -->
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import Users from "../components/Users.vue";
import userAPI from "../apis/user.js";
import { Toast } from "../utility/helpers";

export default {
  name: "usersDatas",
  components: {
    NavTabs: NavTabs,
    Users,
    //使用到template上是用組件的名字，也就是第一個NavTabs，可以自己取名，但大多都會取跟內容一樣的名字
  },

  data() {
    return {
      usersDatas: [],
      // usersDatasList: [],
    };
  },

  created() {
    this.fetchUsers();
  },

  methods: {
    async fetchUsers() {
      try {
        const { data } = await userAPI.getTopUsers();
        // const { data } = response;
        // console.log(response);

        this.usersDatas = data.users;
        // this.usersDatasList = data.users;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
  },
};
</script>

