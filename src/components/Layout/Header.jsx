import React, { Component } from "react";
import "../../assets/css/nucleo-icons.css";
import "../../assets/css/nucleo-svg.css";
import "../../assets/css/material-dashboard.css?v=3.0.4";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <nav
          class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
          id="navbarBlur"
          data-scroll="true"
        >
          <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li class="breadcrumb-item text-sm">
                  <Link class="opacity-5 text-dark" to="#">
                    Trang
                  </Link>
                </li>
                <li
                  class="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  Trang chủ
                </li>
              </ol>
              <h6 class="font-weight-bolder mb-0">Trang chủ</h6>
            </nav>
            <div
              class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                {/* <div class="input-group input-group-outline">
                  <label class="form-label">Tìm kiếm..</label>
                  <input type="text" class="form-control" />
                </div> */}
                <Link className="opacity-5 text-dark" to="/sell">
                  Bán hàng
                </Link>
              </div>
              <ul class="navbar-nav  justify-content-end">
                <li class="nav-item d-flex align-items-center">
                  <a
                    href="../pages/sign-in.html"
                    class="nav-link text-body font-weight-bold px-0"
                  >
                    <i class="fa fa-user me-sm-1"></i>
                    <Link class="d-sm-inline d-none">Đăng xuất</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    );
  }
}

export default Header;
