import { connect } from 'react-redux';
import {
  handleUserInput,
  handleKeyPress,
} from 'actions/TextArea';
import TextAreaComponent from '../components/TextAreaComponent';

const mapStateToProps = state => ({
  testText: state.TextArea.testText,
  userInput: state.TextArea.userInput,
});

const mapDispatchToProps = dispatch => ({
  handleUserInput: input => dispatch(handleUserInput(input)),
  handleKeyPress: keyCode => dispatch(handleKeyPress(keyCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextAreaComponent);
