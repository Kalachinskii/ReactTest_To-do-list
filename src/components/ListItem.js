import React, { useState } from "react";

// что-бы неписать props.item.id ...
// props = по умолчанию пустой [], если нечего не передано
const ListItem = ({ item, onDeleteItem, onChangeDone, onChangeImportant }) => {
    return (
        <li className="list-group-item">
            <span
                className={`
        todo-list-item 
        ${item.important ? "important" : ""} 
        ${item.done ? "done" : ""}`}
            >
                <span
                    className="todo-list-item-label"
                    onClick={() => onChangeDone(item.id)}
                >
                    {item.title}
                </span>
                <button
                    onClick={() => onChangeImportant(item.id)}
                    type="button"
                    className="btn btn-outline-success btn-sm float-end"
                >
                    <i className="fa fa-exclamation"></i>
                </button>
                <button
                    onClick={() => onDeleteItem(item.id)}
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
