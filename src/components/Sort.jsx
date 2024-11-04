import React, { useState } from "react";

function Sort() {
    const [selected, setSelected] = useState(0);
    const [visiblePopup, setVisiblePopup] = useState(false);
    const sortName = ["названию", "цене", "популярности"];
    const onClickSortItem = (index) => {
        setSelected(index);
        setVisiblePopup(false);
    };
    return (
        <div className="sort-block">
            <div className="sort">
                <p>Сортировка по: </p>
                <span onClick={()=>(setVisiblePopup(true))}>{sortName[selected]}</span>
            </div>
            {visiblePopup && (
                <div className="sort-popup">
                    {sortName.map((value, i) => (
                        <div
                            key={i}
                            onClick={() => onClickSortItem(i)}
                            className={selected == i ? "active" : ""}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Sort;