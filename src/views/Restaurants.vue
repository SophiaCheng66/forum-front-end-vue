

<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavpills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :categoryId="categoryId"
      :nextPage="nextPage"
    />
  </div>
</template> 

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Jennie Leffler",
      tel: "(358) 068-6354 x4742",
      address: "2585 Heller Turnpike",
      opening_hours: "08:00",
      description: "alias",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.536684124571075",
      viewCounts: 3,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-13T16:29:05.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Cleora Ernser",
      tel: "(037) 744-3366 x6754",
      address: "1403 Lenny Squares",
      opening_hours: "08:00",
      description: "Nemo quia exercitationem cupiditate dolorum exerci",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=79.13321948642904",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-13T14:56:50.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 3,
      name: "Camila Bartell",
      tel: "637-966-3594",
      address: "700 Brekke Lake",
      opening_hours: "08:00",
      description: "Omnis iste ad incidunt nobis ipsum non. Vel maxime",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.281554396287266",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-10T14:28:55.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: true,
      isLiked: false,
    },
    {
      id: 4,
      name: "Bettye Hintz",
      tel: "673.237.3704",
      address: "783 Orin Orchard",
      opening_hours: "08:00",
      description: "Earum eos et harum sapiente. Aut et fuga.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.38461898645234",
      viewCounts: 4,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-22T06:29:31.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 5,
      name: "Casimir Reichert",
      tel: "1-447-657-3885 x9472",
      address: "493 Kling Mill",
      opening_hours: "08:00",
      description: "facere",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.16383958767057",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-15T08:24:28.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 6,
      name: "Roxane Zieme",
      tel: "873.120.0593 x335",
      address: "4257 Zboncak Greens",
      opening_hours: "08:00",
      description: "Et fugiat impedit in et.\nAlias reprehenderit ut co",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.84597212271724",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 7,
      name: "Wade Abshire",
      tel: "297.051.4686",
      address: "340 Natalie Cliffs",
      opening_hours: "08:00",
      description: "unde assumenda ratione",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.3642854590469",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Hilda Beatty",
      tel: "184-044-3379 x13416",
      address: "0828 Schoen Ports",
      opening_hours: "08:00",
      description: "Ratione omnis autem debitis nam. Quia sint volupta",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.21447406184127",
      viewCounts: 0,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Afton Schmitt",
      tel: "(976) 231-4649",
      address: "226 Harvey Inlet",
      opening_hours: "08:00",
      description: "quos ea velit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.395398150614675",
      viewCounts: 2,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-15T08:24:54.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 10,
      name: "Dr. Antonina Reichel",
      tel: "1-703-254-0803 x578",
      address: "843 Yundt Park",
      opening_hours: "08:00",
      description: "Enim quia suscipit eaque blanditiis eaque quia vol",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.57553460131763",
      viewCounts: 1,
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-10-15T08:24:40.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2020-09-28T16:35:57.000Z",
        updatedAt: "2020-09-28T16:35:57.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2020-09-28T16:35:57.000Z",
      updatedAt: "2020-09-28T16:35:57.000Z",
    },
    {
      id: 2212,
      name: "越中料理",
      createdAt: "2020-10-06T15:19:34.000Z",
      updatedAt: "2020-10-06T15:48:15.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5, 6],
  prev: 1,
  next: 2,
};

export default {
  name: "Restaurants",
  components: {
    NavTabs: NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,

    //使用到template上是用組件的名字，也就是第一個NavTabs，可以自己取名，但大多都會取跟內容一樣的名字
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },

  created() {
    this.fetchReataurants();
  },

  methods: {
    fetchReataurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>