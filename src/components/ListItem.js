import React from "react";

// что-бы неписать props.item.id ...
// props = по умолчанию пустой [], если нечего не передано
const ListItem = ({ item }) => {
    const clickHandler = () => {};

    return (
        <li className="list-group-item" data-id={item.id}>
            <span
                className={`
            todo-list-item 
            ${item.important ? "important" : ""} 
            ${item.done ? "done" : ""}`}
            >
                <span className="todo-list-item-label">{item.title}</span>
                {/* 1. при сложной логике */}
                <button
                    // при клике будет срабатывать функция
                    onClick={clickHandler}
                    type="button"
                    className="btn btn-outline-success btn-sm float-end"
                >
                    <i className="fa fa-exclamation"></i>
                </button>
                {/* 2. пир простой - ананимная функция
                <button
                    // при клике будет срабатывать функция
                    onClick={() => {alert("Жмяк");}}
                    type="button"
                    className="btn btn-outline-success btn-sm float-end"
                >
                    <i className="fa fa-exclamation"></i>
                </button> */}
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-end"
                >
                    <i className="fa fa-trash"></i>
                </button>
            </span>
        </li>
    );
};

export default ListItem;
