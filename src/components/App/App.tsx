import React from 'react';

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
                {/*<MainPage />*/}
                <RecipesPage />
                {/*<AboutPage />*/}
                {/*<RecipeSinglePage />*/}
            </main>
            <Footer />
        </div>
    );
}

export default App;



/*

    @include mq('custom', 'max', 1024) {

    }

    @include mq('custom', 'max', 768) {

    }

    @include mq('custom', 'max', 640) {

    }

*/