// import Swiper core and required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SyntaxCard from "@/components/syntaxCard/syntaxCard";
import HackathonCard from "@/components/hackathonCard/hackathonCard";
import LearningTracksCard from "@/components/learningTracksCard/learningTracksCard";
import ConceptLearningCard from "@/components/conceptLearningCard/conceptLearningCard";

import "./style.css";

const cardComps = {
  syntax: (data) => <SyntaxCard data={data} />,
  hackathon: (data) => <HackathonCard data={data} />,
  conceptTracks: (data) => <LearningTracksCard data={data} />,
  conceptLearning: (data) => <ConceptLearningCard data={data} />,
};

export default function CardSwiper({ courseList = [] }) {
  return (
    <div className="cardSwiper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        slidesPerGroup={3}
        navigation
        onSwiper={() => {}}
        onSlideChange={() => {}}
      >
        {courseList?.map((course) => {
          const cardComp = cardComps[course?.type](course);
          return <SwiperSlide key={course?.id}>{cardComp}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
