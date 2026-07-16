import { forwardRef } from 'react';
import { cn } from './Button';

const Section = forwardRef(({ className, children, id, ...props }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={cn("w-full py-16 md:py-24 lg:py-28 flex justify-center", className)}
      {...props}
    >
      <div className="w-full max-w-[1280px] px-6 md:px-10 lg:px-12 mx-auto">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

export { Section };
