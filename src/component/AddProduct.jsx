import React, { useState } from "react";

function AddProduct({handlePost}) {
  let [product, setProduct] = useState({});

  let handleInput = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product);
    
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    handlePost(product);
    setProduct({});
  };
  return (
    <>
      <div className="container">
        <form className="form w-50 mx-auto mt-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name : </label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleInput}
              value={product.title || ""}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Url : </label>
            <input
              type="url"
              className="form-control"
              name="image"
              onChange={handleInput}
              value={product.image || ""}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price : </label>
            <input
              type="number"
              className="form-control"
              name="price"
              onChange={handleInput}
              value={product.price || ""}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
