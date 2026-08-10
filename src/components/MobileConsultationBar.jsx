import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';
import { Calendar } from 'lucide-react';

export default function MobileConsultationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // Hide on consultation booking page to prevent redundancy and keyboard obstruction
  if (location.pathname === '/book-consultation') {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-border-light px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] transition-transform duration-300">
      <Button 
        variant="gold" 
        className="w-full h-12 text-base font-semibold shadow-md flex items-center justify-center gap-2.5 tracking-wide" 
        onClick={() => navigate('/book-consultation')}
      >
        <Calendar size={19} className="flex-shrink-0" />
        <span>{t('common.mobileBar.bookConsultation')}</span>
      </Button>
    </div>
  );
}
