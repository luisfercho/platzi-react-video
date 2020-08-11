const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            const result = state.myList.filter(item => item.id === action.payload.id);
            return result.length > 0 ? state : {
                ...state,
                myList: [
                    ...state.myList,
                    action.payload
                ]
            }
            break;
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
            break;
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer;