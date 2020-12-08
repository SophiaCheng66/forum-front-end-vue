<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initialRestaurant="restaurant"
      :isProcessing="isProcessing"
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
      isProcessing: false,
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
    console.log(id);
  },

  //   beforeRouteUpdate在vue裡用來監測網址的變化，有3個參數 to:去哪裡　from:從哪裡　next：處理完後往下一個function，to和from裡面都會有一個params，ex:to的下一層params：｛id:2｝, from的下一層params：｛id:2｝

  beforeRouteUpdate(to, from, next) {
    // console.log({ to, from }); //需要讓網址有變化才叫的出值
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
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
      } catch (error) {
        console.log("error", error);
      }
    },

    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        // 透過 API 將表單資料送到伺服器
        const response = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // console.log(response);

        this.$router.push({ name: "admin-restaurants" });
        //印出formData的內容
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ": " + value);
        // }
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "目前無法編輯餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>