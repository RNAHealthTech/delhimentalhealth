import { RefObject, useRef } from "react";
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
    <li ref={ref} className="mx-auto mb-14 flex w-[85%] md:w-[70%] lg:w-[60%] flex-col gap-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
      >
        <h3 className="text-base font-bold text-gray-900 sm:text-xl md:text-2xl">
          {props.title}{" "}
          {props.organisation.href ? (
            <a
              href={props.organisation.href}
              className="cursor-pointer text-teal-700 hover:underline"
              target="_blank"
              rel="nofollow"
            >
              @{props.organisation.name}
            </a>
          ) : (
            <span className="text-teal-700">
              @{props.organisation.name}
            </span>
          )}
        </h3>
        <span className="text-sm font-medium text-gray-700 xs:text-base">
          {props.date} | {props.location}
        </span>
        <p className="text-sm font-medium text-gray-600 xs:text-base mt-1">
          {props.description}
        </p>
      </motion.div>
    </li>
  );
}
