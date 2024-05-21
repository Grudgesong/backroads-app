import { pageLinks } from "../data";
export default function PageLinks({ parentClass, childrenClass }) {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={childrenClass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
