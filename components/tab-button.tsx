import { motion } from "framer-motion";
import React from "react";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) => {
  const buttonClasses = active ? "text-[#5651e5]" : "text-gray-600";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3 bg-[#5651e5]"></motion.div>
    </button>
  );
};

export default TabButton;
