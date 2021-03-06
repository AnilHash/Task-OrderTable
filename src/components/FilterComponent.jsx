import { useState } from "react";

const Filters = ({ filterObj }) => {
  const [search, setSearch] = useState('');
  const {
    filter,
    handleFilterChange,
    initialFilterValue,
    searchItem,
    handleSearch
  } = filterObj;
  const handleChange = (e) => {
    handleFilterChange({ [e.target.name]: e.target.value });
  };
  return (
    <div className="filter-container">
      <div className="divider">
        <div className="filter-wrap">
          <label htmlFor="pin">Pin Code :</label>
          <input
            id="pin"
            type="number"
            name="pin"
            value={filter.pin}
            onChange={handleChange}
          />
        </div>
        <div className="filter-wrap">
          <label htmlFor="date">Date :</label>
          <input
            id="date"
            type="date"
            name="date"
            value={filter.date}
            onChange={handleChange}
          />
        </div>
        <button onClick={() => handleFilterChange(initialFilterValue)}>
          Reset Filters X
        </button>
      </div>
      <div className="divider">
        <div className="filter-wrap">
          <label htmlFor="item">Item :</label>
          <input
            id="item"
            type="text"
            name="item"
            value={searchItem}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button onClick={()=>handleSearch(search)}>Search</button>
      </div>
    </div>
  );
};
export default Filters;
