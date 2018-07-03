import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #FFB800;
  display: flex;
  flexdirection: row;
  font-weight: normal;
  line-height: 75px;
  font-size: 38px;
  padding: 20px 45px 20px 45px;
  color: #fff;
  justify-content: space-between;
`;

const Number = styled.div`
  background: #068FBA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 55px;
  padding: 10px;
  margin-left: 15px;
  min-width: 80px;
  text-align: center;
`;

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ({
  secondsLeft,
  wordsPerMinute,
  accuracy,
}) => (
  <Wrapper>
    <NumberWrapper>
      Accuracy
      <Number>
        {accuracy}
        %
      </Number>
    </NumberWrapper>
    <NumberWrapper>
      WPM
      <Number>
        {wordsPerMinute}
      </Number>
    </NumberWrapper>
    <NumberWrapper>
      Timer
      <Number>
        {secondsLeft}
      </Number>
    </NumberWrapper>
  </Wrapper>
);
