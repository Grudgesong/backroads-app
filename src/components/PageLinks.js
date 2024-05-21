import { pageLinks } from "../data";
import PageLink from "./PageLink";
export default function PageLinks({ parentClass, childrenClass }) {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return (
          <PageLink key={link.id} link={link} childrenClass={childrenClass} />
        );
      })}
    </ul>
  );
}
