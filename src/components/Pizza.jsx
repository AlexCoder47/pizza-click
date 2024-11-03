
function Pizza({title, price}) {
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
                <div className="card-pizza-add">
                    + Добавить
                    <span>3</span>
                </div>
            </div>
        </div>
    )
}

export default Pizza;