import CarCards from "./CarCards";
import CarCover from "./CarCover";
import Functionalities from "./Functionalities";

const Cars = () => {
    return (
        <div>
            <CarCover></CarCover>
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10 mt-20">
                <div className="w-1/3 shadow-xl">
                    <Functionalities></Functionalities>
                </div>
                <div className="w-2/3 ">
                    <CarCards></CarCards>
                </div>
            </div>
        </div>
    );
};

export default Cars;