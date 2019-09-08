import React, { Component} from 'react';
import Post, { IPost } from './Post';
import { getPostById } from '../../store/actions/article/postActions';
import { connect } from 'react-redux';


interface IProps {
    onGetPost: Function,
    logged: boolean,
    match: {
        params: {
            id: string
        }
    },
    post: IPost
}

class PostPage extends Component<IProps> {

    componentDidMount = () => {
        const { onGetPost, match: { params: { id } } } = this.props;
        onGetPost(id);
    }
    
    render () {
        const { post, logged } = this.props;
        return (
            <main>
                { post._id && 
                    <Post 
                        post={post}
                        logged={logged}
                    /> 
                }
            </main>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        post: state.article.post,
        logged: state.auth.logged
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onGetPost: (id: string) => dispatch(getPostById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);