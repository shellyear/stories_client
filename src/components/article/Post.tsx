import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { likePostAct } from '../../store/actions/article/postsActions';
import moment from 'moment';
import styled from 'styled-components';
import { Body } from 'styles/typography';


export interface IPost {
  _id: string;
  likes: string[],
  content: string,
  author: string,
  createdAt: Date
}

interface IProps {
  post: IPost,
  onLikeAct: (type: string, id: string) => void,
  user: { _id: string },
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
  ${Body}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const Text = styled.p`
  padding: 3px;
  font-size: 12px;
  margin: 0;
  word-wrap: break-word;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 5px 0px; 
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Post ({ post, onLikeAct }: IProps) {  
  return (
    <Wrapper>
        <Header>
          <h5><Link to={`/post/${post._id}`} className='post-link'>#{ post._id }</Link></h5>
          <h5>{ moment(post.createdAt).format('LLL') }</h5>
        </Header>
        <Text>{post.content}</Text>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.auth.user
});

const mapDispatchToProps = (dispatch: any) => ({
  onLikeAct: (type: string, id: string) => dispatch(likePostAct(type, id))
});
    
export default connect(mapStateToProps, mapDispatchToProps)(Post);



