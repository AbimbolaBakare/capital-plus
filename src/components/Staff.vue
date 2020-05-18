<template>
  <div>
    <section class="get-in-touch">
      <h1 class="title text-white">Daily Sales</h1>

      <form @submit.prevent="processForm">
        <div class="container-fluid staff-form">
          <div class="row">
            <div class="col-lg-1 text-white mb-5">
              <label for="name">NAME</label>
            </div>
            <div class="col-lg-11 mb-5">
              <input type="text" name="name" class="w-100" />
            </div>
            <div class="col-lg-1 text-white">
              <label for="branch">BRANCH</label>
            </div>
            <div class="col-lg-11 mb-5">
              <input type="text" name="branch" class="w-100" />
            </div>
            <div class="col-lg-1 text-white">
              <label for="date">DATE</label>
            </div>
            <div class="col-lg-11">
              <input type="date" name="date" class="w-100" />
            </div>
          </div>
          <div class="open mt-4 mb-5">
            <h5 class="text-left mt-3 ml-5 mb-3">A - OPENING STOCK ANALYSIS</h5>
            <div class="products">
              <div
                v-for="(product, index) in products"
                :id="index"
                :key="product"
              >
                <p class="text-white mt-5">{{ index + 1 }}</p>
                <addProduct @remove="products.splice(index, 1)" />
              </div>
            </div>
            <button
              v-on:click="addProduct"
              placeholder="Add Product"
              class=" ml-5 but"
            >
              Add New
            </button>
            <h5 class="ml-5 mb-5">TOTAL OPENING STOCK = {{ grandTotal }}</h5>
            <!--  -->
            <h5 class=" text-left mt-3 ml-5">B - SALES</h5>
            <div class="container-fluid">
              <div class="row ml-4">
                <div class="col-lg-2 text-white mb-5">
                  <label for="bank">BANK</label>
                </div>
                <div class="col-lg-9 mb-5">
                  <input type="number" name="bank" class="bn" />
                </div>
                <div class="col-lg-2 text-white">
                  <label for="cash-at-hand">CASH AT HAND</label>
                </div>
                <div class="col-lg-10 mb-5">
                  <input type="number" name="cash-at-hand" />
                </div>
                <!-- <div class="col-lg-1 text-white">
              <label for="date">DATE</label>
            </div>
            <div class="col-lg-11">
              <input type="date" name="date" required />
            </div> -->
              </div>
            </div>

            <!--  -->

            <!-- expenses -->
            <h5 class=" text-left ml-5">C - EXPENSES</h5>
            <div class="expenses">
              <div
                v-for="(expense, index) in expenses"
                :id="index"
                :key="expense"
              >
                <p class="text-white">{{ index + 1 }}</p>
                <addExpenses @remove="products.splice(index, 1)" />
              </div>
            </div>
            <button
              v-on:click="addExpense"
              placeholder="Add Product"
              class="mb-5 ml-5 mt-3 but"
            >
              Add New
            </button>
            <!-- expenses -->
          </div>
        </div>
      </form>

      <!-- <div class="form-field col-lg-12">
         <input class="submit-btn" type="submit" value="Submit">
      </div>-->
    </section>
  </div>
</template>

<script>
import addProduct from "../components/addProduct";
import addExpenses from "../components/addExpenses";

export default {
  name: "staff",
  components: { addProduct, addExpenses },
  data() {
    return {
      products: [],
      expenses: [],
      counter: 0
    };
  },
  methods: {
    addProduct: function() {
      this.products.push(this.index);
    },
    addExpense: function() {
      this.expenses.push(this.index);
    },
    
    processForm: function() {
      // alert("Processing!");
    }
  },
  // computed: {
  //   grandTotal() {
      
  //   },
  // }
};
</script>

<style scoped>
.bn {
  /* margin-left: 75px; */
}
h5 {
  font-weight: 900;
}
</style>
