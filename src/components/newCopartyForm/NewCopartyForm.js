import React, {PropTypes} from 'react';

import './NewCopartyForm.scss';

const NewCopartyForm = (props) => {

  return (
      <form className="NewCopartyForm">
        <input type="text" name="coparty.name" />
        <input type="submit" value="Let's party!" />
      </form>
  );
};

NewCopartyForm.propTypes = {

};

export default NewCopartyForm;
