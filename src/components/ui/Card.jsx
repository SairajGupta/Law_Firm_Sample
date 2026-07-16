import { forwardRef } from 'react';
import { cn } from './Button';
import { motion } from 'framer-motion';

const Card = forwardRef(({ className, children, hoverEffect = true, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "bg-white rounded-2xl border border-border-light shadow-sm p-8",
        hoverEffect && "hover:shadow-soft-lg transition-shadow duration-300",
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export { Card };
