import { connect } from 'react-redux';
import FinishModalComponent from 'elements/FinishModal/components/FinishModalComponent';

const mapStateToProps = state => ({
  accuracy: state.performance.accuracy,
  wordsPerMinute: state.performance.wordsPerMinute,
  speed: 'average',
});

/*eslint-disable */
const mapDispatchToProps = dispatch => ({
  handleRestartClick: () => window.location.reload(true),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishModalComponent);
