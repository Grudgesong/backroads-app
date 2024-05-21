export default function PageLink({ link, childrenClass }) {
  return (
    <li key={link.id}>
      <a href={link.href} className={childrenClass}>
        {link.text}
      </a>
    </li>
  );
}
