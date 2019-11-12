import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import Spinner from '../pre-loader/spinner';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <>
            { this.props.isFetching ? <Spinner/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreater(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreater(totalCount));
        },
        toogleIsFetching: (isFetching) => {
            dispatch(toogleIsFetchingActionCreater(isFetching))
        }
    }
} */

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching
})(UsersContainer);