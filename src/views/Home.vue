<template>
  <div class="home">
    <h1>APPLE STOCK APP</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.$store.dispatch("getDaily");
  },
  mounted() {
    console.log(this.$store.state.daily);
  }
};
</script>
