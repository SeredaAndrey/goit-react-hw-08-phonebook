import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { ContactFilterForm, FilterInputForm } from './filter.styled';
import { setFilterContent } from 'redux/filterSlice';
import { getFilterContent } from 'redux/selectors';

const Filter = () => {
  const searchFormId = shortid.generate();
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContent);

  const handleChangefilterContent = event => {
    dispatch(setFilterContent(event.target.value));
  };

  return (
    <ContactFilterForm htmlFor={searchFormId}>
      Find contacts by Name
      <FilterInputForm
        type="text"
        id={searchFormId}
        value={filter}
        onChange={handleChangefilterContent}
      />
    </ContactFilterForm>
  );
};

export default Filter;

Filter.prototype = {
  filter: PropTypes.string.isRequired,
};
