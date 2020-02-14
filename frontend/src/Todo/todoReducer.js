const initial_State ={ description: '', list: [] }

export default (state = initial_State, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGE':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            return {...state, list: action.payload}
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}