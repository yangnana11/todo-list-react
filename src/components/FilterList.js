import FilterButton from "./FilterButton";
import filter from './../assets/filter.svg';
function FilterList(props) {
    const filterList = props.list.map((name) => (
        <FilterButton key={name} name={name} isPressed={name===props.filter} setFilter={props.setFilter} />
    ));
    const labelTemplate = (
        <div className="filter-action-container">
            <button className="filter-action" onClick={() => props.setIsFilter(true)}>
                <img src={filter} alt="filter" width={30} height={30} />
                <span>{props.filter}</span>
            </button>
            <button className="clear-action" onClick={() => props.clearList()}>clear all</button>
        </div>
    );
    const filterListTemplate = (
        <div className="filter-container">
            {filterList}
        </div>
    );
    return props.tasks.length > 0 ? (
        props.isFilter ? filterListTemplate : labelTemplate
    ) : "";
}
export default FilterList;