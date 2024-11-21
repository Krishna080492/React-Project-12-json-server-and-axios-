import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="add">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Add Product
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn text-dark text-decoration-none"   onClick={() => navigate('/cart')}>
                  <FaCartShopping fontSize={24} />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
