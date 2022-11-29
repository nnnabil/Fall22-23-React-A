import React, {useState, useEffect} from "react";
import axiosConfig from './axiosConfig';
const APIProducts = ()=>{

        const [products, setProducts] = useState([]);
    
        useEffect(()=>{
            axiosConfig.get("products/list")
            .then(resp=>{
                console.log(resp.data);
                setProducts(resp.data);
            }).catch(err=>{
                console.log(err);
            });
        },[]);

    return (
        <div>
        <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                {products.map(product=>(
                    <tr key={product.id}>
                        <td >{product.name}</td>
                        <td >{product.price}</td>
                    </tr>
                ))}
            </table>
        </div>

    )

}
export default APIProducts;  