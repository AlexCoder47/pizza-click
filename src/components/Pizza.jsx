import { useState } from "react";

function Pizza({title, price}) {
    const [pizzaCount, setPizzaCount] = useState(0);

    const addPizza = () => {
        if (pizzaCount < 9) {
            setPizzaCount(pizzaCount + 1);
        }
    }

    return (
        <div className="card-pizza">
            <img src="pizza-margherita.png" alt="" />
            <h3>{title}</h3>
            <div className="card-pizza-settings">
                <div className="card-pizza-type">
                    <span className="active">тонкая</span>
                    <span>традиционная</span>
                </div>
                <div className="card-pizza-size">
                    <span className="active">26см</span>
                    <span>30см</span>
                    <span>40см</span>
                </div>
            </div>
            <div className="card-pizza-result">
                <div className="card-pizza-price">{price}р</div>
                <button className="card-pizza-add" onClick={addPizza}>
                    + Добавить
                    <span>{pizzaCount}</span>
                </button>
            </div>
        </div>
    )
}

export default Pizza;