import { useParams } from "react-router-dom";
import CarNav from "../../Component/CarNav";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Footer from "../../Shared/Footer";
import { useEffect, useState } from "react";
import RatingComponent from "../../Component/RatingComponent";
import { CiHeart } from "react-icons/ci";


const CarDetail = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [formattedTimestamp, setFormattedTimestamp] = useState('')

    const { data: car = [], isLoading, refetch } = useQuery({
        queryKey: ['car', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/car/${id}`)
            return data
        }
    })

    useEffect(() => {
        if (car.timestamp) {
            const formatted = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }).format(new Date(car.timestamp))
            setFormattedTimestamp(formatted)
            console.log(formattedTimestamp)
        }

    }, [car.timestamp])




    return (
        <div className="w-full">
            <div className="">
                <CarNav></CarNav>
            </div>

            <div className="max-w-4xl mx-auto pt-20 mb-20 ">
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <h1 className="text-3xl text-blue-800 font-semibold">{car.name}</h1>
                            <p className="text-slate-500">Added: {formattedTimestamp}</p>
                        </div>
                        <div className="bg-yellow-300 text-blue-800 py-2 px-10 custom-shape">
                            <p>Our Price</p>

                            <h3 className="text-xl font-bold  ">$ {car.price}</h3>

                        </div>

                    </div>

                    <div className="relative ">
                        <img src={car.image} alt="" className="mt-10 w-full" />
                        <button className="btn btn-ghost flex items-center gap-2 absolute top-6 right-6 bg-yellow-300 bg-opacity-50"> <CiHeart size={24} />
                            <span className="font-bold text-lg">Add to wishlist</span>
                        </button>
                    </div>

                </div>
                <div className="p-4 flex items-center mt-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Customer Ratings </h3>
                    <RatingComponent value={Number(car.ratings)} readOnly={true} />
                </div>

                <div className="divider divider-primary"></div>
                <p className="p-4 text-lg text-blue-800 font-bold">Brief Description:<span className="text-slate-500 font-normal ml-2">{car.description}</span> </p>
                <div className="divider divider-primary"></div>
                <div className="p-4 space-y-4">
                    <h1 className="text-lg font-semibold text-blue-800">Key Features:</h1>
                    <ul className="space-y-2 list-disc list-inside text-lg text-slate-500">
                        <li>Body: {car.type}</li>
                        <li>Mileage: {car.mileage}</li>
                        <li>Fuel: {car.fuel_type}</li>
                        <li>Year of Launch: {car.year}</li>
                    </ul>
                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default CarDetail;