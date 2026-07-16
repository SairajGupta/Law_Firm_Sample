import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { ArrowRight } from 'lucide-react';

const publications = [
  {
    title: "Navigating the New UAE Corporate Tax Regime",
    category: "Corporate Law",
    date: "October 12, 2023",
    image: "/placeholder-library.jpg",
  },
  {
    title: "Arbitration in Dubai: Trends and Future Outlook",
    category: "Arbitration",
    date: "September 28, 2023",
    image: "/placeholder-meeting.jpg",
  },
  {
    title: "Protecting Intellectual Property in the Middle East",
    category: "Commercial Law",
    date: "August 15, 2023",
    image: "/placeholder-office.jpg",
  }
];

export default function Publications() {
  return (
    <Section id="insights" className="bg-light-gray">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-4">Insights</h2>
          <h3 className="text-4xl md:text-5xl font-heading text-primary-navy">
            Legal <span className="italic">Publications</span>
          </h3>
        </div>
        <a href="#" className="hidden md:flex items-center text-sm font-medium text-primary-navy hover:text-luxury-gold transition-colors">
          View All Publications
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="h-full p-0 overflow-hidden flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={pub.image} 
                  alt={pub.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary-navy">
                  {pub.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-xs text-text-muted mb-3">{pub.date}</p>
                <h4 className="text-xl font-heading text-primary-navy mb-4 font-semibold group-hover:text-luxury-gold transition-colors">
                  {pub.title}
                </h4>
                <a href="#" className="mt-auto flex items-center text-sm font-medium text-primary-navy group-hover:text-luxury-gold transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
