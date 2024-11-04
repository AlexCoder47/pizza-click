import React, { useEffect, useState } from 'react'
import Categories from "./components/Categories";
import Header from "./components/Header";
import Sort from "./components/Sort";
import "./scss/app.scss";
import SceletonPizza from './components/Pizza/Sceleton';
import Pizza from './components/Pizza';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://6728a780270bd0b97556a11a.mockapi.io/items")
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            });
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <div className="second-header">
                <Categories />
                <Sort />
            </div>
            <div className="choose-categories">
                <h2>Все пиццы</h2>
            </div>
            <div className="pizza-block">
                {isLoading ? (
                    [...new Array(6)].map((_, i) => <SceletonPizza key={i} />)
                ) : (
                    items.map((obj)=>(<Pizza key={obj.id} {...obj} />))
                )}
            </div>
        </div>
    );
}

export default App;
