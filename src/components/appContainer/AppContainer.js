import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreateNewCoparty from '../createNewCoparty/CreateNewCoparty.js';
import GetCoparties from '../getCoparties/GetCoparties.js';
import * as CopartiesActions from '../../actions/copartiesActions.js';
import DevTools from '../devTools/DevTools.js';

class AppContainer extends React.Component {
  render() {
    const { copartiesAppState, actions } = this.props;


    return (
      <div>
        {<DevTools />}
        <CreateNewCoparty copartiesAppState={copartiesAppState} actions={actions} />
        <GetCoparties copartiesAppState={copartiesAppState} actions={actions} />
      </div>
    );
  }
}

AppContainer.propTypes = {
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
)(AppContainer);
