const initialState = {
    visiId: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'VIS_ID':
        return { visiId: payload }

    default:
        return state
    }
}
