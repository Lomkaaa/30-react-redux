import { useDispatch, useSelector } from "react-redux";
import {
    setTitleFilter,
    resetFilter,
    setAuthorFilter,
    setOnlyFavorite,
} from "../../redux/slices/filterSlice";
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavorite,
} from "../../redux/slices/filterSlice";
import "./Filter.css";
//

export const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavorite);

    //
    const handleOnlyFavoriteFilterChange = () => dispatch(setOnlyFavorite());
    //

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };
    //
    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };
    //
    const handleResetFilters = () => {
        dispatch(resetFilter());
    };

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        value={titleFilter}
                        placeholder="Поиск по названию..."
                        onChange={handleTitleFilterChange}
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        value={authorFilter}
                        placeholder="Поиск автору..."
                        onChange={handleAuthorFilterChange}
                    />
                </div>
                <div className="filter-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={onlyFavoriteFilter}
                            onChange={handleOnlyFavoriteFilterChange}
                        />
                        избранное
                    </label>
                </div>

                <button type="button" onClick={handleResetFilters}>
                    очистить поиск
                </button>
            </div>
        </div>
    );
};
