import { useEffect, useRef, useState } from "react";


import { Productsrvice } from "../services/Productsrvice";
import type { TableProductos } from "../helpers/Type";
import { TableP } from "./TableP";


export function Product(){
    const [productos,setProductos] = useState<TableProductos>({products:[],total:0});
    const[page,setPage]=useState(1)

     const count = useRef(0);

        useEffect(() => {
            count.current = count.current + 1;
            console.log('pagina de producto render:' ,count.current)
        });


    useEffect(() => {
        async function Productos() {
            try {
                const request = new  Productsrvice();
                const repsonse = await request.getAll(page);
                setProductos({products:repsonse.result,total:repsonse.total});
            } catch (error) {
                console.log(error)
                
            }
        }
        console.log('consumiendo api')

        Productos();

    },[page]);

    function cambiarPagina(num:number){
        setPage(num)

    }



    return(
        <div>
            <div className="mt-10">
                <TableP  products={productos.products} total={productos.total} cambiarP={cambiarPagina}/>
               
            </div> 

        </div>

    )
}