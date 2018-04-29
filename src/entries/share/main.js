import Vue from 'vue'
import App from './app.vue'

import ElementUI from 'element-ui'
Vue.use(ElementUI);

import filters from '../../filters/filters.js'
//注册所有的全局filters，可加前缀进行区分
Object.keys(filters).forEach(function (key, index) {
    Vue.filter(key, filters[key]);
})

var app = new Vue({
    el:'#app',
    ...App
});