import {
  PERFORMANCE_INCREMENT_SECONDS_ACTIVE,
  PERFORMANCE_DECREMENT_SECONDS_LEFT,
  PERFORMNACE_UPDATE_WORDS_PER_MINUTE,
  PERFORMANCE_UPDATE_ACCURACY,
  PERFORMANCE_UPDATE_SPEED,
} from 'actions/types';

const initialState = {
  secondsActive: 0,
  secondsLeft: 60,
  wordsPerMinute: 0,
  accuracy: 100,
  speed: '',
};

export default function performance(state = initialState, action) {
  switch (action.type) {
    case PERFORMANCE_INCREMENT_SECONDS_ACTIVE:
      return ({
        ...state,
        secondsActive: state.secondsActive + 1,
      });

    case PERFORMANCE_DECREMENT_SECONDS_LEFT:
      return ({
        ...state,
        secondsLeft: state.secondsLeft - 1,
      });

    case PERFORMNACE_UPDATE_WORDS_PER_MINUTE:
      return ({
        ...state,
        wordsPerMinute: action.wordsPerMinute,
      });

    case PERFORMANCE_UPDATE_ACCURACY:
      return ({
        ...state,
        accuracy: action.accuracy,
      });

    case PERFORMANCE_UPDATE_SPEED:
      return ({
        ...state,
        speed: action.speed,
      });

    default:
      return state;
  }
}
