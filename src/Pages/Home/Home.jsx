import AboutHome from "./AboutHome";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import FeaturedItems from "./FeaturedItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedItems></FeaturedItems>
            <AboutHome></AboutHome>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;