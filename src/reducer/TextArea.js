import {
  TEXT_AREA_HANDLE_USER_INPUT,
  TEXT_AREA_DELETE_CHARACKTER,
} from 'actions/types';

const initialState = {
  userInput: '',
  testText: 'Modern particle physics research is focused on subatomic particles, including atomic constituents such as electrons, protons, and neutrons (protons and neutrons are composite particles called baryons, made of quarks), produced by radioactive and scattering processes, such as photons, neutrinos, and muons, as well as a wide range of exotic particles. Dynamics of particles is also governed by quantum mechanics; they exhibit wave–particle duality, displaying particle-like behaviour under certain experimental conditions and wave-like behaviour in others. In more technical terms, they are described by quantum state vectors in a Hilbert space, which is also treated in quantum field theory. Following the convention of particle physicists, the term elementary particles is applied to those particles that are, according to current understanding, presumed to be indivisible and not composed of other particles',
};

export default function TextArea(state = initialState, action) {
  switch (action.type) {
    case TEXT_AREA_HANDLE_USER_INPUT:
      return ({
        ...state,
        userInput: state.userInput + action.input,
        testText: initialState.testText.replace(state.userInput + action.input, ''),
      });

    case TEXT_AREA_DELETE_CHARACKTER:
      return ({
        ...state,
        userInput: state.userInput.slice(0, -1),
      });

    default:
      return state;
  }
}
