import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <PageLinks parentClass="nav-links" childrenClass="nav-link" />

          <ul className="nav-icons">
            {socialLinks.map((social) => {
              return (
                <SocialLink key={social.id} {...social} itemClass="nav-icon" />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
