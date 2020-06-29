import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {addNewMessageActionCreator, handleMessageChangeActionCreator} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {

    let dialogsElems = props.state.dialogs.map( dialog => <DialogItem name={ dialog.name } id={ dialog.id } /> );
    let messagesElems = props.state.messages.map( message => <Message message={ message.message } /> );

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch( addNewMessageActionCreator() );
        newMessageElement.current.value = '';
    };

    let handleMessageChange = () => {
        let addNewMessage = newMessageElement.current.value;
        props.dispatch( handleMessageChangeActionCreator(addNewMessage) );
    };

    return (
        <section className={classes.dialogs_part}>
            <h2>Dialogs</h2>
            <div className={classes.chat}>
                <div className={classes.dialogs}>
                    { dialogsElems }
                </div>
                <div className={classes.verticalHr}></div>
                <div className={classes.messages}>
                    { messagesElems }

                    <div className={classes.addNewMessage}>
                        <textarea
                            ref={ newMessageElement }
                            placeholder="Write your post here..."
                            value={ props.newMessageText }
                            onChange={ handleMessageChange }
                        />
                    </div>
                    <div className={classes.addNewMessageBtn}>
                        <button onClick={ addNewMessage }>Send</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;