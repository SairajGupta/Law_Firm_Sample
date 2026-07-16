import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from './ui/Section';

const Counter = ({ value, label, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60); // Assuming 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-heading font-semibold text-primary-navy mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium tracking-widest text-text-muted uppercase">
        {label}
      </div>
    </div>
  );
};

export default function CaseResults() {
  return (
    <Section id="results" className="bg-background border-y border-border-light">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        <Counter value={1000} suffix="+" label="Clients" />
        <Counter value={25} suffix="+" label="Years" />
        <Counter value={98} suffix="%" label="Success" />
        <Counter value={50} suffix="+" label="Corporate Clients" />
      </div>
    </Section>
  );
}
