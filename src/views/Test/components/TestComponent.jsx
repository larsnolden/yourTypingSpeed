import React from 'react';
import styled from 'styled-components';
import SpeedTest from 'elements/SpeedTest';
import Navigation from 'elements/Navigation';
import FinishModalWithBackground from 'elements/FinishModal/components/FinishModalWithBackground';

const Wrapper = styled.div`
  background: #579AFF;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: ${({ showModal }) => (showModal ? 'hidden' : 'visible')};
`;

const SpeedTestWrapper = styled.div`
  margin: 100px 0 100px 0;
  max-width: 977px;
`;

export default ({
  showFinishModal,
}) => (
  <Wrapper
    showModal={showFinishModal}
  >
    <Navigation />
    {showFinishModal && <FinishModalWithBackground />}
    <SpeedTestWrapper>
      <SpeedTest />
    </SpeedTestWrapper>
  </Wrapper>
);
