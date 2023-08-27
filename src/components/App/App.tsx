import React from 'react';

import Header from "../Header/Header";
import Intro from '../Intro/Intro'
import MainPage from "../../pages/MainPage/MainPage";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="main-wrapper">
            <Header />
            <main>
                <Intro />
                <MainPage />
            </main>
            <Footer />
        </div>
    );
}

export default App;
