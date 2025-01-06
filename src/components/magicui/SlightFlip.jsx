
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils"; // Ensure this path is correct

 function SlightFlip({
  word,
  duration = 0.9,
  delayMultiple = 0.15,
  framerProps = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  },
  className,
}) {
  return (
    <div className="flex  space-x-2">
      <AnimatePresence mode="sync">
        {word.split(" ").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("origin-center drop-shadow-sm", className)}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Example of how to use SlightFlip
export const MyComponent = () => {
  return (
    <SlightFlip word="Hello World!" duration={0.5} delayMultiple={0.1} className="text-2xl" />
  );
};


export default SlightFlip;