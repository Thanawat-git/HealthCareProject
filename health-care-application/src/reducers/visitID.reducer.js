const initialState = {
    visiId: 8,
    peopleId: 9999999000000,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'VIS_ID':
        return { visiId: payload[0], peopleId:payload[1] }

    default:
        return state
    }
}
