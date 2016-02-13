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
  const { coparties, actions } = props;
  const copartiesContent = getLoadedCopartiesContent(coparties.get('coparties'));
  const isSyncing = coparties.get('isSyncing');

  const loadCoparties = (e) => {
    e.nativeEvent.preventDefault();
    actions.loadCoparties();
  };

  return (
    <div className="GetCoparties container">
      <a href="#" onClick={loadCoparties}>Load it all</a>
      <p>Loaded: {isSyncing ? 'LOADING' : ''}</p>
      {copartiesContent}
    </div>
  );
};

GetCoparties.propTypes = {
  actions: PropTypes.object.isRequired,
  coparties: PropTypes.object.isRequired
};

export default GetCoparties;
