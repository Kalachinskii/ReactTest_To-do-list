import React, { useState } from "react";

const Filter = ({ onFilter }) => {
    const [active, setActive] = useState(0);

    const btns = ["All", "Active", "Done"];

    const btnClickHeandler = (ind) => {
        setActive(ind);
        onFilter(ind);
    };

    // по умолчанию 0 - потому index = 0 => All active
    const btnsOut = btns.map((el, ind) =>
        active === ind ? (
            <button
                // 1 способ вызов по порядку функции
                onClick={() => {
                    // если при клике перезаписываем состояние
                    // и планируем отправить его вверх череез проп
                    // то мы не имеем права передавать само состояние
                    // т.к. оно содержит старое состояние
                    // в таком случаее передаём переменную
                    setActive(ind);
                    onFilter(ind);
                }}
                key={ind}
                type="button"
                className="btn btn-info"
            >
                {el}
            </button>
        ) : (
            <button
                onClick={(e) => {
                    // 2 способ через обвертку анологично выше
                    // неперегружать вёрстку
                    btnClickHeandler(ind);
                }}
                key={ind}
                type="button"
                className="btn btn-outline-secondary"
            >
                {el}
            </button>
        )
    );

    return <div className="btn-group">{btnsOut}</div>;
};

export default Filter;
