import { useEffect, useRef, useState } from "react";

import { Productsrvice } from "../services/Productsrvice";
import type { dtoProductu, TableProductos } from "../helpers/Type";
import { TableP } from "./TableP";
import { BarraMultiusos } from "./BarraMultiusos";
import { BarraContext, type UserContextType } from "../context/BaraContext";
import { DtaContext } from "../context/DtaContext";


export function Product() {

    const [productos, setProductos] = useState<TableProductos>({ products: [], total: 0 });
    const [page, setPage] = useState(1)
    const [barra, setBarra] = useState('menu')
    const [update, setUpdate] = useState<dtoProductu | 0>(0)


    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
        console.log('pagina de producto render:', count.current)
    });


    useEffect(() => {

        async function Productos() {
            try {
                const request = new Productsrvice();
                const repsonse = await request.getAll(page);
                setProductos({ products: repsonse.result, total: repsonse.total });
            } catch (error) {
                console.log(error)

            }
        }


        Productos();

    }, [page]);


    function cambiarPagina(num: number) {
        setPage(num)

    }



    return (

        <BarraContext.Provider value={{
            barra,
            setBarra,
        }}>
            < DtaContext.Provider value={{ update, setUpdate }}>
                <div className="flex h-screen pt-1">


                    <BarraMultiusos></BarraMultiusos>


                    <div className="w-4/5 mt-10">
                        <TableP products={productos.products} total={productos.total} cambiarP={cambiarPagina} />

                    </div>

                </div>
            </DtaContext.Provider>

        </BarraContext.Provider>







    )
}