import React, {useState} from 'react';



const Categories = React.memo(({ activeCategory, items, onClickItem }) => {

    const [activeItem, setActiveItem] = useState(activeCategory);


    const onSelectedItem = (index) => {
        setActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectedItem(null)}>
                    Visi
                </li>
                {items && items.map((name, i) => {
                    return (
                        <li
                            className={activeItem === i ? 'active' : ''}
                            onClick={() => onSelectedItem(name)}
                            key={`${name}_${i}`}
                        >
                            {name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
});


export default Categories;
