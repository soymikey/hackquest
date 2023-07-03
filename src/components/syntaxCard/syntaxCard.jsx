import style from "./style.module.css";

export default function SyntaxCard({ data }) {
  const {
    title = "",
    tags = [],
    description = "",
    hours = "",
    courses = "",
    complete = "",
  } = data;
  return (
    <div className={style.cardWrapper}>
      <div className={style.shadow}></div>
      <div className={style.cardContent}>
        <div className={style.dash}></div>
        <div className={style.title}>{title}</div>
        <div className={style.tagWrapper}>
          {tags.map((tag) => (
            <span key={tag.id} className={style.tag}>
              {tag?.value}
            </span>
          ))}
        </div>
        <div className={style.description}>{description}</div>
        <div className={style.footerWrapper}>
          <div className={style.time}>
            <div className={style.clockIcon}></div>
            <div className={style.text}>{hours} Hour</div>
          </div>
          <div className={style.course}>
            <div className={style.bookIcon}></div>
            <div className={style.text}>{courses} Course</div>
          </div>
          <div className={style.progress}>
            <div className={style.flightIcon}></div>
            <div className={style.text}>{complete}% COMPLETED</div>
          </div>
        </div>
      </div>
    </div>
  );
}
