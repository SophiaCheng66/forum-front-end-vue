<template>
  <div class="row">
    <div>
      <div class="card" style="width: 300px">
        <div class="card-header">
          <strong>{{ Followings.length }}</strong> followings (追蹤者)
        </div>
        <div class="card-body">
          <img
            v-for="Following in Followings"
            :key="Following.id"
            :src="Following.image"
            alt=""
            style="width: 50px"
            class="mr-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Followings: {
      type: Array,
      required: true,
    },
  },
};
</script>