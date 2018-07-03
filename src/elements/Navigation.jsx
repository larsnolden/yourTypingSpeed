import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 93px;
  display: flex;
  flex-direcion: row;
  justify-content: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  background: #FFB800;
  color: #fff;
  font-weight: bold;
  font-size: 54px;
  align-items: center
`;

const CenterWrapper = styled.div`
  width: 977px;
`;

export default () => (
  <Wrapper>
    <CenterWrapper>
      Keyboard Racer
    </CenterWrapper>
  </Wrapper>
);
