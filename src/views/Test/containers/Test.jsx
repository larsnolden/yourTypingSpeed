import { connect } from 'react-redux';
import TestComponent from 'views/Test/components/TestComponent';

const mapStateToProps = state => ({
  showFinishModal: state.modal.showFinishModal,
});

export default connect(mapStateToProps, null)(TestComponent);
