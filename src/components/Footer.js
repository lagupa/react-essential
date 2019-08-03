import React from "react";

function Footer() {
  return (
    <div className="bg-dark pt-3 pb-3">
      <h3 className="container text-white">Footer Sections of the site</h3>{" "}
      <hr />
      <footer className=" container page-footer font-small blue pt-4">
        <div className=" text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-white text-uppercase">Footer Content</h5>
              <p className="text-white">
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className=" list-unstyled">
                <li>
                  <a className="text-white" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a className="text-white" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="text-white" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-white footer-copyright text-center py-3">
          © 2018 Copyright:
          <a
            className="text-white"
            href="https://mdbootstrap.com/education/bootstrap/"
          >
            {" "}
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
