<template>
  <div class="home">
    <h1>APPLE STOCK APP</h1>
    <br />
    <div id="days-buttons">
      <select
        name="Dates"
        id="dates-select"
        v-model="typeDate"
        @change="changeDate"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="montly">Montly</option>
      </select>

      <span>{{ typeDate }}</span>
    </div>
    <div>
      <area-graph />
    </div>
    <div>
      <candle-graph :title="'Apple Stock'" />
    </div>
  </div>
</template>

<script>
import AreaGraph from "@/components/graph/Area.vue";
import CandleGraph from "@/components/graph/Candle.vue";
import transform from "@/data/transform";

export default {
  name: "Home",
  components: {
    AreaGraph,
    CandleGraph
  },
  data() {
    return {
      typeDate: "daily"
    };
  },
  created() {
    this.$store.dispatch("getDates", "daily");
  },
  methods: {
    changeDate() {
      this.$store.dispatch("getDates", this.typeDate);
    }
  }
};
</script>
