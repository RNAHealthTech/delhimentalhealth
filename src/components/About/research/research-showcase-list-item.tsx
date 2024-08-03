import { RefObject, useRef } from "react";
import { motion  } from "framer-motion";

export interface ResearchListIconProps {
  iconRef: RefObject<HTMLElement>;
}


export interface ResearchListItemProps {
  title: string;
  coauthors: string;
  year: number;
}

export default function ResearchListItem(
  props: ResearchListItemProps,
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

        </h3>

        <p className="text-sm font-medium text-muted-foreground xs:text-base">
          {props.coauthors}
        </p>
        <p className="text-sm text-muted-foreground">
          {props.year}
        </p>
      </motion.div>
    </li>
  );
}