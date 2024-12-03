import React from "react";

const List = () => {
    return (
        <ul className="list-group todo-list">
            <li className="list-group-item">
                <span className="todo-list-item">
                    <span
                        className="todo-list-item-label"
                        style={{ color: "black", fontWeight: "normal" }}
                    >
                        To do app
                    </span>
                    <button
                        type="button"
                        className="btn btn-outline-success btn-sm float-end"
                    >
                        <i className="fa fa-exclamation"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm float-end"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </span>
            </li>
        </ul>
    );
};

export default List;
