import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Introduce from "./components/Doc/Introduce.vue";
import Quickstart from "./components/Doc/Quickstart.vue";
import Button from "./components/Doc/Button.vue";
import Switch from "./components/Doc/Switch.vue";
import Dialog from "./components/Doc/Dialog.vue";
import Tabs from "./components/Doc/TabsDemo.vue";
import Cell from "./components/Doc/CellDemo.vue";
import Icon from "./components/Doc/IconDemo.vue";
import Field from "./components/Doc/FieldDemo.vue";
import Search from "./components/Doc/SearchDemo.vue";
import NavBar from "./components/Doc/NavBarDemo.vue";
const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes:[
    {path:'/',component: Home},
    {path:'/doc',component: Doc, redirect: '/doc/introduce',
      children:[
        {path:'/doc/introduce',component: Introduce},
        {path:'/doc/quickstart',component: Quickstart},
        {path:'/doc/button',component: Button},
        {path:'/doc/switch',component: Switch},
        {path:'/doc/dialog',component: Dialog},
        {path:'/doc/tab',component: Tabs},
        {path:'/doc/cell',component: Cell},
        {path:'/doc/icon',component: Icon},
        {path:'/doc/field',component: Field},
        {path:'/doc/search',component: Search},
        {path:'/doc/navbar',component: NavBar},
      ]
    },
  ]
})