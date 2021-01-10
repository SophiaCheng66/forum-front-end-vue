<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />

    <template v-else>
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
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import Users from "../components/Users.vue";
import userAPI from "../apis/user.js";
import { Toast } from "../utility/helpers";
import Spinner from "../components/Spinner";

export default {
  name: "usersDatas",
  components: {
    NavTabs: NavTabs,
    Users,
    Spinner,
    //使用到template上是用組件的名字，也就是第一個NavTabs，可以自己取名，但大多都會取跟內容一樣的名字
  },

  data() {
    return {
      usersDatas: [],
      isLoading: true,
    };
  },

  created() {
    this.fetchUsers();
  },

  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        const { data } = await userAPI.getTopUsers();
        // const { data } = response;
        // console.log(response);

        this.usersDatas = data.users;
        // this.usersDatasList = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
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

