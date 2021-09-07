import React, { useEffect } from 'react';
import Post, { IPost } from './Post';
import { getPostById } from '../../store/actions/article/postActions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getPosts } from '../../store/actions/article/postsActions';


interface IProps {
  getPosts: Function,
  match: { params: { id: string } },
  allPosts: IPost[],
  pageData: {
    currentPage: number,
    totalAmount: number,
    perPage: number,
  },
  history: { push: Function }
  location: { search: string },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
`;

function Posts ({ 
  allPosts, 
  getPosts, 
  history,
  location,
  pageData,
}: IProps) {

  useEffect(() => {
    document.title = 'Main page - STORIES';
    // loadPage();
  });
  
  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) 
    loadPage();
  }, []);

  const loadPage = () => {    
    const parsed = queryString.parse(location.search, { parseNumbers: true });
    const page = parsed.page || pageData.currentPage;
    // history.push({
    //   pathname: '/',
    //   search: `?page=${page}`
    // });
    getPosts(pageData.perPage, page);
  };
  
  return (
    <Container>
      {allPosts.map((post: IPost) => (
        <Post 
          post={post}
        /> 
      ))}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.article.allPosts.isLoading,
	allPosts: state.article.allPosts.posts,
  pageData: state.paginator.mainPosts,
  logged: state.auth.logged,
});

const mapDispatchToProps = (dispatch: any) => ({
  getPosts: (perPage: number, page: number) => dispatch(getPosts(perPage, page)),
  onGetPost: (id: string) => dispatch(getPostById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);