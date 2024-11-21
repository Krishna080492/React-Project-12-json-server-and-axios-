import React from "react";

function ProductCart({ cartList, removeItemFromCart }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cartList.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((item, index) => (
                <tr key={index} className="align-middle text-center">
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={item.url}
                      alt={item.title}
                      className="img-thumbnail"
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>Rs. {item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h4>Your cart is empty!</h4>
          <p>Add some products to your cart to see them here.</p>
        </div>
      )}
    </div>
  );
}

export default ProductCart;
