<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li
        v-show="previousPage"
        :class="['page-item', { disabled: currentPage === 1 }]"
      >
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{
            name: 'restaurants',
            query: { categoryId, page: previousPage },
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>
      <!--當使用者正在的頁面等於totalPage裡的某一頁時，那一頁加上active -->
      <li
        v-for="page in totalPage"
        :key="page"
        :class="['page-item', { active: currentPage === page }]"
      >
        <router-link
          class="page-link"
          :to="{ name: 'restaurants', query: { categoryId, page } }"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- <li class="page-item">
        <a class="page-link" href="#"> 2 </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"> 3 </a>
      </li> -->

      <!-- 後一頁 nextPage -->
      <li
        v-show="nextPage"
        class="['page-item',{disabled:currentPage === totalPage.length}]"
      >
        <!-- 用query的方式跟後端說我們現在要的是什麼資料-->
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{ name: 'restaurants', query: { categoryId, page: nextPage } }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "RestaurantsPagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Array,
      required: true,
    },
    previousPage: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: [Number, String],
      default: "",
    },
    nextPage: {
      type: Number,
      required: true,
    },
  },
};
</script>>


<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-link {
  height: 37px;
  padding: 7px 20px;
  color: #bd2333;
}

.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
  z-index: 1;
}

.page-item span {
  color: #bd2333;
}

a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: #bd2333;
  border-color: #bd2333;
}
</style>