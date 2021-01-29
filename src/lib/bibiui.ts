import Button from "./Button.vue";
import Switch from "./Switch.vue";
import Dialog from "./Dialog.vue";
import Tabs from "./Tabs.vue";
import Tab from "./Tab.vue";
import Cell from "./Cell.vue";
import CellGroup from "./CellGroup.vue";
import Icon from "./Icon.vue";
import Field from "./Field.vue";
// import { ComponentOptions } from "vue";
export default {
  install: (app) => {
    // Plugin code goes here
    app.component("bbSwitch", Switch);
    app.component("bbButton", Button);
    app.component("bbDialog", Dialog);
    app.component("bbTabs", Tabs);
    app.component("bbTab", Tab);
    app.component("bbIcon", Icon);
    app.component("bbCell", Cell);
    app.component("bbCellGroup", CellGroup);
    app.component("bbField", Field);
  },
};