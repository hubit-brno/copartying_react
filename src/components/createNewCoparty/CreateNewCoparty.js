import React, {PropTypes} from 'react';

import './CreateNewCoparty.scss';

import NewCopartyForm from '../newCopartyForm/NewCopartyForm.js';

const CreateNewCoparty = (props) => {
  const showForm = (event) => {
    props.actions.createCoparty();
  };
  const hideForm = (event) => {
    props.actions.saveForm();
  };

  return (
    <div className="CreateNewCoparty container">
      <h1>Coparty</h1>

    {props.copartiesAppState.get("showForm") ? <NewCopartyForm /> : <a onClick={showForm} className="new-coparty big button">Create new coparty</a>}

    </div>
  );
};

CreateNewCoparty.propTypes = {
  actions: PropTypes.object.isRequired,
  copartiesAppState: PropTypes.object.isRequired
};

export default CreateNewCoparty;
