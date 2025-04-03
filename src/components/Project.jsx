import s from './App.module.css';
import { MdArrowOutward } from 'react-icons/md';

const Project = ({ data: { url, tags, title, link } }) => {
  return (
    <div className={s.proj}>
      <img src={url} alt={title} />
      <div className={s.proj_textwrap}>
        <div className="proj_info">
          <p className={s.tags}>{tags.join('/')}</p>
          <h3 className={s.proj_title}>{title}</h3>
        </div>
        <a className={s.proj_btn} href={link} target="_blanck">
          To project <MdArrowOutward size="28" />
        </a>
      </div>
    </div>
  );
};

export default Project;
