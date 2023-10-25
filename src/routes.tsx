import {BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./Pages/Feed";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;