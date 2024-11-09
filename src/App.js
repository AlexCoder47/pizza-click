import React from "react";
import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import Not_Found from "./pages/Not-Found";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Routes>
                <Route path="/" element={<Home searchValue={searchValue}/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Not_Found />} />
            </Routes>
        </div>
    );
}

export default App;
