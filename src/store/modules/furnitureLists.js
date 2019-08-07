import Velocity from 'velocity-animate'

const getters = {
    products(state, getters, { api, furnitureSearch }) {
        let products = api.furnitureProducts
        let keywords = furnitureSearch.keywords
        if (keywords != "") {
            products = products.filter(el => {
                return keywords
                    ? el.name.toLowerCase().indexOf(keywords) > -1
                    : el
            })
        }
        return {
            products: products,
            outOfStock: products.length === 0 ? true : false
        }
    },
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

const mutations = {
    changeStock(state, bool) {
        state.outOfStock = bool
    }
}

export default {
    namespaced: true,
    getters,
    actions,
    mutations
}