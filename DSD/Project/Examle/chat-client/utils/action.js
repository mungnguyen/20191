export const set = (key, defaultValue) => (state, value) => {
    (state[key] = value || defaultValue)
}

export const setPropertyNestedObject = key => (state, { property, value }) => {
    state[key][property] = value
}

export const add = property => (
    state,
    { newEl, toTopOfList = true, perPage = 20 }
) => {
    if (toTopOfList) state[property].unshift(newEl)
    else state[property].push(newEl)
    if (state[property].length > perPage) state[property].splice(perPage, 1)
}

export const update = key => (state, { value, index }) => {
    if (!Array.isArray(state[key])) {
        return Object.assign(state[key], value)
    }
    if (!index) {
        index = state[key].findIndex(_e => {
            return _e.id === value.id
        })
    }
    if (index >= 0) {
        state[key].splice(index, 1, value)
    }
}

export const remove = property => (state, { id, index }) => {
    if (index !== 0 && !index)
        index = state[property].findIndex(_e => _e.id === id)
    if (index > -1) state[property].splice(index, 1)
}