import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElems = props.state.dialogs.map( dialog => <DialogItem name={ dialog.name } id={ dialog.id } /> );
    let messagesElems = props.state.message.map( message => <Message message={ message.message } /> );

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
                </div>
            </div>
        </section>
    );
}

export default Dialogs;