import { Key } from "react"

export type Product = {
    [x: string]: Key | null | undefined
    _id:string,
    name:string,
    description:string,
    price:number,
    image_url:string,
    rating:number
}