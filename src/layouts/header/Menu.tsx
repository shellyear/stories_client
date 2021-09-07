import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Body } from 'styles/typography';

const Highlighted = css`
  background: linear-gradient(to bottom, rgba(216,175,130,1) 0%,
    rgba(214,143,68,1) 47%,
    rgba(167,116,62,1) 100%
  );
  box-shadow: inset 0px 1px 0px rgb(249 214 161 / 90%);
  border: 1px solid #90622e;
  color: var(--white);
`;

const Wrapper = styled.div`
  ${Body}
  display: flex;
  
  .is-active {
    ${Highlighted}
  }
`;

const LinkItem = styled(NavLink)`
  display: block;
  color: var(--header-text);
  text-decoration: none;
  margin-left: 2rem;
  border-radius: 0.3rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid transparent;

  :hover {
    ${Highlighted}
  };
`;

function Menu() {
  return (
    <Wrapper>
      <LinkItem exact activeClassName='is-active' to='/'>Hlavní</LinkItem>
      <LinkItem activeClassName='is-active' to='/share'>Sdílet tajemství</LinkItem>
      <LinkItem activeClassName='is-active' to='/best'>Nejlepší</LinkItem>
      <LinkItem activeClassName='is-active' to='/about'>O projektu</LinkItem> 
    </Wrapper>
  );
};

export default Menu;
