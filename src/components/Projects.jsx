import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './Header.module.css';
import Container from './Container';
import { data } from '../data/projects.js';
import Project from './Project';

const Projects = props => {
  return (
    <section id="projects">
      <Container>
        <h2 className={s.titleAbout}>
          My <span>projects</span>
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}
        >
          {data.map(pr => (
            <SwiperSlide key={pr.url}>
              <Project data={pr} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <ul>
          {data.map(pr => (
            <Project data={pr} key={pr.url} />
          ))}
        </ul> */}
      </Container>
    </section>
  );
};

export default Projects;
