import s from "./Header.module.css";

const ThemeSwitcher = () => {
  const changeTheme = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // if (localStorage.getItem("theme") === "dark") {
  //   switchEl.checked = true;
  //   document.body.classList.add("dark");
  //   document.body.classList.remove("light");
  // }
  return (
    <div className={s.switcher}>
      <label className={s.switcherTrack}>
        <input
          type="checkbox"
          className={s.switcherToggle}
          onChange={changeTheme}
        />
        <span className={s.switcherMarker}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
