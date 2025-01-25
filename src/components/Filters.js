const Filters = ({ onFilterChange }) => (
    <div className="text-center mt-3">
      <button className="btn btn-outline-primary me-2" onClick={() => onFilterChange('vegetarian')}>
        Vegetarian
      </button>
      <button className="btn btn-outline-primary me-2" onClick={() => onFilterChange('low-carb')}>
        Low-Carb
      </button>
      <button className="btn btn-outline-primary" onClick={() => onFilterChange('gluten-free')}>
        Gluten-Free
      </button>
    </div>
  );
  
  export default Filters;
  