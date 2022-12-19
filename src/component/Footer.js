import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="about-social-icon text-center">
          <ul className="about-social">
          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://www.linkedin.com/in/muhammed-haddad-6567901a2/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://github.com/mhaddad20"
                              target="newtab"
                            >
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".6s">
                            <a
                              href="/#experience"
                              target="newtab"
                            >
                              <i
                                className="fa fa-briefcase"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".8s">
                            <a
                              href="/#education"
                              target="newtab"
                            >
                              <i
                                className="fa fa-graduation-cap"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay="1s">
                            <a
                              href="/#contact"
                              target="newtab"
                            >
                              <i className="fa fa-phone" aria-hidden="true"></i>
                            </a>
                          </li>
          </ul>
        </div>
        <div className="copyright">
          <h3>&copy; {currYear}, Made with ❤️ by Muhammed Haddad.</h3>
        </div>
    
      </div>
    </React.StrictMode>
  );
}

export default Footer;
