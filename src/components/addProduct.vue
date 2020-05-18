<template>
    <div>
      <div class="container-fluid"><span class="text-center" @click="$emit('remove')">X</span>
        
        <div class="row mb-3">
          <div class="col-lg-4">
            <div class="label text-center mb-2">PRICE</div>
            <input class="input w-100" id="price" v-model="price" type="number">
          </div>
          <div class="col-lg-4">
            <div class="label text-center mb-2">QUANTITY</div>
            <input class="input w-100" id="quantity" v-model="quantity" type="number">
          </div>
          <div class="col-lg-4">
            <div class="label text-center mb-2">TOTAL</div>
            <input class="input w-100" id="total" v-model="total" type="number" readonly>
            
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "product",
    data() {
    return {
      price: null,
      quantity: null,
      total: null,
  
    };
  },
  watch: {
    quantity(newVal) {
      this.total = this.price * newVal;
    },
    price(newVal) {
      this.total = this.quantity * newVal;
    },
  }
}
</script>

