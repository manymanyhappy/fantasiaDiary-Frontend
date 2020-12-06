import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ImageWrapper = styled.div`
  display: flex;
  width: 160px;
  height: 140px;
  img {
    display: flex;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    opacity: 70%;
  }
`;

const MyFantasiaButton = () => {
  const history = useHistory();

  const onChangeMyFantasia = () => {
    history.push('/myFantasia');
  };

  return (
    <ImageWrapper onClick={onChangeMyFantasia}>
      <img src='/images/door.png' alt='door'/>
    </ImageWrapper>
  );
};

export default MyFantasiaButton;
