import { useEffect, useRef } from "react";

export interface p{
    page:number
    cambiarP:(num:number)=>void;
}

export function Pagination({page,cambiarP}:p) {

    console.log('ultima pagina ',page)
     
    const count = useRef(0);
    
            useEffect(() => {
                count.current = count.current + 1;
                console.log('pagina de pagination render:' ,count.current)
            });
    

    const items = [];

    for (let i = 0; i < page; i++) {
        items.push( <li>
                        <span onClick={ () => {cambiarP(i+1)}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</span>
                    </li>
                    );
    }

   
   
    return (
        <>

            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        <span onClick={ () => {cambiarP(1)}} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</span>
                    </li>
                    {
                        items
                    }
                
                    <li>
                        <span  onClick={ () => {cambiarP(items.length)}} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</span>
                    </li>
                </ul>
            </nav>

        </>
    )
}