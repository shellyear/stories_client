import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { getUsersLikedPosts } from '../store/actions/article/postsLikedByUserActions';
import Post, { IPost } from './article/Post';
import styled from 'styled-components';
 

interface ProfileProps {
  onGetUsersLikedPosts: Function,
  posts: []
  logged: boolean
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: static;
`;

function Profile ({ 
  posts,
  logged, 
  onGetUsersLikedPosts,
}: ProfileProps) {
    useEffect(() => {
      onGetUsersLikedPosts();
    });

    if (!logged) return <Redirect to='/' />
    return (
      <Container>
        {posts && posts.map((post: IPost) => (
            <Post 
              post={post}
              key={post._id} 
            />
        ))}
      </Container>
    );
};

const mapStateToProps = (state: any) => ({
  logged: state.auth.logged,
  posts: state.article.userLikedPosts.posts
});

const mapDispatchToProps = (dispatch: any) => ({
  onGetUsersLikedPosts: () => dispatch(getUsersLikedPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);