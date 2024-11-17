import React from "react";

import Categories from "../components/Categories";
import SceletonPizza from "../components/Pizza/Sceleton";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import { SearchContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSort } from "../redux/slices/filterSlice";

function Home() {
    const {searchValue} = React.useContext(SearchContext)
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const dispatch = useDispatch();
    const {categoryId, sort} = useSelector( state => state.filter );
    const sortType = sort;


    // const [categoryId, setCategoryId] = React.useState(0);
    // const [sortType, setSortType] = React.useState({ name: "названию", sortProperty: "title" });
    
    React.useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6728a780270bd0b97556a11a.mockapi.io/items?${
                categoryId > 0 ? `category=` + categoryId : ""
            }&sortBy=${sortType.sortProperty}&order=desc&search=${searchValue}`
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, [categoryId, sortType, searchValue]);



    
    return (
        <React.Fragment>
            <div className="second-header">
                <Categories
                    categoryId={categoryId}
                    onClickCategory={(id) => {
                        dispatch(setCategoryId(id));
                    }}
                />
                <Sort
                    sortType={sortType}
                    onClickSort={(obj) => {
                        dispatch(setSort(obj));
                    }}
                />
            </div>
            <div className="choose-categories">
                <h2>Все пиццы</h2>
            </div>
            <div className="pizza-block">
                {isLoading
                    ? [...new Array(6)].map((_, i) => <SceletonPizza key={i} />)
                    : items.map((obj) => <Pizza key={obj.id} {...obj} />)}
            </div>
        </React.Fragment>
    );
}

export default Home;
