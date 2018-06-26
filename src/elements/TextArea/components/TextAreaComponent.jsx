import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.input`
  width: 100%;
  height: 20px;
`;

const TextWrapper = styled.div`
  display: block;
`;

const UserInput = styled.span`
  color: blue;
`;

export default ({
  handleUserInput,
  testText,
  userInput,
  handleKeyPress,
}) => (
  <div>
    <StyledTextArea
      onChange={evt => handleUserInput(evt.target.value)}
      onKeyDown={evt => handleKeyPress(evt.keyCode)}
      value=""
    />
    <TextWrapper>
      <UserInput>
        { userInput }
      </UserInput>
      <span>
        { testText }
      </span>
    </TextWrapper>
  </div>
);
