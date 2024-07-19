import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useId } from "react";

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const onFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        id={searchId}
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
