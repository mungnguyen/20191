import {
    set
} from '@/utils/action'

export const state = () => {
    return {
        api: {
            login: '/api/login'
        },
        user: {}
    }
}

export const mutations = {
    SET_USER: set('user')
}

export const actions = {
    async login({ state, commit }, user) {
        const res = { isSuccess: false, user: null }
        const { login } = state.api

        try {
            const data = await this.$axios.$post(login, user)

            commit('SET_USER', data)
            res.isSuccess = true
            res.user = data
        } catch (err) {
            console.log('login', err)
        }
        return res
    },

}