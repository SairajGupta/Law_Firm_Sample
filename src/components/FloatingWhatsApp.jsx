import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isBookPage = location.pathname === '/book-consultation';

  const whatsappNumber = "971000000000";
  const defaultMessage = t('common.floatingWhatsApp.defaultMessage');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div 
      className={`fixed end-5 md:end-6 z-50 flex items-center transition-all duration-300 ${
        isBookPage ? "bottom-6" : "bottom-[84px] md:bottom-6"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.currentTarget.blur();
          setIsHovered(false);
        }}
        className="group relative flex items-center bg-[#25D366] hover:bg-[#22BE5C] text-white p-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.16)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] transition-all duration-300 focus:outline-none"
        aria-label={t('common.floatingWhatsApp.ariaLabel')}
      >
        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 z-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105" />

        {/* Sliding Label on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden whitespace-nowrap z-10"
            >
              <span className="ps-2.5 pe-2 text-sm font-body font-medium tracking-wide">
                {t('common.floatingWhatsApp.label')}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
}
