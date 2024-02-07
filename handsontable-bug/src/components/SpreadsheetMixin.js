import { frFR, registerLanguageDictionary } from "handsontable/i18n";

registerLanguageDictionary(frFR);

export default {
  data() {
    return {
      parametersLoading: false,
      usersPositions: [],
      connectionId: "",
      limitColLength: 0,
      lastTextLengthForNotifDisplay: 0,
      hotSettings: {
        data: [],
        customBorders: {},
        //Comment the columns to make it work as expected
        columns: [
          { type: "text", data: "Tesla", title: "Tesla" },
          { type: "text", data: "Volvo", title: "Volvo" },
          { type: "text", data: "Toyota", title: "Toyota" },
          { type: "text", data: "Ford", title: "Ford" },
        ],
        language: frFR.languageCode,
        rowHeaders: true,
        autoRowSize: true,
        //Those properties break the table but i don't understand why (other bug)
        //height: "100%",
        //width: "100%",
        stretchH: "all",
        manualColumnResize: true,
        currentRowClassName: "current-row",
        currentColClassName: "current-col",
        readOnlyCellClassName: "read-only-cell",
        multiColumnSorting: true,
        filters: true,
        fixedColumnsLeft: 1,
        dropdownMenu: [
          "filter_by_value",
          "filter_action_bar",
          "filter_by_condition",
        ],
        licenseKey: "non-commercial-and-evaluation",
        contextMenu: ["remove_row"],
        outsideClickDeselects: false,
        selectionMode: "single",
        fragmentSelection: true,
        disableVisualSelection: false,
      },
    };
  },
  computed: {},
  methods: {},
};
