import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
        showProducts()
  }, []);

//   this function  show all products => 
   const showProducts = () =>{
      fetch("http://localhost:3000/products").then((res) =>
        res.json().then((data) => setProducts(data))
      );
   }
   
//    this function delete one products  => 
//  const deleteProduct = (pro) =>{
//    Swal.fire(
//     {
//         title: `are you sure to delete this product ${pro.id}` ,
//         showCancelButton: true ,
//         icon: "question"
//     }
//    ).then((d) => {
//     if(d.isConfirmed){
//            fetch(`http://localhost:3000/products/${pro.id}`, { method: "DELETE" })
//            .then((res) => res.json())
//            .then((data) => showProducts());
//     }
//    })
   
//  }

const deleteProduct = (pro) => {
  Swal.fire({
    title: `are you sure to Delete this item ${pro.id}`,
    icon :"error",
    showCancelButton : true ,
  }).then((is) => {
    if(is.isConfirmed){
      fetch(`http://localhost:3000/products/${pro.id}` , {method: "DELETE"})
      .then((res) => res.json())
      .then((data) => showProducts())
    }
  })
}


  return (
    <div>
      <h1>Products page</h1>
      <Link
        to="/products/add"
        className=" btn btn-success 
mt-3"
      >
        Add New Product
      </Link>
      <table
        className="table table-striped mt5  products
table"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.title}</td>
              <td>{i.description.slice(0,30)}...</td>
              <td>{i.price}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(i)}
                >
                  Delete
                </button>
                <Link
                  className="btn btn-info"
                  to={`/productShow/${i.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-primary"
                  to={`/edit/${i.id}`}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
