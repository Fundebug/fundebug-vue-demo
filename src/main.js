var fundebug = require("fundebug-javascript");
fundebug.apikey =
    "de57a10ec063bcc28da2f8f0292fd7884581e914621f27be082db88b05eb24b2";

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

function formatComponentName(vm) {
    if (vm.$root === vm) return "root";

    var name = vm._isVue
        ? (vm.$options && vm.$options.name) ||
          (vm.$options && vm.$options._componentTag)
        : vm.name;
    return (
        (name ? "component <" + name + ">" : "anonymous component") +
        (vm._isVue && vm.$options && vm.$options.__file
            ? " at " + (vm.$options && vm.$options.__file)
            : "")
    );
}

Vue.config.errorHandler = function(err, vm, info) {
    if (vm) {
        var componentName = formatComponentName(vm);
        var propsData = vm.$options && vm.$options.propsData;
        fundebug.notifyError(err, {
            metaData: {
                componentName: componentName,
                propsData: propsData,
                info: info
            }
        });
    } else {
        fundebug.notifyError(err);
    }
};

new Vue({
    render: h => h(App)
}).$mount("#app");
