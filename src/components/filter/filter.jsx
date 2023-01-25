import shortid from 'shortid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { BiSearchAlt } from 'react-icons/bi';
// import { useSearchParams } from 'react-router-dom';

import {
  ContactFilterForm,
  FilterInputForm,
  FilterSpan,
} from './filter.styled';
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
        <FilterSpan>
          <BiSearchAlt /> Find contacts by Name
        </FilterSpan>
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
