import React from "react";
import { HomeLogo } from "@/components/elements/HomeLogo";
import { Menu } from "@/components/compounds/Menu";

export const Header = () => {
  return (
    <>
      <header
        className="header navbar navbar-expand-lg navbar-light navbar-floating navbar-sticky"
        data-scroll-header
        data-fixed-element
      >
        <div className="container px-0 px-xl-3">
          <button
            className="navbar-toggler ms-n2 me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <HomeLogo/>
          <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
            <a
              className="nav-link-style fs-sm text-nowrap"
              href="#modal-signin"
              data-bs-toggle="modal"
              data-view="#modal-signin-view"
            >
              <i className="ai-user fs-xl me-2 align-middle"></i>Sign in
            </a>
            <a
              className="btn btn-primary ms-grid-gutter d-none d-lg-inline-block"
              href="#modal-signin"
              data-bs-toggle="modal"
              data-view="#modal-signup-view"
            >
              Sign up
            </a>
          </div>
          <div
            className="offcanvas offcanvas-collapse order-lg-2"
            id="primaryMenu"
          >
            <div className="offcanvas-header navbar-shadow">
              <h5 className="mt-1 mb-0">Menu</h5>
              <button
                className="btn-close lead"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <Menu/>
            </div>
          </div>
        </div>
      </header>
      <div style={{ height: "100px" }}></div>
    </>
  );
};
