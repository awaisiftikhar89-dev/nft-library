function FilterBar({ setSortOption }) {
    return (
        <div className="filter-bar">
            <select className="select-bar" onChange={(e) => setSortOption(e.target.value)}>
                <option value="">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>
        </div>
    );
}

export default FilterBar;
