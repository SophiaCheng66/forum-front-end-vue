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
          @click.stop.prevent="cancelFollowed"
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
          @click.stop.prevent="addFollowed"
        >
          追蹤
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUsers: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      usersData: this.initialUsers,
    };
  },

  methods: {
    cancelFollowed() {
      this.usersData = {
        ...this.usersData,
        isFollowed: false,
      };
    },

    addFollowed() {
      this.usersData = {
        ...this.usersData,
        isFollowed: true,
      };
    },
  },
};
</script>



<style scoped>
.test {
  margin-right: 100px;
}
</style> 
