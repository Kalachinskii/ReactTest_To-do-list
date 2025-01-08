import React, { useState } from "react";

const AddItem = ({ onAdd }) => {
    const [value, setValue] = useState("");

    return (
        // без БД меняем форму на див -перезагрузка -превентдефолт
        <div className="item-add-form d-flex">
            {/* // контролируемый инпут */}
            <input
                onChange={(e) => setValue(e.target.value)}
                if="addTitle"
                type="text"
                className="form-control"
                placeholder="What needs to be done"
                value={value}
            />
            <button
                onClick={() => onAdd(value)}
                // type="submit"
                className="btn btn-outline-secondary col-3"
            >
                Add Item
            </button>
        </div>
    );
};

export default AddItem;
