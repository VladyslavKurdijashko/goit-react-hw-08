import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <label className={css.searchWrapper}>
      <span className={css.label}>Find contacts by name</span>
      <input
        className={css.searchBar}
        type="text"
        name="searchBar"
        placeholder="type..."
        value={filterValue}
        onChange={handleFilter}
      />
    </label>
  );
}

export default SearchBox;
