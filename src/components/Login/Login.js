import React, { Component } from "react";
import imgSign from "../../assets/img/savia.jpg";

import AuthService from "../../services/AuthService";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
      message: "",
    });

    AuthService.login(this.state.username, this.state.password)
      .then(() => {
        this.props.history.push("/product");
        window.location.reload();
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        this.setState({
          loading: false,
          message: resMessage,
        });
      });
  }

  render() {
    return (
      <div
        class="page-header align-items-start min-vh-100"
        style={{
          backgroundImage: `url(${imgSign})`,
        }}
      >
        <div class="container my-auto">
          <div class="row">
            <div class="col-lg-4 col-md-8 col-12 mx-auto">
              <div class="card z-index-0 fadeIn3 fadeInBottom">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                      Login
                    </h4>
                  </div>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start">
                    <div className="form-group">
                      <label class="form-label">Tài khoản</label>
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        onChange={this.onChangeUsername}
                        value={this.state.username}
                        required={required}
                      />
                    </div>
                    <div className="form-group">
                      <label class="form-label">Mật khẩu</label>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required={required}
                      />
                    </div>
                    <div class="form-check form-switch d-flex align-items-center mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        checked
                      />
                      <label
                        class="form-check-label mb-0 ms-3"
                        for="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn bg-gradient-primary w-100 my-4 mb-2"
                        onClick={this.handleLogin}
                      >
                        Sign in
                      </button>
                    </div>
                    <p class="mt-4 text-sm text-center">
                      Không có tài khoản?
                      <a
                        href="/register"
                        class="text-primary text-gradient font-weight-bold"
                      >
                        Đăng ký
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
