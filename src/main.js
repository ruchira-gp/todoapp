import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { createStore } from 'vuex'

//Vue.use(Vuex)

import "./firebase"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// export const store = new Vuex.Store({
//   state() {
//     return {
      
//     };
//   },
//   mutations: {
//     saveItem(state, item) {
//       state.taskList.push(item.value); 
//       console.log('hello');
//     },


//   },
//   getters:{
//     getList:state=>{

//       return state.taskList;
//     }
//   }

// });

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


new Vue({
  render: h => h(App),

  // store: store,
}).$mount('#app');

