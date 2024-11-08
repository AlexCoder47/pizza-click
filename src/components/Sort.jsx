import React, { useState } from "react";

function Sort({sortType, onClickSort}) {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const sortName = [
        { name: "названию", sortProperty: "title" },
        { name: "цене", sortProperty: "price" },
        { name: "популярности", sortProperty: "rating" },
    ];
    const onClickSortItem = (obj) => {
        onClickSort(obj);
        setVisiblePopup(false);
    };
    return (
        <div className="sort-block">
            <div className="sort">
                <p>Сортировка по: </p>
                <span onClick={()=>(setVisiblePopup(true))}>{sortType.name}</span>
            </div>
            {visiblePopup && (
                <div className="sort-popup">
                    {sortName.map((obj, i) => (
                        <div
                            key={i}
                            onClick={() => onClickSortItem(obj)}
                            className={sortType.sortProperty == obj.sortProperty ? "active" : ""}
                        >
                            {obj.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Sort;