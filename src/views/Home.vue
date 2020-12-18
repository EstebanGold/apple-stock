<template>
  <div class="home">
    <h1>APPLE STOCK APP</h1>
    <br />
    <div>
      <area-graph />
    </div>
    <div>
      <candel-graph :title="'Apple Stock'" />
    </div>
  </div>
</template>

<script>
import AreaGraph from "@/components/graph/Area.vue";
import CandelGraph from "@/components/graph/Candel.vue";

export default {
  name: "Home",
  components: {
    AreaGraph,
    CandelGraph
  },
  created() {
    this.$store.dispatch("getDates", "daily");
  }
};
</script>
