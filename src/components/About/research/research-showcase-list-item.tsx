import { RefObject, useRef } from "react";
import { motion } from "framer-motion";

export interface ResearchListIconProps {
  iconRef: RefObject<HTMLElement>;
}

export interface ResearchListItemProps {
  title: string;
  coauthors: string;
  year: number | string;
  journal?: string;
  details?: string;
  issn?: string;
  impactFactor?: string;
}

export default function ResearchListItem(
  props: ResearchListItemProps,
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
        <h3 className="text-base font-bold text-zinc-900 sm:text-xl md:text-2xl">
          {props.title}
        </h3>

        <p className="text-sm font-medium text-zinc-600 xs:text-base">
          <strong>Authors:</strong> {props.coauthors}
        </p>
        {props.journal && (
          <p className="text-sm text-teal-800 font-semibold">
            {props.journal} {props.details && `| ${props.details}`}
          </p>
        )}
        <p className="text-sm text-zinc-500">
          Year: {props.year} {props.issn && `| ISSN: ${props.issn}`} {props.impactFactor && `| ${props.impactFactor}`}
        </p>
      </motion.div>
    </li>
  );
}