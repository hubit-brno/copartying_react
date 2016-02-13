import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CopartiesActions from '../actions/copartiesActions.js';
import DevTools from '../components/devTools/DevTools.js';

class AppContainer extends React.Component {
  render() {
    const { copartiesAppState, actions } = this.props;

    return (
      <div>
        <h1>CoParty, will ya?</h1>
        <Link to="/coparties">Show me the wild places in the city</Link>
        <br/>
        <Link to="/coparties/new">Dig your own party</Link>
        <br/>
        <Link to="/coparties/42">Party 42 detail</Link>
        <div style={{background: '#fff'}}>
          {this.props.children}
        </div>
        {<DevTools />}
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.element,
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
