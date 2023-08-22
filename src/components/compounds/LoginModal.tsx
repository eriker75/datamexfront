export const LoginModal = () => {
  return (
    <div className="view show" id="modal-signin-view">
      <div className="modal-header border-0 bg-dark px-4">
        <h4 className="modal-title text-light">Sign in</h4>
        <button
          className="btn-close btn-close-white"
          type="button"
          data-bs-dismiss="modal"
          aria-label="btn-close "
        ></button>
      </div>
      <div className="modal-body px-4">
        <p className="fs-ms text-muted">
          Sign in to your account using email and password provided during
          registration.
        </p>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <div className="input-group">
              <i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input
                className="form-control rounded"
                type="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="input-group">
              <i className="ai-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <div className="password-toggle w-100">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  required
                />
                <label
                  className="password-toggle-btn"
                  aria-label="Show/hide password"
                >
                  <input className="password-toggle-check" type="checkbox" />
                  <span className="password-toggle-indicator"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="keep-signed"
              />
              <label className="form-check-label fs-sm" htmlFor="keep-signed">
                Keep me signed in
              </label>
            </div>
            <a className="nav-link-style fs-ms" href="password-recovery.html">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-primary d-block w-100" type="submit">
            Sign in
          </button>
          <p className="fs-sm pt-3 mb-0">
            Don&apos;t have an account?{" "}
            <a href="#" className="fw-medium" data-view="#modal-signup-view">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
