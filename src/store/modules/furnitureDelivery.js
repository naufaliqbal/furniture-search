const state = {
    rangeDelivery: ['1 week', '2 weeks', '1 month', 'more'],
    placeholder: '',
    selectedRange: []
}

const getters = {
    rangeDelivery: (state) => {
        return state.rangeDelivery
    },
    placeholder:(state) => {
        return state.placeholder
    }
}

const actions = {
    selectRange({commit}, event) {
        let target = event.target
        target.checked ? commit("addRange", target) : commit("removeRange", target)
        commit("changePlaceholder")
    },
    expandStyles(_, event) {
        event.target.querySelector("p").classList.add("expanded")
    },
    collapseStyle(_, event) {
        event.target.querySelector("p").classList.remove("expanded")
    }
}

const mutations = {
    changePlaceholder(state) {
       if (state.selectedRange) state.placeholder = state.selectedRange.join("; ")
    },
    addRange(state, target) {
        let range = target.value
        state.selectedRange.push(range)
    },
    removeRange(state, target) {
        let range = target.value
        state.selectedRange.splice(state.selectedRange.indexOf(range), 1) 
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}