import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {

  const [titleForm , setTitle] = useState("")
  const [priceForm , setPrice] = useState(0)
  const [descriptionForm , setDescription] = useState("")
  let navigate = useNavigate() ;

  // const formSubmit = (e) => {
  //   e.preventDefault();

  //   fetch("http://localhost:3000/products", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: titleForm,
  //       price: priceForm,
  //       description: descriptionForm,
  //     }),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //   navigate("/products")
  //   })
  //   Swal.fire({
  //     title : "you Added A New Product ",
  //     icon:"success",
  //   })
  // };

  const formSubmit = (e) => {
    e.preventDefault() ;
    
    fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify({
        title: titleForm,
        price: priceForm,
        description: descriptionForm,
      }),
    })
      .then((res) => res.json())
      .then(() => navigate("/products"))

      Swal.fire({
        title: "You Added A New product",
        icon:"success"
      })
  }
  
  return (
    <div>
      <h1>Add New Product</h1>
      <div className="container">
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label
              htmlFor="productTitle"
              className="form
label"
            >
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              aria-describedby="product title"
              placeholder="Product Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="productPrice"
              className="form
label"
            >
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              aria-describedby="product Price"
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="Description"
              className="form
label"
            >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="Description"
              aria-describedby="product Price"
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn
primary"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
