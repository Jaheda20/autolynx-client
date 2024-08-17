import AboutHome from "./AboutHome";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import FeaturedItems from "./FeaturedItems";
import InfoContact from "./InfoContact";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedItems></FeaturedItems>
            <AboutHome></AboutHome>
            <ChooseUs></ChooseUs>
            <InfoContact></InfoContact>
        </div>
    );
};

export default Home;