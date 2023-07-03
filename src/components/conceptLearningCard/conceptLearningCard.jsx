import style from "./style.module.css";

export default function ConceptLearningCard({ data }) {
  const { title = "", hours = "" } = data;
  return (
    <div className={style.cardWrapper}>
      <div className={style.shadow}></div>
      <div className={style.cardContent}>
        <div className={style.dash}></div>
        <div className={style.bitcoin}></div>

        <div className={style.title}>{title}</div>
        <div className={style.time}>
          <div className={style.clockIcon}></div>
          <div className={style.text}>{hours} Hour</div>
        </div>
      </div>
    </div>
  );
}
