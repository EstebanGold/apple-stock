<template>
  <div id="chart">
    <apexchart
      type="candlestick"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Candel",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: "candlestick"
        },
        title: {
          text: `CandleStick Chart - ${this.title}`,
          align: "left"
        },
        annotations: {
          xaxis: [
            {
              // x: "Oct 06 14:00",
              borderColor: "#00E396",
              label: {
                borderColor: "#00E396",
                style: {
                  fontSize: "12px",
                  color: "#fff",
                  background: "#00E396"
                },
                orientation: "horizontal",
                offsetY: 7,
                text: "Annotation Test"
              }
            }
          ]
        },
        tooltip: {
          enabled: true
        },
        xaxis: {
          type: "category",
          labels: {}
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      }
    };
  },
  mounted() {
    let data = [
      {
        name: "candle",
        data: this.$store.getters["getDataCandelGraph"]
      }
    ];
    this.series = data;
  }
};
</script>
