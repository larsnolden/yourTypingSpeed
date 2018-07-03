import {
  SHOW_FINISH_MODAL,
} from 'actions/types';

const initialState = {
  showFinishModal: false,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_FINISH_MODAL:
      return ({
        ...state,
        showFinishModal: action.show,
      });

    default:
      return state;
  }
}
