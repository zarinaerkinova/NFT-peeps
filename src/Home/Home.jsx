import React from "react";
import Collection from "./Collection/Collection";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Rarity from "./Rarity/Rarity";
import Releases from "./Releases/Releases";
import Team from "./Team/Team";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Collection />
            <Rarity />
            <Releases />
            <Team />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home