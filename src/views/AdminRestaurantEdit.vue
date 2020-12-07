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
import adminAPI from "../apis/admin";
import { Toast } from "../utility/helpers";

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
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.getDetail({ restaurantId });

        console.log(response);
        const { data } = response;

        // console.log(restaurantId);

        const {
          id,
          name,
          CategoryId,
          tel,
          address,
          description,
          image,
          opening_hours,
        } = data.restaurant;

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


watch:{
  initialRestaurant(newValue,oldValue){
    console.log('watch',{newValue,oldValue})
  }
}

      } catch (error) {
        console.log("error", error);
      }
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