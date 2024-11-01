import s from "./Header.module.css";
import photo from "../photo_5298998442577739519_y.jpg";
import OrderButton from "./OrderButton";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section>
      <div className={`${s.container} ${s.heroSection}`}>
        <div className={s.hero}>
          <h1 className={s.title}>
            Hello, I am <span>Fullstack developer</span>
          </h1>
          <img className={s.photo} src={photo} alt="my_photo" />
        </div>
        <div className={s.heroSecond}>
          <OrderButton />
          <p className={s.descr}>
            I work with people all over the world to create impressive and
            functional websites that reflect each client’s unique personality.{" "}
          </p>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
