import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { api } from '../api/index';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 768px;
  margin: 80px auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  padding: 40px;
`;

const Text = styled.div`
  padding: 40px;
  margin-top: 40px;
`;

const Sentence = styled.p`
  margin-bottom: 10px;
  font-weight: 100;
  font-size: 18px;
  line-height: 1.8;
`;

const Images = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 18%;
  max-height: 150px;
  height: auto;
  margin: 10px;
`;

const About = () => {
  const [images, setImages] = useState([]);

  const fetchData = async num => {
    await api.getRandomImages(num).then(res => {
      setImages(res);
    });
  };

  useEffect(() => {
    fetchData(5);
  }, []);

  return (
    <Container>
      <Title>
        <h1>About</h1>
      </Title>
      <Text>
        <Sentence>
          This web is for cat lovers. <br />
          Do you love cats? Come and join! This is perfect place for you :){' '}
          <br />
          You can see just random cat photos, or search your favorite cat
          photos.
        </Sentence>
      </Text>
      <Images>
        {images ? (
          images.map(img => <Image src={img.url} key={img.id} alt="Kitty" />)
        ) : (
          <img src="./assets/reload.svg" alt="loading" />
        )}
      </Images>
    </Container>
  );
};

export default About;
