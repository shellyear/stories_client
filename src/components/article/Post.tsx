import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { likePostAct } from '../../store/actions/article/postsActions';
import moment from 'moment';


export interface IPost {
    _id: string;
    likes: string[],
    content: string,
    author: string,
    createdAt: Date
}

interface IProps {
    post: IPost,
    onLikeAct: Function,
    logged: boolean,
    user: {
        _id: string
    }
}

const Post: React.SFC<IProps> = ({ post, logged, onLikeAct, user }) => { 
    const hasLike = post.likes.includes(user._id); 
    return (
        <article className="post">
            <section className="post-header">
                <h5><Link to={`/post/${post._id}`} className='post-link'>#{ post._id }</Link></h5>
                <h5>{ moment(post.createdAt).format('LLL') }</h5>
            </section>
            <p className="post-content">
                { post.content }
            </p>
            <section className="post-footer">
                <div className="like-btn-group">
                    { hasLike ?
                        <div className={`btn-unlike ${ logged ? '' : 'disabled' }`} onClick={() => onLikeAct('UNLIKE', post._id) }>
                            <img src={'/liked.svg'} alt="liked_icon"/>
                        </div>
                        : 
                        <div className={`btn-like ${ logged ? '' : 'disabled' }` } onClick={() => onLikeAct('LIKE', post._id) }>
                            <img src={'/notLiked.svg'} alt="not_liked_icon"/>  
                        </div>
                    }
                    <span className="likes-summary">{ post.likes.length }</span>
                </div>
            </section>
        </article>
    )
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLikeAct: (type: string, id: string) => dispatch(likePostAct(type, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);



