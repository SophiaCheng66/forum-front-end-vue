<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.favoritedRestaurantsLength }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.followingsLength }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form action="/following/3" method="POST" style="display: contents">
            <template v-if="currentUser.isAdmin">
              <router-link
                :to="{ name: 'users-edit', params: { id: profile.id } }"
                ><button type="submit" class="btn btn-primary">
                  Edit
                </button></router-link
              >
            </template>

            <button
              type="submit"
              class="btn btn-danger"
              v-else-if="profile.isFollowed"
              @click.stop.prevent="cancelFollowing(profile.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="submit"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(profile.id)"
            >
              追蹤
            </button>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "../apis/user.js";
import { Toast } from "../utility/helpers.js";
export default {
  props: {
    initialprofile: {
      type: Object,
      required: true,
    },
    isFollowed: {
      type: Boolean,
      required: true,
    },
    initialcurrentUser: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      profile: this.initialprofile,
      currentUser: this.initialcurrentUser,
    };
  },

  watch: {
    initialprofile(newValue) {
      console.log({ newValue });
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
  },

  methods: {
    async cancelFollowing(userId) {
      try {
        const response = await userAPI.deleteFollowing({ userId });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.profile = {
          ...this.profile,
          isFollowed: false,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法取消追蹤，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const response = await userAPI.addFollowing({ userId });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.profile = {
          ...this.profile,
          isFollowed: true,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法加入追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>>