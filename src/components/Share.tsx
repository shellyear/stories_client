import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
    sharePost,
    clearSharePostError,
    clearSharePostMessage
} from '../store/actions/article/postShareActions';


interface IProps {
    onSharePost: Function,
    onClearErr: Function,
    onClearMsg: Function,
    logged: boolean,
    err: string,
    msg: string
}

interface IState {
    [x: string]: string 
}

class Share extends Component<IProps, IState> {
    
    state: IState = {
        content: "" 
    }

    componentWillUnmount = () => {
        const { onClearErr, onClearMsg} = this.props;
        onClearErr();
        onClearMsg();        
    }   
    
    componentDidMount = () => {
        document.title = 'Share story - STORIES';
    }
    
    handleSubmit = (e: any) => {
        e.preventDefault();
        const { onSharePost } = this.props;
        onSharePost(this.state);
        this.setState({
            content: ''
        });
    }
    
    handleChange = (e: any) => {
        this.setState({
            [e.target.id]: e.target.value 
        });
    }
    
    render() {
        const { logged, err, msg } = this.props;

        return (
            <main>
                <article className="share-page">
                    <div className="textarea-control">
                        <form onSubmit={this.handleSubmit}>
                            { logged 
                                ?
                                <label className="textarea-label" htmlFor="story">Tell us your story</label>
                                : 
                                <p className="textarea-label">Please log in to share your story</p>
                            }
                            <textarea
                                id="content"
                                cols={45}
                                rows={15}
                                disabled={!logged}
                                placeholder='It was a dark and stormy night...'
                                onChange={this.handleChange}
                                value={ this.state.content }                        
                                autoFocus
                                required
                            />
                        {msg &&  <p className="form-msg">{msg}</p> }
                        {err && <p className="form-error">{err}</p> }
                        <div className="btn-group">
                            <button
                                className='btn-submit' 
                                disabled={!logged}>
                                Send
                            </button>
                        </div>
                        </form>
                    </div>
                    <div className="textarea-rules">
                        <ul className="rules">
                            <li>Write correctly</li>
                            <li>Write something non-standart</li>
                            <li>Write with humour</li>
                            <li>Write sincerely</li>
                        </ul>
                    </div>
                </article>
            </main>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        logged: state.auth.logged,
        err: state.article.sharePost.err,
        msg: state.article.sharePost.msg
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSharePost: (text: string) => dispatch(sharePost(text)),
        onClearErr: () => dispatch(clearSharePostError()),
        onClearMsg: () => dispatch(clearSharePostMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Share);
