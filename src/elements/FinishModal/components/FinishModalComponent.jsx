import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 824px;
  background: #FFB800;
  color: #fff;
  padding: 20px 45px 45px 45px;
`;

const Header = styled.div`
  line-height: 112px;
  font-size: 72px;
  font-weight: 500;
  align-self: center;
`;

const Number = styled.div`
  background: #068FBA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 55px;
  padding: 10px;
  margin-left: 30px;
  min-width: 80px;
  text-align: center;
`;

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 15px;
  align-items: center;
`;

const Button = styled(Number)`
  cursor: pointer;
  user-select: none;
  margin: 0;
`;

const Hr = styled.div`
  height: 0px;
  border: 1.5px solid #fff;
  width: 100%;
  margin: 20px 0 20px 0;
`;

export default ({
  accuracy,
  wordsPerMinute,
  speed,
  handleRestartClick,
}) => (
  <Wrapper>
    <Header>
      Finished!
    </Header>
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
    <Hr />
    <NumberWrapper>
      Your typing speed is
      <Number>
        {speed}
      </Number>
    </NumberWrapper>
    <Hr />
    <Button
      onClick={handleRestartClick}
    >
      TRY AGAIN
    </Button>
  </Wrapper>
);
