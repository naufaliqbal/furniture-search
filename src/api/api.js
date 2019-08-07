const state = {
    furnitureStyles: [],
    furnitureProducts: []
}

const getters = {
    furnitureProducts(state) {
        return state.furnitureProducts
    },
    furnitureStyles(state) {
        return state.furnitureStyles
    }
}

const mutations = {
    setFurnitureStates(state, payload) {
        state.furnitureProducts = payload.products.map(el => {
            if (+el.delivery_time <= 7) {
                el['range_delivery'] = '1 week'
            } else if (+el.delivery_time > 7 && +el.delivery_time <= 14) {
                el['range_delivery'] = '2 weeks'
            } else if (+el.delivery_time > 14 && +el.delivery_time <= 30) {
                el['range_delivery'] = '1 month'
            } else {
                el['range_delivery'] = 'more'
            }
            return el
        })
        state.furnitureStyles = payload.furniture_styles
    }
}

const actions = {
    async getFurnitureData({ dispatch, commit }) {
        const payload = await dispatch("fetchApi")
        commit("setFurnitureStates", payload)
    },
    async fetchApi() {
        return fetch('https://www.mocky.io/v2/5c9105cb330000112b649af8')
            .then(response => response.json())
            .then(data => data)
            .catch(Error("api error"))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}