import React from 'react';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/with-auth-redirect";
import Dialogs from "./dialogs";
import {
    sendMessageActionCreator
} from "../../redux/dialogs-reducer";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
