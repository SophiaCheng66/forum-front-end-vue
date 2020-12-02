<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initialRestaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
const dummyData = {
  restaurant: {
    id: 1,
    name: "Maxie Trantow V",
    tel: "890-533-5519 x71749",
    address: "1268 Bosco Prairie",
    opening_hours: "08:00",
    description:
      "Officiis aut excepturi ipsa. Et ratione eveniet unde laboriosam aut. Explicabo autem eos pariatur aut molestiae perspiciatis debitis. Et repellat consequatur sapiente velit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=51.756313654300044",
    viewCounts: 110,
    createdAt: "2020-11-23T10:08:45.000Z",
    updatedAt: "2020-11-30T13:30:41.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
  },
};

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },

  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
    console.log(id);
  },

  methods: {
    fetchRestaurant(restaurantId) {
      console.log(restaurantId);
      const { restaurant } = dummyData;
      const {
        id,
        name,
        CategoryId,
        tel,
        address,
        description,
        image,
        opening_hours,
      } = restaurant;

      this.restaurant = {
        // ...this.restaurant,
        id,
        name,
        categoryId: CategoryId,
        tel,
        address,
        description,
        image,
        openingHours: opening_hours,
      };
    },

    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>