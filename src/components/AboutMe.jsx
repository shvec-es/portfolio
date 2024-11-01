import s from "./Header.module.css";
import Container from "./Container";

const AboutMe = (props) => {
  return (
    <section>
      <Container>
        <h2 className={s.titleAbout}>
          About <span>me</span>
        </h2>
        <h3>Bio</h3>
        <p>
          I'm Lloyd Jefferson, a talented programmer specializing in software
          development. My expertise spans various programming languages and
          technologies, and I am dedicated to continually enhancing my skills. I
          thrive on seeking unconventional and creative solutions to problems,
          leveraging a high level of analytical skills to effectively tackle
          even the most challenging tasks. Adaptable to both independent and
          team-oriented work, I collaborate seamlessly with colleagues,
          exchanging ideas and finding optimal solutions. My professional
          maturity enables me to navigate challenges and stressful situations
          with a calm demeanor, maintaining a consistently high quality of work.
          Committed to self-improvement, I actively engage in studying new
          technologies and practices to stay current with the latest innovations
          in the field.
        </p>
        <h3>Education</h3>
        <ul>
          <li>
            2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York
          </li>
          <li>
            2019 - 2020 / Advanced Web Development Certificate, GoIT IT School,
            New York
          </li>
          <li>2020 - 2022 / Advanced Blender Animation Techniques, Udemy</li>
        </ul>
        <h3>Role</h3>
        <ul>
          <li>Frontend development</li>
          <li>HeadlessCMS, Wordpress</li>
          <li>Blender (enjoy)</li>
        </ul>
      </Container>
    </section>
  );
};

export default AboutMe;
