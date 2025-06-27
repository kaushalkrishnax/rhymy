import { motion } from "framer-motion";
import Image from "next/image";

const Logo = ({ size = "md", animated = false }) => {
  const sizeClasses: Record<string, string> = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };
  return (
    <motion.div
      className={`inline-block ${sizeClasses[size]} bg-amber-50 rounded-3xl`}
      initial={animated ? { scale: 0, rotate: -90 } : {}}
      animate={animated ? { scale: 1, rotate: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image src="/rhymy.svg" className="w-full h-full object-contain" alt="" />
    </motion.div>
  );
};

export default Logo;