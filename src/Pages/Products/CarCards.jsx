import { useEffect } from 'react';
import './style.css'

const CarCards = ({ cars, sort, setSort, refetch, currentPage, totalPages, handlePageChange }) => {

    const handleSort = (e) => {
        const value = e.target.value;
        if (value === '') {
            setSort({ field: '', order: '' })
        }
        else {
            const [field, order] = value.split(',');
            setSort({ field, order })

        }
        refetch()
    }

    useEffect(() => {
        // refetch();
        console.log('Updated sort state:', sort);
    }, [sort])

    const sortValue = sort.field && sort.order ? `${sort.field},${sort.order}` : '';

    return (

        <div className="p-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <h1 className="text-3xl font-semibold text-blue-800">Cars for Sale
                </h1>
                <div className="flex items-center gap-2">
                    <p className="uppercase text-slate-500">Sort by: </p>
                    <select
                        onChange={handleSort}
                        value={sortValue}

                        name="sort"
                        id="sort"
                        className="py-1 px-4 border rounded-md text-slate-600">
                        <option value="">Select</option>
                        <option value="price,asc">Price: Lowest First</option>
                        <option value="price,desc">Price: Highest First</option>
                        <option value="timestamp,desc">Date: Newest First</option>
                        <option value="timestamp,asc">Date: Oldest First</option>
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

            {/* pagination */}
            
            <div className="flex items-center justify-end mt-8 mb-20 space-y-2 text-lg sm:space-y-0 sm:space-x-3 sm:flex">
                <span className="block">Page {currentPage} of {totalPages}</span>
                <div className="space-x-1">
                    <button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow" onClick={() => currentPage > 1 && handlePageChange(currentPage-1)}>
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow" onClick={() => currentPage < totalPages && handlePageChange(currentPage+1)}>
                        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CarCards;