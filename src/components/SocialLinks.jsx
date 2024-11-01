import s from "./Header.module.css";

const SocialLinks = (props) => {
  return (
    <ul className={s.links}>
      <li>
        <a href="/">IG</a>
      </li>
      <li>
        <a href="/">TG</a>
      </li>
      <li>
        <a href="/">YT</a>
      </li>
      <li>
        <a href="/">GH</a>
      </li>
      <li>
        <a>kotova.es.1510@gmail.com</a>
      </li>
    </ul>
  );
};

export default SocialLinks;
