import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getUsersLikedPosts } from '../store/actions/article/postsLikedByUserActions';
import Post, { IPost } from './article/Post';
 

interface IProps {
    onGetUsersLikedPosts: Function,
    posts: []
    logged: boolean
}

class Profile extends Component<IProps> {

    componentDidMount = () => {
        const { onGetUsersLikedPosts } = this.props;
        onGetUsersLikedPosts();
    }

    render () {
        const { logged, posts } = this.props;
        if (!logged) return <Redirect to='/' />
        return (
            <main>
                <div className="articles">
                    { posts && posts.map((post: IPost) => (
                        <Post 
                            post={post}
                            logged={logged} 
                            key={post._id} 
                        />
                    )) }
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        logged: state.auth.logged,
        posts: state.article.userLikedPosts.posts
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onGetUsersLikedPosts: () => dispatch(getUsersLikedPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);