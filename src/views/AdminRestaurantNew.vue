<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :isProcessing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utility/helpers";
export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    };
  },

  methods: {
    async handleAfterSubmit(formData) {
      try {
        //TODO: 透過API把formData的資料往後端伺服器送，因為現在還沒做串接，所以先用console的方式確認我們有從子層拿到資料,以下這段可以讓我們確定有從子層拿到資料
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ":" + value);
        // }
        //透過API把formData的資料往後端伺服器送
        this.isProcessing = true;
        const response = await adminAPI.restaurants.create({ formData });
        console.log(response);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        console.log("error");
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
    },
  },
};
</script>