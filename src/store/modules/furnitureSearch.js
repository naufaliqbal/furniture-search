const state = {
    keywords: ""
}

const getters = {
    keywords(state) {
        return state.keywords
    }
}

const actions = {
    inputKeywords({commit}, event) {
        let keywords = event.target.value
        commit("changeKeywordsState", keywords)
    }
}

const mutations = {
    changeKeywordsState(_, keywords) {
        state.keywords = keywords
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}