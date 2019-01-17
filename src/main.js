// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//引入插件与第三方库
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import '../static/reset.css'
import '../static/flexible.debug.js'
import '../static/flexible_css.debug.js'
Vue.use(MintUI);
Vue.prototype.$axios = axios;
Vue.prototype.ajaxUrl = '/accessforh5/';
Vue.prototype.ajaxUrlimg='/non_vehicle_img';
Vue.prototype.ceshiUrl = 'http://10.2.9.15:8080/entranceGuard'
Vue.config.productionTip = false;
function setTitle(title) {
    document.title = title || document.title;
    if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
        var ifr = document.createElement('iframe');
        ifr.src = "/favicon.ico";
        ifr.style.display = 'none';
        ifr.onload = function () {
            setTimeout(function () {
                ifr.remove();
            }, 9);
            document.body.appendChild(ifr);
        }
    }
}
router.beforeEach((to, from, next) => {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android??
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios??
    setTitle(to.meta.title);
    next()//开发
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
