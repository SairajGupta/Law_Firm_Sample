const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, 'src', 'i18n', 'locales');

const langs = ['en', 'ar'];

const loadLocale = (lang, filename) => {
  const filePath = path.join(localesPath, lang, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  // Hack to evaluate the export default object
  const moduleStr = content.replace('export default ', 'module.exports = ');
  const tmpFile = filePath + '.tmp.cjs';
  fs.writeFileSync(tmpFile, moduleStr);
  const data = require(tmpFile);
  fs.unlinkSync(tmpFile);
  return data;
};

const saveLocale = (lang, filename, data) => {
  const filePath = path.join(localesPath, lang, filename);
  const content = 'export default ' + JSON.stringify(data, null, 2) + ';\n';
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${lang}/${filename}`);
};

langs.forEach(lang => {
  const home = loadLocale(lang, 'home.js');
  const pages = loadLocale(lang, 'pages.js');
  const expertise = loadLocale(lang, 'expertise.js');
  const common = loadLocale(lang, 'common.js');

  // Fix home.js
  if (home.about) {
    home.about = {
      yearEst: home.about.badgeYear || home.about.yearEst,
      establishedText: home.about.badgeLabel || home.about.establishedText,
      badge: home.about.sectionSubtitle || home.about.badge,
      title1: home.about.title1,
      title2: home.about.title2,
      titleGold: home.about.titleGold,
      p1: home.about.p1,
      p2: home.about.p2,
      missionTitle: home.about.missionTitle,
      missionDesc: home.about.missionDesc,
      visionTitle: home.about.visionTitle,
      visionDesc: home.about.visionDesc,
      partnerTitle: home.about.managingPartner || home.about.partnerTitle,
      partnerName: home.about.partnerName
    };
  }

  if (home.contact) {
    home.contact = {
      title: home.contact.title,
      subtitle: home.contact.subtitle,
      detailsTitle: home.contact.detailsTitle,
      addressVal: home.contact.address || home.contact.addressVal,
      demoTag: lang === 'en' ? "(Demo)" : "(تجريبي)",
      demoNote: lang === 'en' ? "This is a demo." : "هذا تجريبي.",
      successTitle: lang === 'en' ? "Message Sent!" : "تم إرسال الرسالة!",
      successDesc: lang === 'en' ? "Thank you for reaching out." : "شكرا لتواصلك.",
      sendAnother: lang === 'en' ? "Send another message" : "إرسال رسالة أخرى",
      formTitle: home.contact.sendTitle || home.contact.formTitle,
      fullNameLabel: home.contact.fullName || home.contact.fullNameLabel,
      namePlaceholder: home.contact.namePlaceholder,
      emailLabel: home.contact.emailAddress || home.contact.emailLabel,
      emailPlaceholder: home.contact.emailPlaceholder,
      subjectLabel: home.contact.subject || home.contact.subjectLabel,
      subjectPlaceholder: home.contact.subjectPlaceholder,
      messageLabel: home.contact.message || home.contact.messageLabel,
      messagePlaceholder: home.contact.messagePlaceholder,
      submitBtn: lang === 'en' ? "Send Message" : "إرسال الرسالة"
    };
  }
  
  if (home.caseResults) {
    home.caseResults.corporate = home.caseResults.corporateClients || home.caseResults.corporate;
    delete home.caseResults.corporateClients;
  }

  saveLocale(lang, 'home.js', home);

  // Fix pages.js
  if (pages.allPublications) {
    pages.allPublications.catAll = pages.allPublications.allCategory || pages.allPublications.catAll;
    pages.allPublications.readFull = pages.allPublications.readFullArticle || pages.allPublications.readFull;
    pages.allPublications.noResults = pages.allPublications.noPublications || pages.allPublications.noResults;
    pages.allPublications.bannerTag = pages.allPublications.tailoredCounsel || pages.allPublications.bannerTag;
    pages.allPublications.bannerTitle = pages.allPublications.deeperInsightsTitle || pages.allPublications.bannerTitle;
    pages.allPublications.bannerDesc = pages.allPublications.deeperInsightsDesc || pages.allPublications.bannerDesc;
    pages.allPublications.bannerBtn = pages.allPublications.bookConfidential || pages.allPublications.bannerBtn;
    pages.allPublications.catCorporate = lang === 'en' ? "Corporate Law" : "قانون الشركات";
    pages.allPublications.catCommercial = lang === 'en' ? "Commercial Law" : "القانون التجاري";
    pages.allPublications.catRealEstate = lang === 'en' ? "Real Estate" : "العقارات";
    pages.allPublications.catArbitration = lang === 'en' ? "Arbitration" : "التحكيم";
    pages.allPublications.catCriminal = lang === 'en' ? "Criminal Defense" : "الدفاع الجنائي";
  }

  // Legal Disclaimer mapping
  if (pages.legalDisclaimer) {
    pages.disclaimer = {
      homeLink: pages.articleDetail.homeLink, 
      badge: pages.legalDisclaimer.badge,
      title1: pages.legalDisclaimer.title1,
      titleGold: pages.legalDisclaimer.titleGold,
      subtitle: pages.legalDisclaimer.subtitle,
      boxTitle: pages.legalDisclaimer.noAdviceTitle || pages.legalDisclaimer.boxTitle,
      boxDesc: pages.legalDisclaimer.noAdviceText || pages.legalDisclaimer.boxDesc,
      s1Title: pages.legalDisclaimer.h1 || pages.legalDisclaimer.s1Title,
      s1Desc: pages.legalDisclaimer.p1 || pages.legalDisclaimer.s1Desc,
      s2Title: pages.legalDisclaimer.h2 || pages.legalDisclaimer.s2Title,
      s2Desc: pages.legalDisclaimer.p2 || pages.legalDisclaimer.s2Desc,
      s3Title: pages.legalDisclaimer.h3 || pages.legalDisclaimer.s3Title,
      s3Desc: pages.legalDisclaimer.p3 || pages.legalDisclaimer.s3Desc,
      s4Title: pages.legalDisclaimer.h4 || pages.legalDisclaimer.s4Title,
      s4Desc: pages.legalDisclaimer.p4 || pages.legalDisclaimer.s4Desc,
      footerLicensing: pages.legalDisclaimer.licensingLabel + " " + pages.legalDisclaimer.licensingText,
      footerBtn: pages.legalDisclaimer.verifyBtn
    };
    delete pages.legalDisclaimer;
  }
  
  // Privacy Policy mapping
  if (pages.privacyPolicy) {
    pages.privacy = {
      homeLink: pages.articleDetail.homeLink, 
      badge: pages.privacyPolicy.badge,
      title1: pages.privacyPolicy.title1,
      titleGold: pages.privacyPolicy.titleGold,
      subtitle: pages.privacyPolicy.subtitle,
      effectiveDate: pages.privacyPolicy.effectiveDateVal,
      jurisdiction: pages.privacyPolicy.jurisdictionVal,
      s1Title: pages.privacyPolicy.h1,
      s1Desc: pages.privacyPolicy.p1,
      s2Title: pages.privacyPolicy.h2,
      s2Desc: pages.privacyPolicy.p2,
      s2Li1: pages.privacyPolicy.li1,
      s2Li2: pages.privacyPolicy.li2,
      s2Li3: pages.privacyPolicy.li3,
      s3Title: pages.privacyPolicy.h3,
      s3Desc: pages.privacyPolicy.p3,
      s4Title: pages.privacyPolicy.h4,
      s4Desc: pages.privacyPolicy.p4,
      s5Title: pages.privacyPolicy.h5,
      s5Desc: pages.privacyPolicy.p5,
      dpoTitle: lang === 'en' ? "Contact DPO" : "التواصل مع مسؤول الخصوصية",
      dpoDesc: pages.privacyPolicy.contactFooter,
      dpoEmail: "privacy@almansoorilaw-demo.ae",
      dpoFirm: "Al Mansoori & Partners",
      dpoAddress: "Dubai, UAE"
    };
    delete pages.privacyPolicy;
  }

  // Terms mapping
  if (pages.termsOfService) {
    pages.terms = {
      homeLink: pages.articleDetail.homeLink,
      badge: pages.termsOfService.badge,
      title1: pages.termsOfService.title1,
      titleGold: pages.termsOfService.titleGold,
      subtitle: pages.termsOfService.subtitle,
      version: pages.termsOfService.versionVal,
      applicability: pages.termsOfService.applicabilityVal,
      s1Title: pages.termsOfService.h1,
      s1Desc: pages.termsOfService.p1,
      s2Title: pages.termsOfService.h2,
      s2Desc: pages.termsOfService.p2,
      s3Title: pages.termsOfService.h3,
      s3Desc: pages.termsOfService.p3,
      s4Title: pages.termsOfService.h4,
      s4Desc: pages.termsOfService.p4,
      s5Title: pages.termsOfService.h5,
      s5Desc: pages.termsOfService.p5,
      footerCounsel: lang === 'en' ? "Legal Counsel" : "استشارة قانونية",
      footerLink: lang === 'en' ? "Book Consultation" : "حجز استشارة"
    };
    delete pages.termsOfService;
  }

  saveLocale(lang, 'pages.js', pages);

  // Fix expertise.js
  const expKeys = ['corporate', 'commercial', 'realEstate', 'arbitration', 'family', 'criminal'];
  expKeys.forEach(k => {
    if (expertise[k]) {
      expertise[k] = {
        heroTitle: expertise[k].title1 || expertise[k].heroTitle,
        heroTitleGold: expertise[k].titleGold || expertise[k].heroTitleGold,
        heroSubtitle: expertise[k].subtitle || expertise[k].heroSubtitle,
        mainHeading: expertise[k].h1 || expertise[k].mainHeading,
        p1: expertise[k].p1,
        p2: expertise[k].p2,
        p3: expertise[k].p3,
        coreServicesHeading: expertise[k].servicesTitle || expertise[k].coreServicesHeading,
        services: expertise[k].services || [expertise[k].s1, expertise[k].s2, expertise[k].s3, expertise[k].s4, expertise[k].s5].filter(Boolean),
        sidebarTitle: expertise[k].advisoryTitle || expertise[k].sidebarTitle,
        sidebarDesc: expertise[k].advisoryDesc || expertise[k].sidebarDesc,
        bookConsultation: expertise[k].bookBtn || expertise[k].bookConsultation
      };
    }
  });

  saveLocale(lang, 'expertise.js', expertise);

  // Fix common.js
  if (common.footer) {
    common.footer.disclaimer = common.footer.disclaimerText || common.footer.disclaimer;
    delete common.footer.disclaimerText;
    common.footer.navCorporate = lang === 'en' ? "Corporate Law" : "قانون الشركات";
    common.footer.navCommercial = lang === 'en' ? "Commercial Law" : "القانون التجاري";
    common.footer.navRealEstate = lang === 'en' ? "Real Estate" : "العقارات";
    common.footer.navArbitration = lang === 'en' ? "Arbitration" : "التحكيم";
    common.footer.navFamily = lang === 'en' ? "Family Law" : "قانون الأسرة";
    common.footer.navCriminal = lang === 'en' ? "Criminal Defense" : "الدفاع الجنائي";
    common.footer.navPrivacy = lang === 'en' ? "Privacy Policy" : "سياسة الخصوصية";
    common.footer.navTerms = lang === 'en' ? "Terms of Service" : "شروط الخدمة";
  }
  
  if (common.floatingWhatsApp) {
    common.whatsapp = {
      chatText: common.floatingWhatsApp.chatText
    };
    delete common.floatingWhatsApp;
  }
  
  saveLocale(lang, 'common.js', common);
});

console.log("Fixes applied successfully.");
