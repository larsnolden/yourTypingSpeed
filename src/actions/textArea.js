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
  testText: 'Predictive text is an input technology used where one key or button represents many letters, such as on the numeric keypads of mobile phones and in accessibility technologies. Each key press results in a prediction rather than repeatedly sequencing through the same group of "letters" it represents, in the same, invariable order. Predictive text could allow for an entire word to be input by single keypress. Predictive text makes efficient use of fewer device keys to input writing into a text message, an email, an address book, a calendar, and the like. There are many ways to build a device that predicts text, but all predictive text systems have initial linguistic settings that offer predictions that are prioritized to adapt to each user. This learning adapts, by way of the device memory, to a user disambiguating feedback that results in corrective key presses, such as pressing a "next" key to get to the intention. Most predictive text systems have a user database to facilitate this process.'.split(' '),
});
