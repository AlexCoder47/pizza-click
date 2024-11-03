import { useState } from "react";

function Pizza({title, price, imageUrl, sizes, types}) {
    const [activeIndexSize, setIndexActiveSize] = useState(0);
    const [activeIndexType, setIndexActiveType] = useState(0);
    const types_words = ["тонкая", "традиционная"];

    return (
        <div className="card-pizza">
            <img src={imageUrl} alt="pizza" />
            <h3>{title}</h3>
            <div className="card-pizza-settings">
                <div className="card-pizza-type">
                    {
                        types.map((value)=>(<span onClick={()=>{setIndexActiveType(value)}} className={activeIndexType == value ? "active" : ""}>{types_words[value]}</span>))
                    }
                    {/* <span className="active">тонкая</span>
                    <span>традиционная</span> */}
                </div>
                <div className="card-pizza-size">
                    {
                        sizes.map((value, i)=>(<span onClick={()=>{setIndexActiveSize(i)}} className={activeIndexSize == i ? "active" : ""}>{value}</span>))
                    }
                </div>
            </div>
            <div className="card-pizza-result">
                <div className="card-pizza-price">{price}р</div>
                <button className="card-pizza-add">
                    + Добавить
                    <span>0</span>
                </button>
            </div>
        </div>
    )
}

export default Pizza;