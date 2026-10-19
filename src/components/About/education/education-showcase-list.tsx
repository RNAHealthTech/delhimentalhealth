import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import EducationShowcaseListItem, {
  type EducationShowcaseListItemProps,
} from "./education-showcase-list-item";

export interface EducationShowcaseListProps {
  title: string;
  details: EducationShowcaseListItemProps[];
}

export default function EducationShowcaseList(
  props: EducationShowcaseListProps,
) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mx-auto my-16 max-w-7xl px-6 sm:px-14 md:my-24 md:px-20">
    <h2 className="mb-10 w-full text-center text-3xl font-bold text-teal-800 sm:text-4xl md:text-5xl">
      {props.title}
    </h2>
    <div ref={ref} className="relative w-full md:mx-auto md:w-[80%]">
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-5 h-full w-[5px] origin-top rounded-lg bg-teal-600"
      ></motion.div>
      <ul className="ml-4 w-full items-center">
        {props.details.map((_details, index) => (
          <EducationShowcaseListItem key={index} {..._details} />
        ))}
      </ul>
    </div>
  </div>
  );
}