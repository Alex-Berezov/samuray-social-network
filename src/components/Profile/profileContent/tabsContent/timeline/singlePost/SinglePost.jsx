import React from 'react';
import classes from './SinglePost.module.css';
import SinglePostCommentsArea from './singlePostCommentsArea/SinglePostCommentsArea';
import LukeSkywalker from '../../../../../../assets/img/LukeSkywalker.jpg';

const SinglePost = (props) => {

    return (
        <div className={classes.single_post}>
            <div className={classes.single_post_header}>
                <div className={classes.single_post_header_foto}>
                    <a href="#">
                        <img src={LukeSkywalker} alt="LukeSkywalker" />
                    </a>
                </div>
                <div className={classes.single_post_header_title}>
                    <h6><a href="#">{ props.name }</a></h6>
                    <p className={classes.post_date}>XX hour ago</p>
                </div>
            </div>
            <div className={classes.single_post_content}>
                <p id={props.id}>
                    {props.post}
                </p>
            </div>
            <div className={classes.single_post_info}>
                <div className={classes.likes}>
                    <i className="far fa-thumbs-up"></i>
                    <p>{props.likes} likes</p>
                </div>
                <div className={classes.comments}>
                    <p>{props.comments} comment</p>
                </div>
                <div className={classes.share}>
                    <i className="fas fa-share-alt"></i>
                    <p>{props.share} Share</p>
                </div>
            </div>

            <hr />
        </div>
    );
}

export default SinglePost;