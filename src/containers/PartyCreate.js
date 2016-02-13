import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreateNewCoparty from '../components/createNewCoparty/CreateNewCoparty.js';
import * as CopartiesActions from '../actions/copartiesActions.js';

const PartyCreate = (props) => {
  const { copartiesAppState, actions } = props;

  return (
    <div>
      CREATE PARTY
      <CreateNewCoparty copartiesAppState={copartiesAppState} actions={actions} />
    </div>
  );
};

PartyCreate.propTypes = {
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
)(PartyCreate);
