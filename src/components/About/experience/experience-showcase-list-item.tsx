import { RefObject, useRef } from "react";
import {Link} from "react-router-dom";

import { motion } from "framer-motion";

export interface ExperienceListIconProps {
  iconRef: RefObject<HTMLElement>;
}


export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href: string;
  };
  date: string;
  location: string;
  description: string;
}

export default function ExperienceShowcaseListItem(
  props: ExperienceShowcaseListItemProps,
) {
  const ref = useRef(null);
  return (
    <li ref={ref} className="mx-auto mb-14 flex w-[60%] flex-col gap-1">
     
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 0.4,
        }}
      >
        <h3 className="text-base font-bold text-foreground sm:text-xl md:text-2xl">
          {props.title}{" "}
          <Link
            to={props.organisation.href}
            className="cursor-pointer text-gray-500"
            target="_blank"
            rel="nofollow"
          >
            @{props.organisation.name}
          </Link>
        </h3>
        <span className="text-sm font-medium text-foreground xs:text-base">
          {props.date} | {props.location}
        </span>
        <p className="text-sm font-medium text-muted-foreground xs:text-base">
          {props.description}
        </p>
      </motion.div>
    </li>
  );
}
