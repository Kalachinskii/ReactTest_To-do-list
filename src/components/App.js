// корень приложения - все то что будет в приложении
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";

const App = () => {
    return (
        <div className="todo-app">
            <Header />
        </div>
    );
};

export default App;
