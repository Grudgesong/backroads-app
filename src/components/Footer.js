import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
export default function Footer() {
  return (
    <>
      <footer className="section footer">
        <PageLinks parentClass="footer-links" childrenClass="footer-link" />

        <ul className="footer-icons">
          {socialLinks.map((social) => {
            return (
              <SocialLink key={social.id} {...social} itemClass="footer-icon" />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
}
