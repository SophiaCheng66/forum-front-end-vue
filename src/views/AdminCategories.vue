<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
            v-model="newCategoryName"
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>

          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              @click.stop.prevent="handleCancel(category.id)"
              v-show="category.isEditing"
              class="cancel"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>

            <button
              @click.stop.prevent="deleteCategory(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import AdminNav from "@/components/AdminNav";
// import { v4 as uuidv4 } from "uuid";
import adminAPI from "../apis/admin.js";
import { Toast } from "../utility/helpers.js";
export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，把 `dummyData` 帶入 Vue 物件
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();

        console.log(response);
        const { data } = response;
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.categories = data.categories;
        // this.categories = this.categories.map((category) => {
        //   return {
        //     ...category,
        //     isEditing: false,
        //   };
        // });
        //另一種寫法，把return和{}省略，但因為要回傳的是物件，所以要在物件的大括弧前加上小括弧
        this.categories = this.categories.map((category) => ({
          ...category,
          isEditing: false,
          //nameCached用來儲存使用者修改餐廳名稱前的餐廳名稱
          nameCached: "",
        }));
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試",
        });
      }
    },

    async createCategory() {
      try {
        //透過API告知伺服器欲新增的餐廳類別
        const response = await adminAPI.categories.create({
          name: this.newCategoryName,
        });
        // console.log(response);
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.status);
        }

        const categoriesData = {
          id: data.categoryId,
          name: this.newCategoryName,
        };

        this.categories.push(categoriesData);

        // this.categories.push({
        //   id: uuidv4(),
        //   name: this.newCategoryName,
        // });
        this.newCategoryName = "";
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳類別，請稍後再試",
        });
      }
    },

    async deleteCategory(categoryId) {
      try {
        //透過API告知伺服器欲刪除的餐廳類別
        const response = await adminAPI.categories.delete({ categoryId });
        console.log(response);
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.status);
        }

        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳類別，請稍後再試",
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            //isEditing: !category.isEditing，isEditing後面本來不是加false就是加true，這樣寫的話就會變成是toggle的狀態，isEditing的狀態，true就會變false，false就會變true
            isEditing: !category.isEditing,
            //在進入編輯狀態的時候，就先把編輯前的餐廳名稱存進nameCached
            nameCached: category.name,
          };
        }
        //如果不是"category.id === categoryId"這個狀態，就return回一個原先的category
        return category;
      });
    },

    async updateCategory({ categoryId, name }) {
      try {
        //透過API去向伺服器更新餐廳類別名稱
        const response = await adminAPI.categories.update({
          categoryId,
          name,
        });
        console.log(response);
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.status);
        }

        this.toggleIsEditing(categoryId);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法編輯餐廳類別，請稍後再試",
        });
      }
    },

    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>