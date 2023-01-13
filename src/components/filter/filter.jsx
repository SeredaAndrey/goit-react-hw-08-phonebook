import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';

import { ContactFilterForm, FilterInputForm } from './filter.styled';
import { setFilterContent } from 'redux/filterSlice';
import { Outlet } from 'react-router-dom';
import { getFilterContent } from 'redux/selectors';

const Filter = () => {
  const searchFormId = shortid.generate();
  const dispatch = useDispatch();
  // const [serchParams, setSearchParams] = useSearchParams();
  // const filter = serchParams.get('filter');
  const filter = useSelector(getFilterContent);

  const handleChangefilterContent = event => {
    dispatch(setFilterContent(event.target.value));
    // setSearchParams({ filter: event.target.value });
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
