import React from "react";

const Header = ({ todo, done }) => {
    return (
        <div className="app-header d-flex">
            <h1>My Todo List</h1>
            <h2>
                {todo} more to do, {done} done
            </h2>
        </div>
    );
};

export default Header;
