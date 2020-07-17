import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength1500, minLength2} from "../../utils/validators/validators";

const AddNewMessageForm = props => {
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.addNewMessage}>
                <Field
                    component={Textarea}
                    type='textarea'
                    name='newMessageText'
                    label='Write your message here...'
                    validate={[maxLength1500, minLength2]}
                />
            </div>
            <div className={classes.addNewMessageBtn}>
                <button type='submit'>Send</button>
            </div>
        </form>
    );
}

const AddNewMessageReduxForm = reduxForm({form: 'dialogAddNewMessageForm'})(AddNewMessageForm);

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

    const addNewMessage = (values) => {
        props.sendNewMessage(values.newMessageText);
    }

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
                    <AddNewMessageReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
        </section>
    );
}

export default Dialogs;