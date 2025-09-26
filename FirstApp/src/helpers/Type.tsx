export interface producto{
    id:number;
    name:string
    price:string
    quantity:number
    supplier:string
}

export interface responseP{
    ok:boolean
    result:producto[]
    status: number
    total: number
}

export interface TableProductos{
    products:producto[]
    total: number
    

}
export interface TableProductos2{
    products:producto[]
    total: number
    cambiarP:(num: number) => void;

}

export interface dtoProduct{
    name:string
    supplier:string
    price:number
    quantity:number
}