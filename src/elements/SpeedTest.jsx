import React from 'react';
import styled from 'styled-components';
import UserPerformance from 'elements/UserPerformance/containers/UserPerformance';
import TextArea from 'elements/TextArea/containers/TextArea';

const Wrapper = styled.div`
  max-width: 977px;
`;

export default () => (
  <Wrapper>
    <UserPerformance />
    <TextArea />
  </Wrapper>
);
