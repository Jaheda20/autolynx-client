import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CarCards from "./CarCards";
import CarCover from "./CarCover";
import Functionalities from "./Functionalities";
import { useState } from "react";

const Cars = () => {

    const axiosPublic = useAxiosPublic();
    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('');
    const [sort, setSort] = useState({ field: '', order: '' });
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [fuelType, setFuelType] = useState('');


    const getData = async () => {
        const { data } = await axiosPublic.get(`/cars`, {
            params: {
                search,
                sortField: sort.field,
                sortOrder: sort.order,
                page: currentPage,
                size: itemsPerPage,
                brand, type, fuel_type: fuelType
            }
        })
        return data
    }

    const { data: carData = {}, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['car', { search, sort, currentPage, itemsPerPage, brand, type, fuelType }],
        queryFn: getData,
    })

    const { cars = [], totalPages = 0 } = carData;

    const handlePageChange = (page) => {
        setCurrentPage(page)
        refetch()
    }

    const handleReset = () => {
        setSearch('')
        setSearchText('')
        setBrand('')
        setType('')
        setFuelType('')

    }


    if (isLoading) return (
        <div className="flex items-center justify-center text-7xl my-40">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    )

    if (isError) return (
        <div className="flex items-center justify-center text-xl my-40">
            <span className="text-red-700">Error: {error.message}</span>
        </div>
    )



    return (
        <div>
            <CarCover></CarCover>
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between gap-10 mt-20">
                <div className="w-1/3 shadow-xl h-fit">
                    <Functionalities
                        cars={cars}
                        refetch={refetch}
                        search={search}
                        setSearch={setSearch}
                        setItemsPerPage={setItemsPerPage}
                        itemsPerPage={itemsPerPage}
                        handlePageChange={handlePageChange}
                        brand={brand}
                        type={type}
                        fuelType={fuelType}
                        setBrand={setBrand}
                        setType={setType}
                        setFuelType={setFuelType}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        handleReset={handleReset}
                    ></Functionalities>
                </div>

                <div className="md:w-2/3 ">
                    <CarCards
                        cars={cars}
                        refetch={refetch}
                        sort={sort}
                        setSort={setSort}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                    ></CarCards>
                </div>
            </div>
        </div>
    );
};

export default Cars;