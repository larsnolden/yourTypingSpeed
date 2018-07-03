import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  border: 3px solid #FFB800;
  padding: 20px 45px 20px 45px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  line-height: 37px;
  background: #fff;
`;

const StyledTextArea = styled.input`
  width: 90%;
  height: 90%;
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
`;

const TextWrapper = styled.div`
  display: block;
`;

const UserInput = styled.span`
  color: #068FBA;
`;

const ErrorInput = styled.span`
  color: #ED0000;
`;

const Cursor = styled.span`
  @keyframes blink {
    from {
      border-color: #fff;
    }

    to: {
      border-color: #000;
    }
  }

  width: 1px;
  height: 1rem;
  border-width: 1px;
  border-style: solid;
  animation-name: blink;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-direction: normal;
  animation-play-state: running;
`;

export default ({
  handleUserInput,
  finishedWords,
  unfinishedWords,
  currentInput,
  nextWord,
  errorChars,
  handleKeyPress,
}) => (
  <Wrapper>
    <StyledTextArea
      onChange={evt => handleUserInput(evt.target.value)}
      onKeyDown={evt => handleKeyPress(evt.keyCode)}
      value=""
    />
    <TextWrapper>
      <UserInput>
        { finishedWords && finishedWords.join(' ') }
        { currentInput && currentInput === [' '] ? ' ' : currentInput.join('') }
      </UserInput>
      <ErrorInput>
        { errorChars && errorChars.join('') }
      </ErrorInput>
      <Cursor />
      <span>
        { nextWord && `${nextWord.join('')} ` }
        { unfinishedWords && unfinishedWords.join(' ') }
      </span>
    </TextWrapper>
  </Wrapper>
);
