import React, { useState, useEffect } from 'react';
import { api } from '../api/index';

import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: auto;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 720px;
  max-width: 1024px;
  margin: 80px auto;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  background-image: url(${props => props.image});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  h1 {
    color: white;
    font-size: 140px;
    font-weight: 700;
    opacity: 0.5;
    margin-bottom: 20px;
  }
`;

const Home = () => {
  const [images, setImages] = useState({});

  const fetchData = async () => {
    await api.getRandomImage().then(res => {
      setImages(res[0]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ImageContainer>
      {images ? (
        <ImageBox image={images?.url}>
          <h1>CAT ALBUM</h1>
        </ImageBox>
      ) : (
        <img src="./assets/reload.svg" alt="loading" />
      )}
    </ImageContainer>
  );
};

export default Home;
