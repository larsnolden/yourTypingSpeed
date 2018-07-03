import { connect } from 'react-redux';
import UserPerformanceComponent from '../components/UserPerformanceComponent';

const mapStateToProps = state => ({
  secondsActive: state.performance.secondsActive,
  secondsLeft: state.performance.secondsLeft,
  wordsPerMinute: state.performance.wordsPerMinute,
  accuracy: state.performance.accuracy,
});

export default connect(mapStateToProps, null)(UserPerformanceComponent);
