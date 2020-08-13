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
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends
                            .find(item => item.id === Number(action.payload)) || 
                         state.originals
                            .find(item => item.id === Number(action.payload)) ||
                         []

            }
        case 'SEARCH_VIDEO':
            let data = [];
            if(action.payload != ""){
                data = state.trends.concat(state.originals)
                                    .filter((item) => item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1 )
            }
            return {
                ...state,
                search: data || []
            }
        default:
            return state;
            break;
    }
}

export default reducer;