Nova.booting((Vue, router) => {
    Vue.component('index-external-url', require('./components/IndexField'));
    Vue.component('detail-external-url', require('./components/DetailField'));
    Vue.component('form-external-url', require('./components/FormField'));
})
