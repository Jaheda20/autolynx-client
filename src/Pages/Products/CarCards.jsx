import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import './style.css'

const CarCards = ({cars, sort, setSort, refetch}) => {

    // const axiosPublic = useAxiosPublic();

    // const { data: cars = [], isLoading } = useQuery({
    //     queryKey: ['car'],
    //     queryFn: async () => {
    //         const { data } = await axiosPublic.get('/cars')
    //         return data
    //     }
    // })
    
    const handleSort = e => {
        setSort(e.target.value)
        refetch()
    }

    return (

    <div className="p-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h1 className="text-3xl font-semibold text-blue-800">Cars for Sale: 
                <span className="text-xl ml-2 ">
                    ({cars.length})
                </span>
                </h1>
            <div className="flex items-center gap-2">
                <p className="uppercase text-slate-500">Sort by: </p>
                <select onChange={handleSort} value={sort} name="sort" id="sort" className="py-1 px-4 border rounded-md text-slate-600">
                    <option value="asc">Price: Lowest First</option>
                    <option value="desc">Price: Highest First</option>
                    <option value="">Date: Newest First</option>
                    <option value="">Date: Oldest First</option>
                </select>
            </div>

        </div>

        <div className="divider w-full"></div>
        <div className="w-full">
            {
                cars.map(car => <div key={car._id}>
                    <div className="flex flex-col md:flex-row w-full h-56 gap-6 p-6 border rounded-md mb-4">
                        <img src={car.image} alt={car.name} className="md:w-72 h-48" />
                        <div className="flex-1">
                            <div className="flex items-center justify-between p-4 ">
                                <h2 className="text-2xl font-semibold text-blue-800">{car.name}</h2>
                                <div className="bg-yellow-300 text-blue-800 py-2 px-6 custom-shape">
                                    <p>Our Price</p>

                                    <h3 className="text-xl font-bold  ">$ {car.price}</h3>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>

    </div>
);
};

export default CarCards;