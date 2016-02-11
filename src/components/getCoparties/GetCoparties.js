import React, {PropTypes} from 'react';

import './GetCoparties.scss';

function getLoadedCopartiesContent(coparties) {
  if (!coparties.size) {
    return 'none';
  }

  return (
    <ul>
      {coparties.map((coparty) => {
        return <li key={coparty.get('id')}>{coparty.get('name')} - {coparty.get('place')}</li>;
      })}
    </ul>
  );
}

const GetCoparties = (props) => {
  const { copartiesAppState, actions } = props;
  const copartiesContent = getLoadedCopartiesContent(copartiesAppState.get('coparties'));
  const isSyncing = copartiesAppState.get('isSyncing');

  return (
    <div className="GetCoparties container">
      <a href="#" onClick={actions.loadCoparties.bind(this)}>Load it all</a>
      <p>Loaded: {isSyncing ? 'LOADING' : ''}</p>
      {copartiesContent}
    </div>
  );
};

GetCoparties.propTypes = {
  actions: PropTypes.object.isRequired,
  copartiesAppState: PropTypes.object.isRequired
};

export default GetCoparties;
