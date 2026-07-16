import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, children, ...props }, ref) => {
  const Component = asChild ? motion.div : motion.button;
  
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.03] active:scale-[0.97]";
  
  const variants = {
    primary: "bg-primary-navy text-white hover:bg-luxury-gold border border-primary-navy hover:border-luxury-gold hover:shadow-[0_8px_25px_rgba(204,163,82,0.4)]",
    secondary: "bg-white text-primary-navy border border-primary-navy hover:border-luxury-gold hover:text-luxury-gold hover:bg-luxury-gold/5 hover:shadow-[0_8px_25px_rgba(204,163,82,0.15)]",
    gold: "bg-luxury-gold text-white hover:bg-primary-navy hover:text-luxury-gold border border-luxury-gold hover:border-luxury-gold shadow-soft hover:shadow-[0_8px_25px_rgba(204,163,82,0.4)]"
  };
  
  const sizes = {
    default: "h-12 px-8 py-3 text-base",
    sm: "h-10 px-6 text-sm",
    lg: "h-14 px-10 text-lg",
  };

  return (
    <Component
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export { Button, cn };
