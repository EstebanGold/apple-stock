<template>
  <div class="home">
    <h1>APPLE STOCK APP</h1>
    <br />
    <div>
      <area-graph />
    </div>
  </div>
</template>

<script>
import AreaGraph from "@/components/AreaGraph.vue";

export default {
  name: "Home",
  components: {
    AreaGraph
  },
  created() {
    this.$store.dispatch("getDates", "daily");
  }
};
</script>
