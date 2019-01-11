var fundebug = require("fundebug-javascript");
fundebug.apikey =
    "de57a10ec063bcc28da2f8f0292fd7884581e914621f27be082db88b05eb24b2";

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
