import React from 'react';
import {sendNewMessage, updateNewMessageText} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage
    };
};

export default compose(
    connect(mapStateToProps, {updateNewMessageText, sendNewMessage }),
    withAuthRedirect
)(Dialogs);