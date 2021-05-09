import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import EmployeeList from './views/employee/EmployeeList.vue'
import EmployeeLists from './views/employees/EmployeeLists.vue'
import ReportList from './views/report/ReportList.vue'

Vue.config.productionTip = false

//1. Định nghĩa các path:
const routes = [
  { path: '/employee', component: EmployeeList },
  { path: '/employees', component: EmployeeLists },
  { path: '/report', component: ReportList },
]
//2. Khởi tạo router:
const router = new VueRouter({
  routes // short for `routes: routes`
})

//3. Khai báo sử dụng Vue-Router:
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
