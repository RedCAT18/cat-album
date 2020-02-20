import React, { useState, useEffect } from 'react';
import { api } from '../api/index';

import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;
const ImageBox = styled.div`
  max-width: 1024px;
  max-height: 600px;
  overflow: hidden;
  margin: 80px auto;
`;

const Image = styled.img`
  width: 100%;
`;

const Home = () => {
  const [images, setImages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    await api.getRandomImages().then(res => {
      setImages(res[0]);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const renderImage = () => {
    return isLoading ? null : (
      <Image src={images.url} alt="Today's random cat" />
    );
  };

  return (
    <ImageContainer>
      <ImageBox>{renderImage()}</ImageBox>
    </ImageContainer>
  );
};

export default Home;
