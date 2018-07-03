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

const initialState = {
  finishedWords: [],
  unfinishedWords: [],
  nextWord: [],
  currentInput: [],
  errorChars: [],
  correctCharCount: 0,
  failedCharCount: 0,
};

export default function textArea(state = initialState, action) {
  switch (action.type) {
    case TEXT_AREA_INIT:
      return ({
        ...state,
        unfinishedWords: action.testText.slice(1),
        nextWord: action.testText[0].split(''),
      });

    case TEXT_AREA_DELETE_CHARACKTER:
      return ({
        ...state,
        errorChars: state.errorChars.slice(0, -1),
      });

    case TEXT_AREA_UPDATE_CURRENT_INPUT:
      return ({
        ...state,
        currentInput: action.currentInput,
      });

    case TEXT_AREA_UDATE_NEXT_WORD:
      return ({
        ...state,
        nextWord: action.nextWord,
      });

    case TEXT_AREA_UPDATE_ERROR_CHARS:
      return ({
        ...state,
        errorChars: action.errorChars,
      });

    case TEXT_AREA_UPDATE_FINSIHED_WORDS:
      return ({
        ...state,
        finishedWords: action.finishedWords,
      });

    case TEXT_AREA_UPDATE_UNFINISHED_WORDS:
      return ({
        ...state,
        unfinishedWords: action.unfinishedWords,
      });

    case TEXT_AREA_INCREMENT_CORRECT_CHAR_COUNT:
      return ({
        ...state,
        correctCharCount: state.correctCharCount + 1,
      });

    case TEXT_AREA_INCREMENT_FAILED_CHAR_COUNT:
      return ({
        ...state,
        failedCharCount: state.failedCharCount + 1,
      });

    default:
      return state;
  }
}
