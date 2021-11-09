
export const state = () => ({
    user: {}
})

export const getters = {
    userId (state) {
        return (state.user.id || 0)
    },
    userName (state) {
        return (state.user.name || '')
    },
    userLogado (state) {
        return (state.user.logado || false)
    },
}

export const mutations = {
    'SET_LOGADO' (state, payload) {
        state.user = { ...payload }
    },
}

export const actions = {
    'GET_USER' ({ commit }, payload) {
        setTimeout(() => {
        const userLogado = {"id" : 0, "name" : payload.name, "logado" : true }    
        commit('SET_USER', userLogado)
        }, 1000)
    }
}