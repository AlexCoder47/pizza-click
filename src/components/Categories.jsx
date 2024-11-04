import { useState } from "react";

function Categories() {
    const [activeIndex, setIndexActive] = useState(0);
    const categories = ["Все", "Мясные", "Вегетарианские", "Острые", "Гриль"];

    return (
        <nav>
            {categories.map((value, i) => (
                <p
                    key={i}
                    onClick={() => {
                        setIndexActive(i);
                    }}
                    className={activeIndex == i ? "active" : ""}
                >
                    {value}
                </p>
            ))}
        </nav>
    );
}

export default Categories;
