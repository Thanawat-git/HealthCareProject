const initialState = {
    visiId: null,
    peopleId: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'VIS_ID':
        return { visiId: payload[0], peopleId:payload[1] }

    default:
        return state
    }
}
