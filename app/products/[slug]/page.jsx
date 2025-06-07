import {getProductBySlug} from '@/lib/data'

export default function product({params}){
    // console.log(params.slug)
    const p = getProductBySlug(params.slug)
    console.log(p)

    return(
        <>
        <div style={{color: "black"}}>
            <h3>Name: {p.name}</h3>
            <p>Description: {p.description}</p>
            <h4>Price: {p.price}</h4>
        </div>
        </>
    )   
}