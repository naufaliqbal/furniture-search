const state = {
    placeholder: "",
    selectedStyles: []
}

const getters = {
    placeholder(state) {
        return state.placeholder
    },
    selectedStyles(state) {
        return state.selectedStyles
    }
}

const actions = {
    expandStyle(_, event) {
        event.target.querySelector('p').classList.add('expanded')
    },
    collapseStyle(_, event) {
        event.target.querySelector('p').classList.remove('expanded')
    },
    selectStyle({commit}, event) {
        let target = event.target
        target.checked ? commit("addStyle", target) : commit("removeStyle", target)
        commit("changePlaceholder")
    }
}

const mutations = {
    addStyle(state, target) {
        let style = target.value
        state.selectedStyles.push(style)
    },
    removeStyle(state, target) {
        let style = target.value
        state.selectedStyles.splice(state.selectedStyles.indexOf(style), 1)        
    },
    changePlaceholder(state) {
        if (state.selectedStyles) state.placeholder = state.selectedStyles.join("; ")
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}