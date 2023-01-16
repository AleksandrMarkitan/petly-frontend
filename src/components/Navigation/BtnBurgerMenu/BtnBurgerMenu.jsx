import css from "./BtnMenu.module.css";

export const BtnMenu = () => {
  return (
    <button className={css.BtnMenuBox}>
      <div className={css.BtnMenuLine}></div>
      <div className={css.BtnMenuLine}></div>
      <div className={css.BtnMenuLine}></div>
    </button>
  );
};
