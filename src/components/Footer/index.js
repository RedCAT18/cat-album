import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
`;

const Content = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Content>Footer</Content>
    </Container>
  );
};

export default Footer;
