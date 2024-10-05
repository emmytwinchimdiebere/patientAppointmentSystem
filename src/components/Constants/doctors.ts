import drcameron  from "../../../public/assets/images/dr-cameron.png"
import drgreen from  "../../../public/assets/images/dr-green.png"
import drlee from  "../../../public/assets/images/dr-lee.png"
import drshima from  "../../../public/assets/images/dr-sharma.png"
import drramirez from  "../../../public/assets/images/dr-remirez.png"
import drlivingstone from  "../../../public/assets/images/dr-livingston.png"
import drpowell from  "../../../public/assets/images/dr-powell.png"
import drpeter from  "../../../public/assets/images/dr-peter.png"
import drcruz from  "../../../public/assets/images/dr-cruz.png"
import { StaticImageData } from "next/image"



interface doctypes{
    name:string,
    image: string | StaticImageData
}

export const  doctors:Array<doctypes> = [
    {
        name: "Dr Cameron",
        image:drcameron
    },

    {
        name:"Dr Green",
        image:drgreen
    },

    {
        name:"Dr Lee",
        image:drlee
    },

    {
        name:"Dr  Lamirez",
        image:drramirez
    },

    {
        name:"Dr Shimma",
        image:drshima
    },

    {
        name:"Dr Peter",
        image:drpeter
    },
    {
        name:"Dr Cruz",
        image:drcruz
    },

    {
        name:"Dr Livingstone",
        image:drlivingstone
    },

    {
        name:"Dr Powell",
        image:drpowell
    }
]