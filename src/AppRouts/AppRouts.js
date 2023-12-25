import React from 'react';
import {Route, Routes} from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import UserPage from "../pages/UserPage";
import Header from "../Components/Header/Header";

const AppRouts = () => {
    return (
        <Routes>
            <Route path='/' element={<TodoPage />} />
            <Route path='/user' element={<UserPage />} />
        </Routes>
    );
};

export default AppRouts;