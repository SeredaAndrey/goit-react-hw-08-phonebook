import shortid from 'shortid';
import PropTypes from 'prop-types';

import { ContactFilterForm, FilterInputForm } from './filter.styled';

const Filter = ({ filter, handleChangeFilter }) => {
  const searchFormId = shortid.generate();
  return (
    <ContactFilterForm htmlFor={searchFormId}>
      Find contacts by Name
      <FilterInputForm
        type="text"
        id={searchFormId}
        value={filter}
        onChange={handleChangeFilter}
      />
    </ContactFilterForm>
  );
};

export default Filter;

Filter.prototype = {
  filter: PropTypes.string.isRequired,
};
