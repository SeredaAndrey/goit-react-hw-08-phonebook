import shortid from 'shortid';

const Filter = ({ filter, handleChangeFilter }) => {
  const searchFormId = shortid.generate();
  return (
    <label htmlFor={searchFormId}>
      Find contacts by Name
      <input
        type="text"
        id={searchFormId}
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

export default Filter;
