
import { Pagination } from "./Pagination";
import type {  TableProductos2 } from "../helpers/Type";
import { useEffect, useRef } from "react";


export function TableP({ products, total,cambiarP }: TableProductos2) {

    const count = useRef(0);
    
            useEffect(() => {
                count.current = count.current + 1;
                console.log('pagina de table render:' ,count.current)
            });
    
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-10 mr-10 mt-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(item => (
                                <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.supplier}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        ||
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                    </td>
                                </tr>

                            ))

                        }





                    </tbody>
                </table>
            </div>

            <div className="float-start ml-10 mt- ">
                <Pagination page={total} cambiarP={cambiarP} />

            </div>

        </>
    )
}