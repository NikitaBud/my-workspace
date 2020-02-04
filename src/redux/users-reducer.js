import {usersAPI} from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
let TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
let TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOOGLE_IS_FOLLOWING_PROGRESS:   
        debugger
        return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return  state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUsersCount});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const toogleFollowingProgress = (isFetching, userId) => ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize).then(response => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    }
}

export const getUnFollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    return dispatch(unfollow(userId));
                }
                dispatch(toogleFollowingProgress(false, userId));
            });
    }
}

export const getFollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    return dispatch(follow(userId));
                }
                dispatch(toogleFollowingProgress(false, userId));
                });
    }
}

export default usersReducer;
