import React, {useState} from 'react';

//TODO активный элемент не првильно горит, если перейти в контакты и вернуться обратно

const Categories = ({ activeCategory, items, onClickItem }) => {

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
                            className={activeItem === name ? 'active' : ''}
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
};


export default Categories;
