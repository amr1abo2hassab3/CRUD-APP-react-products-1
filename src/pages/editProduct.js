import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const [titleForm, setTitle] = useState("");
  const [priceForm, setPrice] = useState(0);
  const [descriptionForm, setDescription] = useState("");

  let navigate = useNavigate() ;

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify({
        title: titleForm,
        price: priceForm,
        description: descriptionForm,
      }),
    })
      .then((res) => res.json())
      .then(() => navigate("/products"))

      Swal.fire({
        title:`you Edit this product   ${product.title}`,
        icon:"success",
      })
  };
  return (
    <div>
      <h1>You Edit This Product {product.id}</h1>
      <h1 className="text-center mt-5">{product.title}</h1>
      <h1 className="text-center mt-5">{product.price}</h1>
      <h1 className="text-center mt-5">{product.description}</h1>
      <div className="container">
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              aria-describedby="product title"
              placeholder="Product Title"
              //   value={product.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              aria-describedby="product Price"
              placeholder="Product Price"
              //   value={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="Description"
              aria-describedby="product Price"
              placeholder="Product Description"
              //   value={product.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
