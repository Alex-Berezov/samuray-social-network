import React from 'react';
import classes from './CreatePost.module.css';
import LukeSkywalker from '../../../../../../assets/img/LukeSkywalker.jpg';
import {Field, reduxForm} from "redux-form";
import {maxLength1500, minLength2, required} from "../../../../../../utils/validators/validators";
import {Textarea} from "../../../../../common/FormsControls/FormsControls";

const createNewPostForm = props => {
    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.input_text}>
                <div className={classes.profileAva}>
                    <img src={LukeSkywalker} alt="LukeSkywalker" />
                </div>
                <Field
                    component={Textarea}
                    type='textarea'
                    name='newPostText'
                    label='Write your post here...'
                    validate={[maxLength1500, minLength2]}
                />
            </div>
            <hr />
            <div className={classes.btns}>
                <button type={'submit'}>Post</button>
            </div>
        </form>
    );
}

const AddNewPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(createNewPostForm);

const CreatePost = (props) => {

    const addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.create_post}>
            <div className={classes.create_post_header}>
                <h5>Create post</h5>
            </div>
            <hr />
            <AddNewPostReduxForm onSubmit={addPost} />
        </div>
    );
}

export default CreatePost;