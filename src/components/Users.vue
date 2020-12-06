<template>
  <div class="row text-center test">
    <div>
      <router-link :to="{ name: 'users-detail' }">
        <img :src="usersData.image" width="140px" height="140px" />
      </router-link>
      <h2>{{ usersData.name }}</h2>
      <span class="badge badge-secondary"
        >追蹤人數：{{ usersData.FollowerCount }}</span
      >
      <p class="mt-3">
        <button
          @click.stop.prevent="cancelFollowed(usersData.id)"
          type="button"
          class="btn btn-danger"
          v-if="usersData.isFollowed"
        >
          取消追蹤
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary"
          @click.stop.prevent="addFollowed(usersData.id)"
        >
          追蹤
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import userAPI from "../apis/user.js";
import { Toast } from "../utility/helpers";
export default {
  name: "Users",
  props: {
    initialUsers: {
      type: Object,
      required: true,
    },

    // initialUsersDatasList: {
    //   type: Array,
    //   required: true,
    // },
  },
  data() {
    return {
      usersData: this.initialUsers,
      // UsersDatasList: this.initialUsersDatasList,
      // UsersDatasListId: -1,
    };
  },

  // created() {
  //   this.fetchUsersDatasList();
  // },

  methods: {
    // fetchUsersDatasList() {
    //   const { data } = this.UsersDatasList;
    //   const { id } = data;
    //   UsersDatasListId = id;
    // },

    async cancelFollowed(userId) {
      try {
        const response = await userAPI.deleteFollowing({ userId });

        console.log(response);
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.usersData = {
          ...this.usersData,
          isFollowed: false,
          FollowerCount: this.usersData.FollowerCount - 1,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },

    async addFollowed(userId) {
      try {
        const response = await userAPI.addFollowing({ userId });

        console.log(response);
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.usersData = {
          ...this.usersData,
          isFollowed: true,
          FollowerCount: this.usersData.FollowerCount + 1,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法追蹤，請稍後再試",
        });
      }
    },

    // addFollowed(userId) {
    //   this.usersData = {
    //     ...this.usersData,
    //     isFollowed: true,
    //     FollowerCount: this.usersData.FollowerCount + 1,
    //   };
    // },
  },
};
</script>



<style scoped>
.test {
  margin-right: 100px;
}
</style> 
