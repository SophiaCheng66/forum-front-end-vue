<template>
  <div class="row">
    <div>
      <div class="card" style="width: 610px">
        <div class="card-header">
          <strong>{{ Comments.length }}</strong> 已評論餐廳
        </div>
        <div class="card-body">
          <router-link
            :to="{
              name: 'restaurant',
              params: { id: Comments.id },
            }"
          >
            <img
              v-for="Comment in Comments"
              :key="Comment.id"
              :src="Comment.Restaurant.image"
              width="60"
              height="60"
              class="avatar mr-1"
            />
          </router-link>

          <!-- <a href="/restaurants/6">
            <img
              src="https://loremflickr.com/320/240/restaurant,food/?random=42.92691470956817"
              width="60"
              height="60"
              class="avatar"
            />
          <!-- </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Comments: {
      type: Array,
      required: true,
    },
  },
};
</script>
               