<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

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
              @click.stop.prevent="toggleUserRole(user.id)"
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
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    {
      id: 902,
      name: "Serena",
      email: "serena@gmail.com",
      password: "$2a$10$qh4WPjAiZsOxg2sCF2KEP.4P7p9kS6vAeTujIr3cZXfE3vaWVqUMO",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:13:44.000Z",
      updatedAt: "2020-11-23T10:13:44.000Z",
    },
    {
      id: 912,
      name: "123",
      email: "123@123",
      password: "$2a$10$eHSHhg/V3oNLm59hWWVDyeE3JA6Ufyq7ztCvsqkMaUxk382df4Oq6",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-29T17:19:13.000Z",
      updatedAt: "2020-11-29T17:19:13.000Z",
    },
    {
      id: 922,
      name: "111",
      email: "111@111",
      password: "$2a$10$Tm5YIdzQb7recZgv/A5ltuS.UtwwyovNqWYr45QfFpBk/vtU3Ppce",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-29T17:42:08.000Z",
      updatedAt: "2020-11-29T17:42:08.000Z",
    },
    {
      id: 932,
      name: "王曉明",
      email: "123456@gmail.com",
      password: "$2a$10$.GiO.vIFy3LMym.YaOTyV.PqS5K95gNFajpFUAm7G0amWg0BgD6ka",
      isAdmin: false,
      image: null,
      createdAt: "2020-12-01T09:20:12.000Z",
      updatedAt: "2020-12-01T09:20:12.000Z",
    },
  ],
};

const dummyUser = {
  email: "root@example.com",
  id: 1,
  image: "https://i.pravatar.cc/300",
  isAdmin: true,
  name: "管理者",
  isAuthenticated: true,
};

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: dummyData.users,

      currentUser: {
        email: "",
        id: -1,
        image: "",
        isAdmin: true,
        name: "管理者",
        isAuthenticated: true,
      },
    };
  },

  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      const { email, id, image, isAdmin, name, isAuthenticated } = dummyUser;
      this.currentUser = {
        email,
        id,
        image,
        isAdmin,
        name,
        isAuthenticated,
      };
    },

    toggleUserRole(userId) {
      // console.log(userId);
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>