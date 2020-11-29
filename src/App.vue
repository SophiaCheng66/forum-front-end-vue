<template>
  <div id="restaurant-forum">
    <Navbar />

    <main class="mt-5 bg-white">
      <!--router-view代表每一頁的內容 -->
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";

export default {
  //在這頁裡會有一個外部載入的組件components
  components: {
    //組件的名字叫 Navbar，內容來自載入Navbar的地方,當屬性名稱和值都一樣的時候可以簡寫成一個，之後把它放入template裡，當成html裡的標籤
    Navbar: Navbar, //(Navbar)
  },
};
</script>


