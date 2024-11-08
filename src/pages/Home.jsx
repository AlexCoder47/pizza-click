import React from "react";

import Categories from "../components/Categories";
import SceletonPizza from "../components/Pizza/Sceleton";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";

function Home() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [categoryId, setCategoryId] = React.useState(1);
    const [sortType, setSortType] = React.useState({ name: "названию", sortProperty: "title" });
    
    React.useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6728a780270bd0b97556a11a.mockapi.io/items?${
                categoryId > 0 ? `category=` + categoryId : ""
            }&sortBy=${sortType.sortProperty}&order=desc`
        )
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, [categoryId, sortType]);




    return (
        <React.Fragment>
            <div className="second-header">
                <Categories
                    categoryId={categoryId}
                    onClickCategory={(id) => {
                        setCategoryId(id);
                    }}
                />
                <Sort
                    sortType={sortType}
                    onClickSort={(obj) => {
                        setSortType(obj);
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
