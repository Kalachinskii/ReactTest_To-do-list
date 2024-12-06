// корень приложения - все то что будет в приложении
import React from "react";
import ReactDOM from "react-dom/client";
// подключаемые компаненты
import Header from "./Header";
import Search from "./Search";
import List from "./List";
import AddItem from "./AddItem";

// точка сбора компонентов и библиотек
const App = () => {
    return (
        <div className="todo-app">
            <Header />
            <Search />
            <List />
            <AddItem />
        </div>
    );
};

export default App;
