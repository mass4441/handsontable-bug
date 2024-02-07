<template>
  <Spreadsheet v-if="data && data.length > 0" :datas="data" />
</template>
<script>
import Spreadsheet from "./components/Spreadsheet.vue";

const getData = () => {
  return [
    {
      Tesla: "Tesla",
      Volvo: "Volvo",
      Toyota: "Toyota",
      Ford: "Ford",
    },
    {
      Tesla: "Tesla",
      Volvo: "Volvo",
      Toyota: "Toyota",
      Ford: "Ford",
    },
    {
      Tesla: "Tesla",
      Volvo: "Volvo",
      Toyota: "Toyota",
      Ford: "Ford",
    },
    {
      Tesla: "Tesla",
      Volvo: "Volvo",
      Toyota: "Toyota",
      Ford: "Ford",
    },
  ];
};

export default {
  name: "App",
  components: {
    Spreadsheet,
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.data = getData();
    }, 300);
  },
};
</script>
<style>
.red {
  background-color: red !important;
}
</style>

