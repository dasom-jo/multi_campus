export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            // const copyState = JSON.parse(JSON.stringify(state));
            // copyState.inputs[action.name] = action.value;
            // return copyState;
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return {
                ...state,
                inputs: {
                    username: '',
                    email: ''
                },
                users: state.users.concat(action.newUser)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? { ...user, active: !user.active } : user
                )
            }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        default:
            return state;
    }
};

export const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        { id: 1, username: '휘인', email: 'whee@gmail.com', active: true },
        { id: 2, username: '화사', email: 'hwa@gmail.com', active: true },
        { id: 3, username: '문별', email: 'star@gmail.com', active: true },
        { id: 4, username: '솔라', email: 'sol@gmail.com', active: true }
    ]
}