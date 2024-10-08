import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Functionalities = ({ cars, refetch, search, setSearch, setItemsPerPage, itemsPerPage, handlePageChange, brand, setBrand, type, setType, fuelType, setFuelType, searchText, setSearchText, handleReset }) => {


    // const [searchText, setSearchText] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        setSearch(searchText);
        refetch()
    }





    return (
        <div className="">
            <div className="bg-yellow-500 flex items-center justify-center gap-2">
                <FaSearch size={24} className="text-blue-800" />
                <h2 className="text-xl font-semibold py-8 text-blue-800">Search Options</h2>
            </div>

            <div className="mt-10 mb-4 p-4">
                <label className="block font-medium text-gray-700">Brand</label>
                <select id="brand" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-yellow-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Ford">Ford</option>
                    <option value="Honda">Honda</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Kia">Kia</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>

                </select>
            </div>
            <div className="mb-4 p-4">
                <label className="block font-medium text-gray-700">Type</label>
                <select id="type" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-yellow-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>

                </select>
            </div>

            <div className="mb-4 p-4">
                <label className="block font-medium text-gray-700">Fuel Type</label>
                <select id="fuelType" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-yellow-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={fuelType}
                    onChange={(e) => setFuelType(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Sedan">Electric</option>

                </select>
            </div>

            <div className="mb-4 p-4">

                <form onSubmit={handleSearch} className="flex items-center justify-center">
                    <label className="input input-bordered flex items-center gap-2 my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="w-72" name="search" placeholder="Search by Brand Name" onChange={e => setSearchText(e.target.value)} value={searchText} />
                    </label>
                </form>


                <div className="flex gap-4 items-center justify-center">

                    <button onClick={handleReset} className="relative inline-flex items-center justify-center px-8 py-4 w-full overflow-hidden font-semibold text-lg text-white bg-blue-500 rounded-lg group mt-10">
                        <span className="absolute left-0 w-0 h-full transition-all duration-500 ease-out bg-yellow-600 group-hover:w-full "></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span className="relative flex items-center gap-2">

                            Reset</span>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Functionalities;