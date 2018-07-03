import {
  TEXT_AREA_DELETE_CHARACKTER,
  TEXT_AREA_INIT,
  TEXT_AREA_UPDATE_CURRENT_INPUT,
  TEXT_AREA_UDATE_NEXT_WORD,
  TEXT_AREA_UPDATE_ERROR_CHARS,
  TEXT_AREA_UPDATE_FINSIHED_WORDS,
  TEXT_AREA_UPDATE_UNFINISHED_WORDS,
  TEXT_AREA_INCREMENT_CORRECT_CHAR_COUNT,
  TEXT_AREA_INCREMENT_FAILED_CHAR_COUNT,
} from 'actions/types';

import { startTimer } from 'actions/performance';

const updateCurrentInput = currentInput => ({
  type: TEXT_AREA_UPDATE_CURRENT_INPUT,
  currentInput,
});

const updateNextWord = nextWord => ({
  type: TEXT_AREA_UDATE_NEXT_WORD,
  nextWord,
});

const updateErrorChars = errorChars => ({
  type: TEXT_AREA_UPDATE_ERROR_CHARS,
  errorChars,
});

const updateFinishedWords = finishedWords => ({
  type: TEXT_AREA_UPDATE_FINSIHED_WORDS,
  finishedWords,
});

const updateUnfinishedWords = unfinishedWords => ({
  type: TEXT_AREA_UPDATE_UNFINISHED_WORDS,
  unfinishedWords,
});

const incrementCorrectCharCount = {
  type: TEXT_AREA_INCREMENT_CORRECT_CHAR_COUNT,
};

const incremenetFailedCharCount = {
  type: TEXT_AREA_INCREMENT_FAILED_CHAR_COUNT,
};

const finishWord = () => (dispatch, getState) => {
  const {
    currentInput,
    finishedWords,
    unfinishedWords,
  } = getState().textArea;

  dispatch(updateFinishedWords(finishedWords.concat(currentInput.join(''))));

  // clear current Input
  dispatch(updateCurrentInput([]));

  // set next word with space in front
  const updatedNextWord = [' '].concat(unfinishedWords[0].split(''));
  dispatch(updateNextWord(updatedNextWord));

  // remove first word
  const updatedUnfinishedWords = unfinishedWords.slice(1);
  dispatch(updateUnfinishedWords(updatedUnfinishedWords));
  // move currentInput to finished Words
  // move first unfinished Words to next Word with space in front
};

export const handleUserInput = input => (dispatch, getState) => {
  const {
    nextWord,
    currentInput,
    errorChars,
    finishedWords,
  } = getState().textArea;
  // first typed char
  if (finishedWords.length < 1 && currentInput.length < 1) dispatch(startTimer());

  if (input === nextWord[0] && errorChars.length === 0) {
    // move char from next Word to currentInput
    const updatedCurrentInput = currentInput ? currentInput.concat(input) : [input];
    dispatch(updateCurrentInput(updatedCurrentInput));

    //  remove first char
    const updatedNextWord = nextWord.slice(1);
    dispatch(updateNextWord(updatedNextWord));

    // track accuracy
    dispatch(incrementCorrectCharCount);

    if (updatedNextWord.length === 0) dispatch(finishWord());
  } else {
    // track accuracy
    dispatch(incremenetFailedCharCount);

    // add char to error chars
    const updatedErrorChars = errorChars ? errorChars.concat(input) : [input];
    dispatch(updateErrorChars(updatedErrorChars));
  }
};

const deleteCharackter = {
  type: TEXT_AREA_DELETE_CHARACKTER,
};

export const handleKeyPress = keyCode => (dispatch) => {
  if (keyCode === 8) dispatch(deleteCharackter);
};

export const textAreaInit = () => ({
  type: TEXT_AREA_INIT,
  testText: 'Modern particle physics research is focused on subatomic particles, including atomic constituents such as electrons, protons, and neutrons (protons and neutrons are composite particles called baryons, made of quarks), produced by radioactive and scattering processes, such as photons, neutrinos, and muons, as well as a wide range of exotic particles. Dynamics of particles is also governed by quantum mechanics; they exhibit wave–particle duality, displaying particle-like behaviour under certain experimental conditions and wave like behaviour in others. In more technical terms, they are described by quantum state vectors in a Hilbert space, which is also treated in quantum field theory. Following the convention of particle physicists, the term elementary particles is applied to those particles that are, according to current understanding, presumed to be indivisible and not composed of other particles'.split(' '),
});
