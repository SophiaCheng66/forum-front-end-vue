<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />

    <template v-else>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" width="140">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.email }}</td>
            <td>{{ user.isAdmin ? "admin" : "user" }}</td>
            <td>
              <button
                @click.stop.prevent="
                  toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
                "
                type="button"
                class="btn btn-link"
                v-if="currentUser.id !== user.id"
              >
                {{ user.isAdmin ? "set as user" : "set as admin" }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import adminAPI from "../apis/admin.js";
import { Toast } from "../utility/helpers.js";
import { mapState } from "vuex";
import Spinner from "../components/Spinner";
// const dummyUser = {
//   email: "root@example.com",
//   id: 1,
//   image: "https://i.pravatar.cc/300",
//   isAdmin: true,
//   name: "管理者",
//   isAuthenticated: true,
// };

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      users: [],
      isLoading: true,
      // currentUser: {
      //   email: "",
      //   id: -1,
      //   image: "",
      //   isAdmin: true,
      //   name: "管理者",
      //   isAuthenticated: true,
      // },
    };
  },

  created() {
    this.fetchUser();
  },

  computed: {
    ...mapState(["currentUser"]),
  },

  methods: {
    async fetchUser() {
      try {
        this.isLoading = true;
        const response = await adminAPI.users.get();

        console.log(response);
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        // const { email, id, image, isAdmin, name, isAuthenticated } = users;

        this.users = data.users;
        // this.currentUser = {
        //   email,
        //   id,
        //   image,
        //   isAdmin,
        //   name,
        //   isAuthenticated,
        // };
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },

    async toggleUserRole({ userId, isAdmin }) {
      try {
        const response = await adminAPI.users.update({
          userId,
          isAdmin: !isAdmin,
          // isAdmin: (!isAdmin).toString()
        });
        console.log(response);
        const { data } = response;
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法變更狀態，請稍後再試",
        });
      }
    },
  },
};
</script>