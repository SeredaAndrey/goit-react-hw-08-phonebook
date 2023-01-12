import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';

import { ContactFilterForm, FilterInputForm } from './filter.styled';
import { setFilterContent } from 'redux/filterSlice';
import { getFilterContent } from 'redux/selectors';
import { Outlet } from 'react-router-dom';

const Filter = () => {
  const searchFormId = shortid.generate();
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContent);
  // const [serchParams, setSearchParams] = useSearchParams();

  const handleChangefilterContent = event => {
    dispatch(setFilterContent(event.target.value));
  };

  return (
    <>
      <ContactFilterForm htmlFor={searchFormId}>
        Find contacts by Name
        <FilterInputForm
          type="text"
          id={searchFormId}
          value={filter}
          onChange={handleChangefilterContent}
        />
      </ContactFilterForm>
      <Outlet />
    </>
  );
};

export default Filter;

Filter.prototype = {
  filter: PropTypes.string.isRequired,
};
