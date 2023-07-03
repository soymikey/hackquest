import CardSwiper from "@/components/cardSwiper/cardSwiper";
import { getAllCourse } from "@/lib/courses";

export default function Home({ courseList }) {
  return (
    <div className="layout">
      <CardSwiper courseList={courseList} />
    </div>
  );
}

export async function getStaticProps() {
  const courseList = getAllCourse();
  return {
    props: {
      courseList,
    },
  };
}
