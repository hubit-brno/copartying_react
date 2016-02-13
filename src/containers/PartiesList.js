import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GetCoparties from '../components/getCoparties/GetCoparties.js';
import * as CopartiesActions from '../actions/copartiesActions.js';

const PartiesList = (props) => {
  const { copartiesAppState, actions } = props;

  return (
    <div>
      PARTIES LIST
      <GetCoparties coparties={copartiesAppState} actions={actions} />
    </div>
  );
};

PartiesList.propTypes = {
  actions: PropTypes.object.isRequired,
  copartiesAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    copartiesAppState: state.get("copartiesAppState")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CopartiesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartiesList);
