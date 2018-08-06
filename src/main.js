// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引用API文件
import api from './api/index'
//将API方法绑定到全局
Vue.prototype.$api = api
//引用事件处理封装函数
import units from './utils/index'
//将这个工具函数绑定到全局
Vue.prototype.$utils = units


Vue.config.productionTip = false

// //配置百度编辑器
import '../static/utf8-jsp/ueditor.config.js'
import '../static/utf8-jsp/ueditor.all.min.js'
import '../static/utf8-jsp/lang/zh-cn/zh-cn.js'
import '../static/utf8-jsp/ueditor.parse.min.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
