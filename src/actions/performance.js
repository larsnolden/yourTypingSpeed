import {
  PERFORMANCE_INCREMENT_SECONDS_ACTIVE,
  PERFORMNACE_UPDATE_WORDS_PER_MINUTE,
  PERFORMANCE_UPDATE_ACCURACY,
  PERFORMANCE_DECREMENT_SECONDS_LEFT,
  PERFORMANCE_UPDATE_SPEED,
  SHOW_FINISH_MODAL,
} from 'actions/types';

const incrementSecondsActive = {
  type: PERFORMANCE_INCREMENT_SECONDS_ACTIVE,
};

const decrementSecondsLeft = {
  type: PERFORMANCE_DECREMENT_SECONDS_LEFT,
};

const updateWordsPerMinute = wordsPerMinute => ({
  type: PERFORMNACE_UPDATE_WORDS_PER_MINUTE,
  wordsPerMinute,
});

const updateAccuracy = accuracy => ({
  type: PERFORMANCE_UPDATE_ACCURACY,
  accuracy,
});

const updateSpeed = speed => ({
  type: PERFORMANCE_UPDATE_SPEED,
  speed,
});

const showFinishModal = show => ({
  type: SHOW_FINISH_MODAL,
  show,
});

const handleTimeProgress = () => (dispatch, getState) => {
  const state = getState();

  //  WPM
  const wordCount = state.textArea.finishedWords.length;
  const { secondsLeft } = state.performance;
  const secondsPassed = 60 - secondsLeft;
  const wordsPerMinute = wordCount < 1 || secondsPassed < 1
    ? 0
    : Math.floor(60 / (secondsPassed / wordCount));

  //  accuracy
  let accuracy = state.textArea.failedCharCount < 1
    ? 100
    : Math.round((1 - state.textArea.failedCharCount / state.textArea.correctCharCount) * 100);

  if (accuracy < 0 || NaN) accuracy = 0;

  let speed = 'very fast';
  if (wordsPerMinute < 20) speed = 'very slow';
  else if (wordsPerMinute < 30) speed = 'slow';
  else if (wordsPerMinute < 40) speed = 'average';
  else if (wordsPerMinute < 60) speed = 'fast';

  if (secondsLeft < 1) {
    dispatch(showFinishModal(true));
    return;
  }
  dispatch(updateWordsPerMinute(wordsPerMinute));
  dispatch(updateAccuracy(accuracy));
  dispatch(updateSpeed(speed));
  dispatch(incrementSecondsActive);
  dispatch(decrementSecondsLeft);
};

export const startTimer = () => (dispatch) => {
  setInterval(() => dispatch(handleTimeProgress()), 1000);
};
