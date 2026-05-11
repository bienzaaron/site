import { socials } from "../data";

export function SocialLinks() {
  return (
    <ul className="socials">
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href}>{social.label}</a>
        </li>
      ))}
    </ul>
  );
}
