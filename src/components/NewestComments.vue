<template>
  <div class="card">
    <div class="card-header">最新評論</div>
    <div class="card-body" v-for="comment in comments" :key="comment.id">
      <div>
        <h4>
          <router-link :to="{ name: 'restaurant', params: { id: comment.id } }">
            <!-- <router-link
            :to="{ name: 'restaurant', params: { id: comment.restaurant.id } }"
          > -->
            {{ comment.Restaurant }}
            <!-- {{ comment.Restaurant.name }} -->
          </router-link>
        </h4>
        <p>{{ comment.text }}</p>
        by
        <router-link :to="{ name: 'users-detail' }">
          {{ comment.User.name }}</router-link
        >
        {{ comment.createdAt | fromNow }}
        <hr />
      </div>

      <!-- <div>
        <h4>
          <a href="#"> Golden Hegmann </a>
        </h4>
        <p>Commodi a totam.</p>
        by
        <a href="#"> user1 </a>
        at 3 days ago
        <hr />
      </div>

      <div>
        <h4>
          <a href="#"> Trent Hilpert </a>
        </h4>
        <p>Ipsa nulla qui.\nOptio labore voluptatem in quam laborum et.</p>
        by
        <a href="#"> user1 </a>
        at 3 days ago
        <hr />
      </div> -->
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utility/mixins.js";
export default {
  mixins: [fromNowFilter],
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },

  // filters: {
  //   fromNow(dateTime) {
  //     if (!dateTime) {
  //       return "-";
  //     }
  //     return moment(dateTime).fromNow();
  //   },
  // },
};
</script>