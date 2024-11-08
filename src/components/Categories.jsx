import { useState } from "react";

function Categories({categoryId, onClickCategory}) {
    const categories = ["Все", "Новинки", "Мясные", "Вегетарианские"];

    return (
        <nav>
            {categories.map((value, i) => (
                <p
                    key={i}
                    onClick={() => {
                        onClickCategory(i);
                    }}
                    className={categoryId == i ? "active" : ""}
                >
                    {value}
                </p>
            ))}
        </nav>
    );
}

export default Categories;
