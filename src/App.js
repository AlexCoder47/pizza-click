import React from "react";
import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import Not_Found from "./pages/Not-Found";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext('');


function App() {
    const [searchValue, setSearchValue] = React.useState('');
    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <div className="wrapper">
                <Header
                    
                />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Not_Found />} />
                </Routes>
            </div>
        </SearchContext.Provider>
    );
}

export default App;
