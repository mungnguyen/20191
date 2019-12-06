import { set } from '@/utils/action'

export const state = () => {
    return {
        api: {
            room: '/api/room'
        },
        roomList: []
    }
}

export const mutations = {
    SET_ROOM_LIST: set('roomList')
}

export const actions = {
    async getAllRoom({ state, commit }, userId) {
        const { room } = state.api

        try {
            const data = await this.$axios.$get(`${room}/${userId}`)

            commit('SET_ROOM_LIST', data)
        } catch (err) {
            console.log('login', err)
        }
    },
}