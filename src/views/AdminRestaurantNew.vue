<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
export default {
  components: {
    AdminRestaurantForm,
  },

  methods: {
    handleAfterSubmit(formData) {
      //TODO: 透過API把formData的資料往後端伺服器送，因為現在還沒做串接，所以先用console的方式確認我們有從子層拿到資料
      for (let [name, value] of formData.entries()) {
        console.log(name + ":" + value);
      }
    },
  },
};
</script>