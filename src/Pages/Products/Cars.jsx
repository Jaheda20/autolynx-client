import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CarCards from "./CarCards";
import CarCover from "./CarCover";
import Functionalities from "./Functionalities";
import { useState } from "react";

const Cars = () => {

    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState()

    const getData = async() =>{
        const { data } = await axiosPublic.get(`/cars?search=${search}&sort=${sort}`)
        return data
    }
    
    const { data: cars = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['car', { search, sort }],
        queryFn: getData
    })

    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    if(isError) return (
        <div className="flex items-center justify-center text-xl my-40">
            <span className="text-red-700">Error: {error.message}</span>
        </div>
    )

    

    return (
        <div>
            <CarCover></CarCover>
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10 mt-20">
                <div className="w-1/3 shadow-xl">
                    <Functionalities 
                    cars={cars}
                    refetch={refetch}
                    search={search}
                    setSearch={setSearch}
                    
                    ></Functionalities>
                </div>
                <div className="w-2/3 ">
                    <CarCards 
                    cars={cars}
                    sort={sort}
                    setSort={setSort}
                    ></CarCards>
                </div>
            </div>
        </div>
    );
};

export default Cars;