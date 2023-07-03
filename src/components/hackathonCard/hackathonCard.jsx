import style from "./style.module.css";

export default function HackathonCard({ data }) {
  const { title = "", tags = [], activities = [] } = data;
  return (
    <div className={style.cardWrapper}>
      <div className={style.shadow}></div>
      <div className={style.cardContent}>
        <div className={style.title}>{title}</div>
        <div className={style.tagWrapper}>
          {tags?.map((tag) => {
            return (
              <span className={style.tag} key={tag?.id}>
                {tag?.value}
              </span>
            );
          })}
        </div>

        <div className={style.listWrapper}>
          {activities?.map((activity) => {
            return (
              <div className={style.listItem} key={activity?.id}>
                <div className={style.itemTitle}>{activity?.title}</div>
                <div className={style.itemDetails}>{activity?.details}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
