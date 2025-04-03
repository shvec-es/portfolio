import s from './Skills.module.css';

const Skills = () => {
    return <section className={s.marquee}>
        <div className={s.marqueeInner}>Tech skills:<ul className={s.marqueeInner}>
            <li className={s.marqueeLine}>html/css</li>
            <li className={s.marqueeLine}>javascript</li>
            <li className={s.marqueeLine}>typescript</li>
            <li className={s.marqueeLine}>react</li>
            <li className={s.marqueeLine}>react native</li>
            <li className={s.marqueeLine}>next.js</li>
            <li className={s.marqueeLine}>node.js</li>
            <li className={s.marqueeLine}>nest.js</li>
        </ul><ul className={s.marqueeInner}>
            <li className={s.marqueeLine}>html/css</li>
            <li className={s.marqueeLine}>javascript</li>
            <li className={s.marqueeLine}>typescript</li>
            <li className={s.marqueeLine}>react</li>
            <li className={s.marqueeLine}>react native</li>
            <li className={s.marqueeLine}>next.js</li>
            <li className={s.marqueeLine}>node.js</li>
            <li className={s.marqueeLine}>nest.js</li>
        </ul><ul className={s.marqueeInner}>
            <li className={s.marqueeLine}>html/css</li>
            <li className={s.marqueeLine}>javascript</li>
            <li className={s.marqueeLine}>typescript</li>
            <li className={s.marqueeLine}>react</li>
            <li className={s.marqueeLine}>react native</li>
            <li className={s.marqueeLine}>next.js</li>
            <li className={s.marqueeLine}>node.js</li>
            <li className={s.marqueeLine}>nest.js</li>
        </ul>
        <ul className={s.marqueeInner}>
            <li className={s.marqueeLine}>html/css</li>
            <li className={s.marqueeLine}>javascript</li>
            <li className={s.marqueeLine}>typescript</li>
            <li className={s.marqueeLine}>react</li>
            <li className={s.marqueeLine}>react native</li>
            <li className={s.marqueeLine}>next.js</li>
            <li className={s.marqueeLine}>node.js</li>
            <li className={s.marqueeLine}>nest.js</li>
        </ul></div>
        {/* <ul className={s.marqueeInner}>Soft skills:
            <li className={s.marqueeLine}>Organized</li>
            <li className={s.marqueeLine}>Meticulous</li>
            <li className={s.marqueeLine}>Conscientious</li>
            <li className={s.marqueeLine}>Diligent</li>
            <li className={s.marqueeLine}>Eager to learn</li>
        </ul> */}
    </section>
}

export default Skills;