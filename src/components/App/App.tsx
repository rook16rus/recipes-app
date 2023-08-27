import React from 'react';

import Header from "../Header/Header";
import Intro from '../Intro/Intro'
import Footer from "../Footer/Footer";

import MainPage from "../../pages/MainPage/MainPage";
import RecipesPage from "../../pages/RecipesPage/RecipesPage";

function App() {
    return (
        <div className="main-wrapper">
            <Header />
            <main>
                <Intro />
                {/*<MainPage />*/}
                <RecipesPage />
            </main>
            <Footer />
        </div>
    );
}

export default App;
