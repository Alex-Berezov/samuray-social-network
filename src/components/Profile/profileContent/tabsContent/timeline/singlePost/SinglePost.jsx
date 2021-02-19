import React from 'react';
import classes from './SinglePost.module.css';
import LukeSkywalker from '../../../../../../assets/img/LukeSkywalker.jpg';
import CommentsContentHeader from "./commentsContentHeader/CommentsContentHeader";
import CommentsContent from "./commentsContent/CommentsContent";
import CommentsAddComment from "./commentsAddComment/CommentsAddComment";

const SinglePost = props => (
    <div className={classes.single_post}>
        <div className={classes.single_post_header}>
            <div className={classes.single_post_header_foto}>
                <img src={LukeSkywalker} alt="LukeSkywalker"/>
            </div>
            <div className={classes.single_post_header_title}>
                <h6>{props.name}</h6>
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
                <i className="far fa-thumbs-up" />
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

        <hr/>

        <div className={classes.comments_area}>
            <div className={classes.single_comments}>
                <CommentsContentHeader />
                <CommentsContent />
                <CommentsAddComment />
            </div>
        </div>
    </div>
);

export default SinglePost;