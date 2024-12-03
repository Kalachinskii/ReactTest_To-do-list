import React from "react";

const ListItem = () => {
    return (
        <form className="item-add-form d-flex">
            <input
                type="text"
                className="form-control"
                placeholder="What needs to be done"
            />
            <button className="btn btn-outline-secondary col-3">
                Add Item
            </button>
        </form>
    );
};

export default ListItem;
