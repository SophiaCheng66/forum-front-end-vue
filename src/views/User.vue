<template>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>餐廳評論網</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a class="navbar-brand" href="/">餐廳評論網</a>
        <div
          class="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul class="navbar-nav mr-auto"></ul>
          <div>
            <a href="/admin" style="color: white; margin-right: 10px"
              >管理員後台</a
            >
            <!-- <span style="color: white; margin-right: 10px">管理者 您好</span> -->
            <a href="/users/1" style="color: white; margin-right: 10px"
              >管理者 您好</a
            >
            <a href="/logout"
              ><button class="btn btn-outline-success my-2 my-sm-0">
                登出
              </button></a
            >
          </div>
        </div>
      </nav>
      <br />
      <main role="main">
        <div class="album py-5 bg-light">
          <div class="container">
            <!-- part1 -->
            <UserProfileCard
              :initialprofile="profile"
              :isFollowed="isFollowed"
              :initialcurrentUser="currentUser"
            />
            <!-- part2 -->
            <div class="d-flex flex-row">
              <div class="UserFollow">
                <UserFollowingsCard :Followings="Followings" />

                <br />
                <!-- part3 -->
                <UserFollowersCard :Followers="Followers" />
              </div>

              <!-- part4 -->
              <div class="UserCommentsCard">
                <UserCommentsCard :Comments="Comments" />

                <br />
                <!-- part5 -->
                <div class="UserFavoritedRestaurantsCard">
                  <UserFavoritedRestaurantsCard
                    :FavoritedRestaurants="FavoritedRestaurants"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  </html>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import userAPI from "../apis/user.js";
import { Toast } from "../utility/helpers.js";
import { mapState } from "vuex";

// const dummyUser = {
//   currentUser: {
//     id: 1,
//     name: "管理者",
//     email: "root@example.com",
//     image: "https://i.pravatar.cc/300",
//     isAdmin: true,
//   },
//   isAuthenticated: true,
// };

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },

  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        isAdmin: true,
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followingsLength: 0,
        followersLength: 0,
        isFollowed: false,
      },
      Followings: [],
      Followers: [],
      Comments: [],
      FavoritedRestaurants: [],
      isFollowed: false,
      // currentUser: dummyUser.currentUser,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },

  created() {
    const { id } = this.$route.params;
    this.fetchProfile(id);
  },
  beforeRouteUpdate(to, from, next) {
    // console.log({ to, from });
    const { id } = to.params;
    this.fetchProfile(id);
    next();
  },

  methods: {
    async fetchProfile(userId) {
      try {
        const response = await userAPI.get({ userId });
        console.log(response);

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        const { data } = response;
        const { profile } = data;
        const { isFollowed } = data;
        const {
          id,
          name,
          email,
          isAdmin,
          image,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants,
        } = profile;

        this.Followings = Followings;
        this.Followers = Followers;
        this.Comments = Comments;
        this.FavoritedRestaurants = FavoritedRestaurants;
        this.profile = {
          id: id,
          name: name,
          email: email,
          isAdmin: isAdmin,
          image: image,
          Comments: profile.Comments,
          FavoritedRestaurants: profile.FavoritedRestaurants,
          Followers: profile.Followers,
          Followings: profile.Followings,
          isFollowed: isFollowed,
          commentsLength: profile.Comments.length,
          favoritedRestaurantsLength: profile.FavoritedRestaurants.length,
          followingsLength: profile.Followings.length,
          followersLength: profile.Followers.length,
        };
        this.Comments = Comments.filter((Comment) => Comment.Restaurant);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.UserCommentsCard {
  margin-left: 50px;
}

.UserFollow {
  margin-left: 15px;
}

.UserFavoritedRestaurantsCard {
  margin-left: -15px;
}
</style>
