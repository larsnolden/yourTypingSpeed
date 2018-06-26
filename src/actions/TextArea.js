import {
  TEXT_AREA_HANDLE_USER_INPUT,
  TEXT_AREA_DELETE_CHARACKTER,
} from 'actions/types';

export const handleUserInput = input => ({
  type: TEXT_AREA_HANDLE_USER_INPUT,
  input,
});

const deleteCharackter = {
  type: TEXT_AREA_DELETE_CHARACKTER,
};

export const handleKeyPress = keyCode => (dispatch) => {
  if (keyCode === 8) dispatch(deleteCharackter);
};
