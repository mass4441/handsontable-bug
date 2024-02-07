<script>
import { HotTable } from "@handsontable/vue3";
import spreadsheetMixin from "./SpreadsheetMixin";

export default {
  name: "App",
  components: {
    HotTable,
  },
  mixins: [spreadsheetMixin],
  props: {
    datas: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newData: [],
    };
  },
  watch: {
    datas: {
      handler(newDatas, oldDatas) {
        this.hotSettings.data = newDatas;
      },
      immediate: true,
    },
  },
  methods: {
    setColor() {
      const hotInstance = this.$refs.hotTableComponent.hotInstance;
      hotInstance.setCellMeta(2, 2, "className", "red");
      hotInstance.render();
    },
    updateData() {
      this.hotSettings.data[2].Toyota = "Updated";
    },
  },
};
</script>
<template>
  <HotTable
    v-if="datas && datas.length > 0"
    ref="hotTableComponent"
    :settings="hotSettings"
  />
  <button @click="setColor">Click me first</button>
  <button @click="updateData">Then Click me</button>
</template>
<style src="../../node_modules/handsontable/dist/handsontable.full.css"></style>
<style>
.red {
  background-color: red !important;
}
</style>

