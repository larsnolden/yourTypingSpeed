import React from 'react';
import styled from 'styled-components';
import FinishModal from 'elements/FinishModal/containers/FinishModal';

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.52);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FinisModalWrapper = styled.div`
  margin-top: 120px;
`;

export default () => (
  <Background>
    <FinisModalWrapper>
      <FinishModal />
    </FinisModalWrapper>
  </Background>
);
