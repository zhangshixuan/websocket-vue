import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { Button } from 'vant'
import { NumberKeyboard } from 'vant'
import { Cell, CellGroup } from 'vant'

Vue.use(Button).use(NumberKeyboard).use(Cell).use(CellGroup)

new Vue({
  render: h => h(App),
}).$mount('#app')
