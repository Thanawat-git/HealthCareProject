const initialState = {
    visiId: 8
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'VIS_ID':
        return { visiId: payload }

    default:
        return state
    }
}
