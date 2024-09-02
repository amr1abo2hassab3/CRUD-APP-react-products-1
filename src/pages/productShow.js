import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductShow(){

    const {productId} = useParams();
    const [product , setProduct] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    } , [])

    return (
      <div>
        <h1 className="mt-5">{product.title}</h1>
        <h2 className="mt-5">{product.price}</h2>
        <h3 className="mt-5">{product.description}</h3>
      </div>
    );
}

export default ProductShow ;