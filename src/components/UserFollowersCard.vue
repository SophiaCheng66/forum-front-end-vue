<template>
  <div class="row">
    <div>
      <div class="card" style="width: 300px">
        <div class="card-header">
          <strong>{{ Followers.length }}</strong> followers (追隨者)
        </div>
        <div class="card-body">
          <img
            style="width: 50px"
            v-for="Follower in Followers"
            :key="Follower.id"
            :src="Follower.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Followers: {
      type: Array,
      required: true,
    },
  },
};
</script>