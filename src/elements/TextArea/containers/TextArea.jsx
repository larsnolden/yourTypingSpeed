import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  lifecycle,
} from 'recompose';
import {
  handleUserInput,
  handleKeyPress,
  textAreaInit,
} from 'actions/textArea';
import TextAreaComponent from '../components/TextAreaComponent';

const mapStateToProps = state => ({
  finishedWords: state.textArea.finishedWords,
  unfinishedWords: state.textArea.unfinishedWords,
  currentInput: state.textArea.currentInput,
  errorChars: state.textArea.errorChars,
  nextWord: state.textArea.nextWord,
});

const mapDispatchToProps = dispatch => ({
  handleUserInput: input => dispatch(handleUserInput(input)),
  handleKeyPress: keyCode => dispatch(handleKeyPress(keyCode)),
  initTextArea: () => dispatch(textAreaInit()),
});

const initialize = lifecycle({
  componentDidMount() {
    const { initTextArea } = this.props;
    initTextArea();
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  initialize,
)(TextAreaComponent);
