import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";


const FeaturedItems = () => {

    const axiosPublic = useAxiosPublic();

    const { data: cars = [], isLoading } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/allCars')
            return data
        }
    })

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    return (
        <div className="mt-20 mb-20 md:mb-40 max-w-7xl mx-auto w-full ">

            <h1 className="text-3xl font-bold text-blue-800 text-center">Top Picks for You</h1>
            <p className="text-center mt-4 text-slate-500">Discover our curated selection of top-rated vehicles just for you</p>

            <div className="mt-10 p-8">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }

                    }}
                    className="mySwiper"
                >
                    {
                        cars.slice(0, 9).map((car, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-4 hover:border">
                                    <Link to={`/car/${car._id}`}>
                                        <img src={car.image} alt={car.name} className="h-48 object-cover w-full" />
                                    </Link>


                                </div>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>


            </div>

            <div className="flex items-center justify-center">
                <Link to="/cars">
                    <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-lg text-white bg-blue-500 rounded-lg group mt-10">
                        <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-yellow-600 group-hover:w-full "></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative flex items-center gap-2">

                            Show All</span>
                    </button>
                </Link>
            </div>

        </div >
    );
};

export default FeaturedItems;