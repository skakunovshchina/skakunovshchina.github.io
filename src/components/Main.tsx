import { default as React } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage";
import Map from "./MapPage";
import Page1925 from "./Page1925";
import Page1878 from "./Page1878";
import Zhigalo from "./Zhigalo";
import BooksPage from "./BooksPage";


const Main = ({config}: any) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="map" element={<Map config={config.map} />} />
            <Route path="1925" element={<Page1925 config={config.spreadsheets.Page1925} />} />
            <Route path="1878" element={<Page1878 config={config.spreadsheets.Page1878} />} />
            <Route path="zhigalo" element={<Zhigalo />} />
            <Route path="books" element={<BooksPage config={config.books} />} />
        </Routes>

    );
};

export default Main;