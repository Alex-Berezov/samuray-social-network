import React, {RefObject as newMessageElement} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {

    let dialogsElems = props.dialogsPage.dialogs.map( dialog => <DialogItem
        image={ dialog.img }
        name={ dialog.name }
        id={ dialog.id }
        key={ dialog.id }
    /> );
    let messagesElems = props.dialogsPage.messages.map( message => <Message
        message={ message.message }
        id={ message.id }
        key={ message.id }
    /> );

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.sendNewMessage();
    };

    let handleMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
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