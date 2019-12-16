import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    getFollow,
    getUnFollow,
    setCurrentPage,
    getUsers
} from "../../redux/users-reducer";
import Spinner from '../../utilities/loader/spinner';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
        {this.props.isFetching ? <Spinner/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               getFollow={this.props.getFollow}
               getUnFollow={this.props.getUnFollow}
               followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps, {
    getFollow,
    getUnFollow,
    setCurrentPage,
    getUsers
})(UsersContainer);
