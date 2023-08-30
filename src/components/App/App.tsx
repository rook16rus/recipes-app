import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Intro from '../Intro/Intro'
import Footer from "../Footer/Footer";

import MainPage from "../../pages/MainPage/MainPage";
import RecipesPage from "../../pages/RecipesPage/RecipesPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import RecipeSinglePage from "../../pages/RecipeSinglePage/RecipeSinglePage";

function App() {
    return (
        <div className="main-wrapper">
            <Header />
            <main>
                <Intro />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/recipes" element={<RecipesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/recipe-single" element={<RecipeSinglePage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;