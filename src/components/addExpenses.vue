<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-lg-6 text-center">
                  <div class="label text-center">DESCRIPTION</div>
                  <input class="input" id="description" v-model="description" type="text">
              </div>
              <div class="col-lg-6 text-center">
                  <div class="label text-center">AMOUNT</div>
                  <input class="input" id="amount" v-model="amount" type="number">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "expense",
    data() {
    return {
      description: null,
      amount: null
    };
  }
}
</script>
