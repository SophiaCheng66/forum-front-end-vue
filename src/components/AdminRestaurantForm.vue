<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        v-model="restaurant.name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        class="form-control"
        name="categoryId"
        v-model="restaurant.categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
        <!-- <option value="2">日式料理</option>
        <option value="3">義式料理</option> -->
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        v-model="restaurant.tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        v-model="restaurant.address"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
        v-model="restaurant.openingHours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        class="form-control"
        rows="3"
        name="description"
        v-model="restaurant.description"
      />
    </div>

    <!-- 這個特殊按鈕是一個讓瀏覽器讀取檔案的介面，點擊「選擇檔案」按鈕並完成互動後，<input type="file"> 的內容會有一些變化：這個時候，上傳的檔案會轉換成一個叫 FileList 的 DOM 物件列表，存放在 <input type="file"> 的 DOM 元素的 files 屬性裡，可以透過 JavaScript 做進一步操作。 -->
    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        alt=""
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
      <!-- multiple //加上 multiple 就可以選擇上傳很多個檔案 -->
    </div>

    <button type="submit" class="btn btn-primary">送出</button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 2,
      name: "日本料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-29T19:05:15.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-29T19:05:16.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    {
      id: 2492,
      name: "中式料理",
      createdAt: "2020-11-29T19:06:59.000Z",
      updatedAt: "2020-11-29T19:06:59.000Z",
    },
  ],
};
export default {
  name: "AdminRestaurantForm",
  props: {
    //type是Object，預設就要寫Object，如果沒有設定required，建議就要寫default
    //當我們要為物件或陣列類型的資料設定預設值時，需要使用 () => {}的寫法來回傳物件 或者 () =>[]的寫法來回傳陣列
    initialRestaurant: {
      type: Object,
      default: () => {
        //但這樣寫很像一個function所以要加上return
        return {
          name: "",
          categoryId: "",
          tel: "",
          address: "",
          description: "",
          image: "",
          openingHours: "",
        };
      },
    },
  },
  data() {
    return {
      categories: [],
      //Edit可以取到initialRestaurant  object的值，new可以取到default的值
      restaurant: {
        ...this.initialRestaurant,

        //另一種方式，先把restaurant裡的資料定義成空字串，搭配
        // this.restaurant = {
        //   ...this.restaurant,
        //   ...this.initialRestaurant,
        // };
        // id: -1,
        // name: "",
        // categoryId: "",
        // tel: "",
        // address: "",
        // description: "",
        // image: "",
        // openingHours: "",
      },
    };
  },
  created() {
    this.fetchCategories();

    //this.restaurant等於先展開空白的this.restaurant，再展開this.initialRestaurant，讓後面的this.initialRestaurant覆蓋前面的空白資料
    // this.restaurant = {
    //   ...this.restaurant,
    //   ...this.initialRestaurant,
    // };
  },

  methods: {
    fetchCategories() {
      this.categories = dummyData.categories;
    },

    handleFileChange(event) {
      // const files = e.target.files
      // console.log('files', files)
      const { files } = event.target;
      // console.log(files);
      if (files.length === 0) {
        //使用者沒有選擇上傳的檔案
        this.restaurant.image = "";
        return;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        // console.log(imageURL);
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(event) {
      // console.log(event);
      //先抓到使用者送出的form
      const form = event.target;
      //在前端，若想把整個表單傳送出去，其中一個方法是js提供的FormData()，只要我們把要傳送的form放進去之後，它就會自動幫我們產生一個類似form的東西，就可以直接把from傳到後端去。
      const formData = new FormData(form);

      //要把formData轉成可以讀取的樣子可以用formData.entries()，用entries後它會變成一個陣列，這個陣列裡面會包含表單的名稱、表單的值、ex:[name,value]，可以用for迴圈把它顯示出來，因為formData.entries()之後長的像[['May',1],[]]這樣子，所以就把[name,value]用解構賦值的方式取出來，for of到formData.entries()，取出formData.entries()裡的name,value值，但在這裡必須把抓到的使用者送出的form傳給父層，讓父層去發出post請求，因為這個元件在編輯和新增時都會用到，如果從這層發送的話，會比較容易讓後端混淆這個資料是要編輯還是新增的。所以會用this.$emit把資料網上傳

      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ":" + value);
      //   // name:吃飯
      //   // categoryId:2
      //   // tel:2345678
      //   // address: 台北市中正區
      //   // opening_hours:10:58
      //   // description:good
      //   // image:[object File]
      // }

      this.$emit("after-submit", formData);
    },
  },
};
</script>
 
      