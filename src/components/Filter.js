const Filter = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="filter p-3 ">
      <input
        className="rounded-md  p-2 border-blue-200 border-[1px]"
        type="text"
        placeholder="Filter blocks by title..."
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
