// 'use client';
// import { useEffect, useState } from "react";
// import Cookies from 'js-cookie';

// export default function Products() {
//     const [products, setProducts] = useState<any[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const token = Cookies.get('accessToken');

//     const productssssss = [
//         {
//           id: 1,
//           name: "Wireless Headphones",
//           description: "High-quality noise-cancelling headphones.",
//           price: "$99.99",
//           stockQuantity: 25,
//         },
//         {
//           id: 2,
//           name: "Smartphone Case",
//           description: "Durable and stylish case for smartphones.",
//           price: "$19.99",
//           stockQuantity: 50,
//         },
//         {
//           id: 3,
//           name: "Bluetooth Speaker",
//           description: "Portable speaker with excellent sound quality.",
//           price: "$49.99",
//           stockQuantity: 15,
//         },
//         {
//           id: 4,
//           name: "USB-C Charger",
//           description: "Fast-charging USB-C adapter for various devices.",
//           price: "$14.99",
//           stockQuantity: 30,
//         },
//         {
//           id: 5,
//           name: "Gaming Mouse",
//           description: "Ergonomic mouse with customizable buttons.",
//           price: "$29.99",
//           stockQuantity: 10,
//         },
//     ];


//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch('https://sms-app-1-2wl7.onrender.com/products/all', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 if (!response.ok) {
//                     throw new Error(`Error: ${response.status} ${response.statusText}`);
//                 }

//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error: any) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };        

//         fetchProducts();
//     }, []);

//     const exportToCSV = () => {
//         if (products.length === 0) {
//             alert("No data available to export.");
//             return;
//         }

//         const headers = ["Name", "Description", "Price", "Stock Quantity"];
//         const rows = products.map(product => [
//             product.name,
//             product.description,
//             product.price,
//             product.stockQuantity,
//         ]);

//         const csvContent = [headers, ...rows]
//             .map(row => row.join(","))
//             .join("\n");

//         const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//         const url = URL.createObjectURL(blob);

//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "products.csv";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <div className="relative w-[60%] overflow-x-auto shadow-md sm:rounded-lg">
//             {loading ? (
//                 <p className="text-center text-gray-500">Loading...</p>
//             ) : error ? (
//                 <p className="text-center text-red-500">Error: {error}</p>
//             ) : (
//                 <>
//                     <button
//                         onClick={exportToCSV}
//                         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                     >
//                         Export to CSV
//                     </button>
//                     <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[100%]">
//                         <thead className="text-xs text-gray-700 uppercase dark:bg-[#151515] dark:text-gray-400">
//                             <tr>
//                                 <th scope="col" className="px-6 py-3">Name</th>
//                                 <th scope="col" className="px-6 py-3">Description</th>
//                                 <th scope="col" className="px-6 py-3">Price</th>
//                                 <th scope="col" className="px-6 py-3">Stock Quantity</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {productssssss.length > 0 ? (
//                                 productssssss.map((product) => (
//                                     <tr
//                                         key={product.id}
//                                         className="bg-white border-b dark:bg-[#151515] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                                     >
//                                         <th
//                                             scope="row"
//                                             className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                                         >
//                                             {product.name}
//                                         </th>
//                                         <td className="px-6 py-4">{product.description}</td>
//                                         <td className="px-6 py-4">{product.price}</td>
//                                         <td className="px-6 py-4 whitespace-nowrap">
//                                             {product.stockQuantity}
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan={4} className="p-2 text-center">
//                                         No data available
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </>
//             )}
//         </div>
//     );
// }


'use client';
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function Products() {
    // const [products] = useState<any[]>([
    //     { id: 1, name: "Wireless Headphones", description: "High-quality noise-cancelling headphones.", price: 99.99, stockQuantity: 25 },
    //     { id: 2, name: "Smartphone Case", description: "Durable and stylish case for smartphones.", price: 19.99, stockQuantity: 50 },
    //     { id: 3, name: "Bluetooth Speaker", description: "Portable speaker with excellent sound quality.", price: 49.99, stockQuantity: 15 },
    //     { id: 4, name: "USB-C Charger", description: "Fast-charging USB-C adapter for various devices.", price: 14.99, stockQuantity: 30 },
    //     { id: 5, name: "Gaming Mouse", description: "Ergonomic mouse with customizable buttons.", price: 29.99, stockQuantity: 10 },
    // ]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [products, setProducts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(2);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
    const token = Cookies.get('accessToken');

    // Filtered Products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting
    const sortedProducts = sortConfig
        ? [...filteredProducts].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        })
        : filteredProducts;

    // Pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

    const handleSort = (key: string) => {
        setSortConfig(prev => ({
            key,
            direction: prev?.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
        }));
    };

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://sms-app-1-2wl7.onrender.com/products/all', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setProducts(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const exportToCSV = () => {
        if (products.length === 0) {
            alert("No data available to export.");
            return;
        }

        const headers = ["Name", "Description", "Price", "Stock Quantity"];
        const rows = products.map(product => [
            product.name,
            product.description,
            product.price,
            product.stockQuantity,
        ]);

        const csvContent = [headers, ...rows]
            .map(row => row.join(","))
            .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "products.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative w-[60%] overflow-x-auto shadow-md sm:rounded-lg">
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4 px-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={exportToCSV}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Export to CSV
            </button>
            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[100%]">
                <thead className="text-xs text-gray-700 uppercase dark:bg-[#151515] dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('name')}>
                            Name {sortConfig?.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                        </th>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('price')}>
                            Price {sortConfig?.key === 'price' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                        </th>
                        <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort('stockQuantity')}>
                            Stock Quantity {sortConfig?.key === 'stockQuantity' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedProducts.length > 0 ? (
                        paginatedProducts.map((product) => (
                            <tr
                                key={product.id}
                                className="bg-white border-b dark:bg-[#151515] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {product.name}
                                </th>
                                <td className="px-6 py-4">{product.description}</td>
                                <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                                <td className="px-6 py-4">{product.stockQuantity}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="p-2 text-center">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 space-x-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
