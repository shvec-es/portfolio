import s from './Header.module.css';
// import photo from '../images/photo.jpg';
// import OrderButton from './OrderButton';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={`${s.container} ${s.heroSection}`}>
        <h1 className={s.title}>
          Hello, I am <span className={s.accentText}>Fullstack developer</span>
        </h1>
        <p className={s.descr}>
          I’m dedicated to designing{' '}
          <span className={s.accentText}>
            responsive, user-friendly websites
          </span>{' '}
          that not only fulfill all your needs but also stand out and truly{' '}
          <span className={s.accentText}>represent your unique vision</span>.
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
