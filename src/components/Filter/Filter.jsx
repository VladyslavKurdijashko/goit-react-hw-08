import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <input
      className={styles.filter}
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
};

export default Filter;
