import Velocity from 'velocity-animate'

const getters = {
    products(state, getters, { api, furnitureSearch, furnitureDelivery, furnitureStyles }) {
        let products = api.furnitureProducts
        let keywords = furnitureSearch.keywords
        let rangeDelivery = furnitureDelivery.selectedRange
        let selectedStyles = furnitureStyles.selectedStyles

        if (keywords != "") {
            products = products.filter(el => {
                return el.name.toLowerCase().indexOf(keywords) > -1
            })
        }
        if (rangeDelivery.length) {
            products = products.filter(el => {
                return rangeDelivery.indexOf(el.range_delivery) > -1
            })
        }
        if (selectedStyles.length) {
            products = products.filter(el => {
                return el.furniture_style.some(r => selectedStyles.indexOf(r) > -1)
            })
        }
        return products
    }
}

const actions = {
    beforeEnter: function (_, el) {
        el.style.opacity = 0
        el.style.height = 0
    },
    enter: function (_, el, done) {
        var delay = el.dataset.index * 100
        setTimeout(function () {
            Velocity(el, { opacity: 1 }, { complete: done })
        }, delay)
    }
}

export default {
    namespaced: true,
    getters,
    actions
}