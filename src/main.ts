import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false
Vue.component('Nav',Nav)
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


//加载完成就要往下滚100px
window.onload= function (){
  setTimeout(()=>{
    window.scrollTo(0,100)
  },0)
}

//根据宽度
if (document.documentElement.clientWidth >500){
  window.alert('请使用移动端来预览,以保证预览效果')
}
