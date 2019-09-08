import React, { Component } from 'react';
import Paginator from './Paginator';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/article/postsActions';
import Post, { IPost } from './article/Post';


interface IProps {
    getPosts: Function,
    setCurrentPage: Function,
    logged: boolean,
    posts: [],
    pageData: {
        currentPage: number,
        totalAmount: number,
        perPage: number
    },
    history: {
        push: Function
    }
    location: {
        search: string
    }
}

class Main extends Component<IProps> {

    componentDidMount = () => {
        document.title = 'Main page - STORIES';
        this.loadPage();
    }
    
    componentDidUpdate = (prevProps: IProps) => {
        if (prevProps.pageData.currentPage !== this.props.pageData.currentPage) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) 
            this.loadPage();
        }
    }

    loadPage = () => {    
        const { getPosts, history, location: { search }, pageData: { currentPage, perPage } } = this.props;
        const parsed = queryString.parse(search, { parseNumbers: true });
        const page = parsed.page || currentPage;
        
        history.push({
          pathname: '/',
          search: `?page=${page}`
        })
        
        getPosts(perPage, page);
    }

    render() { 
        const { posts, logged, pageData: { totalAmount, currentPage, perPage } } = this.props;
        
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
                <Paginator
                    meta={'mainPosts'}
                    totalAmount={totalAmount}
                    currentPage={currentPage}
                    perPage={perPage}
                />
            </main>
        )
    }

}


const mapStateToProps = (state: any) => {
    return {
        loading: state.article.allPosts.isLoading,
        posts: state.article.allPosts.posts,
        pageData: state.paginator.mainPosts,
        logged: state.auth.logged
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPosts: (perPage: number, page: number) => dispatch(getPosts(perPage, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);