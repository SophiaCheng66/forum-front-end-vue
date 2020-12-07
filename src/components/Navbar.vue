// ./src/components/Navbar.vue

<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/restaurants">
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          to="/admin/restaurants"
          class="text-white mr-3"
        >
          <!-- to="/admin/restaurants" -->
          <!-- :to="{ name: 'admin-restaurants' }" -->
          管理員後台
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link to="#" class="text-white mr-3">
            {{ currentUser.name }} 您好
          </router-link>
          <button
            type="button"
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>


<script>
//假資料，串 API 之前，模擬API回傳的內容
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  data() {
    return {
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  }, //data

  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
        //我們先透過 fetchUser 來模擬「把 dummyUser 蓋過 currentUser」的動作 (這裡用了 spread 運算子把兩組資料打開，先打開 this.currentUser，再打開 dummyUser.currentUser，因此在 key 值相同時，dummyUser.currentUser 會覆蓋之前的資料)。
        //  this.currentUser ={
        // id: -1,
        // name: "",
        // email: "",
        // image: "",
        // isAdmin: true,

        // id: 1,
        // name: "管理者",
        // email: "root@example.com",
        // image: "https://i.pravatar.cc/300",
        // isAdmin: true,
        //  }
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
};
</script>

