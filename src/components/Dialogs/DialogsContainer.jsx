import React from 'react';
import {addNewMessageActionCreator, handleMessageChangeActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch( handleMessageChangeActionCreator(text) );
        },
        sendNewMessage: () => {
            dispatch( addNewMessageActionCreator() );
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;