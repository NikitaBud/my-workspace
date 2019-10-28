let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: true, name: 'Maria', textStatus: 'i happy', location: {country: 'Germany', city: 'Kassel'} },
        {id: 2, followed: false, name: 'Roman', textStatus: 'I am a tracker', location: {country: 'Russia', city: 'N-Chelny'} },
        {id: 3, followed: true, name: 'Dima', textStatus: 'working', location: {country: 'Russia', city: 'Kazan'} },
        {id: 4, followed: false, name: 'John', textStatus: 'I like bike', location: {country: 'Germany', city: 'Kassel'} }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users ]
            }
        default:
            return  state;
    }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (userId) => ({type: SET_USERS, userId});

export default usersReducer;