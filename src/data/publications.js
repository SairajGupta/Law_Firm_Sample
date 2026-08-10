import { useTranslation } from 'react-i18next';

export const publications = [
  {
    id: "corporate-tax-regime",
    title: "Navigating the New UAE Corporate Tax Regime",
    category: "Corporate Law",
    categoryKey: "corporate",
    date: "October 12, 2023",
    readTime: "5 min read",
    image: "/Corporate.jpg",
    summary: "A comprehensive analysis of the landmark Corporate Tax Framework in the UAE and essential restructuring strategies for multinational corporations.",
    author: {
      name: "Tariq Al Mansoori",
      role: "Managing Partner, Head of Corporate Practice",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "Executive Summary",
        text: "The implementation of Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses marks a transformative shift in the United Arab Emirates' tax landscape. With a baseline competitive rate of 9% for taxable income exceeding AED 375,000 and a 0% threshold for small businesses and qualifying Free Zone entities, the framework strikes a balance between global compliance and fostering a proactive commercial environment."
      },
      {
        heading: "Qualifying Free Zone Persons (QFZP)",
        text: "One of the most critical structural complexities facing multinational groups in Dubai is maintaining Qualifying Free Zone Person status. To benefit from the 0% corporate tax rate on qualifying income, Free Zone entities must demonstrate substantial presence within the UAE, adhere strictly to operational transparency requirements, and avoid deriving disqualifying mainland revenue without adequate compartmentalization."
      },
      {
        heading: "Transfer Pricing & Group Restructuring",
        text: "Under the new regime, transactions between related parties and connected persons must adhere strictly to the arm's-length principle as defined by the OECD Transfer Pricing Guidelines. We strongly counsel corporate boards and financial controllers to undergo an immediate diagnostic review of their inter-company funding arrangements, licensing fees, and service charges."
      },
      {
        heading: "Strategic Recommendations for Corporates",
        text: "To mitigate compliance risk and avoid punitive regulatory assessments, organizations must implement accounting restructuring immediately. Whether forming a Tax Group for fiscal consolidation or revising commercial agreements with mainland counterparties, proactive corporate structuring is no longer optional—it is a mandatory pillar of fiscal governance in the Emirates."
      }
    ],
    takeaways: [
      "9% tax threshold applies strictly to net corporate taxable profits exceeding AED 375,000.",
      "Free Zone entities require stringent review of mainland transactions to safeguard 0% qualifying benefit.",
      "OECD arm's-length transfer pricing protocols are now mandatory for all intra-group financial agreements."
    ]
  },
  {
    id: "arbitration-trends-dubai",
    title: "Arbitration in Dubai: Trends and Future Outlook",
    category: "Arbitration",
    categoryKey: "arbitration",
    date: "September 28, 2023",
    readTime: "7 min read",
    image: "/Arbitration.jpg",
    summary: "Key developments across DIAC and international tribunals shaping complex dispute resolution across the GCC.",
    author: {
      name: "Saeed Al Maktoum",
      role: "Senior Partner, Dispute Resolution & Arbitration",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "The Consolidation of Dubai Arbitral Institutes",
        text: "The abolishment of the DIFC-LCIA and the consolidation of arbitral operations under the unified Dubai International Arbitration Centre (DIAC) has created a robust, singular institution capable of handling multi-jurisdictional matters of global scale. The newly issued DIAC Rules modernize procedural frameworks by expressly accommodating expedited proceedings, third-party funding provisions, and advanced digital evidence protocols."
      },
      {
        heading: "Enforcement of Awards in Mainland and DIFC Courts",
        text: "Dubai remains a premier seat for international dispute resolution due to the seamless interconnectivity between common-law DIFC offshore courts and civil-law mainland tribunals. The 'conduit jurisdiction' framework assures international investors that arbitral awards rendered under DIAC or ICC governance carry binding enforceability across the wider GCC region without de-novo evidentiary re-argument."
      },
      {
        heading: "Mitigating Evidentiary Friction in Complex Construction Disputes",
        text: "With mega-infrastructure and engineering projects expanding across the region, arbitral tribunals are increasingly reliant on court-appointed quantum and technical experts. Structuring clear dispute resolution clauses during initial contract formation is paramount to avoiding prolonged jurisdictional contests when mega-projects encounter unforeseen timelines."
      }
    ],
    takeaways: [
      "DIAC's unified rules provide advanced mechanisms for expedited hearings and third-party litigation funding.",
      "Dual-jurisdiction enforcement between onshore Dubai courts and offshore DIFC common-law courts remains seamless.",
      "Well-drafted Multi-Tiered Dispute Resolution (MTDR) clauses significantly reduce arbitration duration and costs."
    ]
  },
  {
    id: "protecting-ip-middle-east",
    title: "Protecting Intellectual Property in the Middle East",
    category: "Commercial Law",
    categoryKey: "commercial",
    date: "August 15, 2023",
    readTime: "6 min read",
    image: "/Commercial.jpg",
    summary: "Strategic safeguarding of brand equity, patent registration, and defense against infringement in rapidly evolving Middle Eastern jurisdictions.",
    author: {
      name: "Farah Al-Zahra",
      role: "Partner, Commercial Law & IP Protection",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "The GCC Intellectual Property Revolution",
        text: "In recent years, regional jurisdictions have enacted sweeping statutory overhauls to align domestic intellectual property frameworks with World Intellectual Property Organization (WIPO) and TRIPs standards. From expedited patent examinations to stringent administrative enforcement against counterfeit importation, brand protection has reached new heights of legal efficacy in the Gulf."
      },
      {
        heading: "Trademark Registration Protocols and Customs Recordal",
        text: "Simply securing a certificate of registration with the Ministry of Economy is insufficient for exhaustive enterprise defense. To build an impenetrable perimeter against brand dilution, corporations must formalize customs recordal filings across major shipping terminals, granting border inspection officials immediate legal authority to impound suspicious consignments at the port of entry."
      },
      {
        heading: "Digital Asset Defamation and Domain Name Disputes",
        text: "In an increasingly interconnected e-commerce ecosystem, cross-border infringement frequently arises through digital counterfeiting, cybersquatting, and unauthorized social media brand misappropriation. Our advocates regularly deploy swift administrative injunctions combined with UDRP domain recovery procedures to neutralize digital infringements within days."
      }
    ],
    takeaways: [
      "Customs brand recordation is the most effective operational defense against cross-border counterfeit trafficking.",
      "Recent statutory modifications provide heightened civil damage recoveries for trademark willful infringement.",
      "Early international classification audits prevent administrative opposition delays during regional expansion."
    ]
  },
  {
    id: "real-estate-escrow-regulations",
    title: "Structuring Ultra-High-Net-Worth Real Estate Acquisitions in Dubai",
    category: "Real Estate",
    categoryKey: "realEstate",
    date: "July 22, 2023",
    readTime: "8 min read",
    image: "/RealEstate.jpg",
    summary: "Navigating escrow frameworks, prime property conveyancing, and regulatory compliance for international institutional and private investors.",
    author: {
      name: "Tariq Al Mansoori",
      role: "Managing Partner, Head of Corporate Practice",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "The Regulatory Strength of Dubai Land Department (DLD)",
        text: "Dubai’s luxury real estate sector continues to outperform global metropolitan capitals, underpinned by one of the world's most transparent and tightly regulated legal frameworks. Central to this investor protection is the Dubai Land Department (DLD) and the Real Estate Regulatory Agency (RERA), whose rigorous governance over developer trust accounts ensures total capital accountability in off-plan developments."
      },
      {
        heading: "Special Purpose Vehicles (SPVs) for Luxury Property Ownership",
        text: "High-net-worth families and institutional funds increasingly prefer structuring luxury real estate portfolios through offshore Special Purpose Vehicles (SPVs) established within the DIFC or Abu Dhabi Global Market (ADGM). This structural insulation not only streamlines future asset transferring without incurring disruptive probate proceedings but also optimizes succession and governance protocols across generations."
      },
      {
        heading: "Escrow Protections and Contractual Due Diligence",
        text: "When entering into Sale and Purchase Agreements (SPAs) for multi-million dirham acquisitions, exhaustive legal due diligence goes far beyond standard title verifications. Our practice scrutinizes developer construction milestones, termination penalty clauses, and structural defect warranties to ensure our clients' interests are insulated against project delays or market variance."
      }
    ],
    takeaways: [
      "Structuring luxury asset ownership via DIFC or ADGM SPVs simplifies inheritance and cross-border wealth management.",
      "RERA trust fund regulations assure international purchasers that off-plan capital is directly linked to construction milestones.",
      "Bespoke contractual addendums in SPAs protect buyers from unilateral delivery extensions and developer variations."
    ]
  },
  {
    id: "cross-border-mergers-acquisitions",
    title: "Cross-Border M&A: Managing Regulatory Approvals in the UAE",
    category: "Corporate Law",
    categoryKey: "corporate",
    date: "June 14, 2023",
    readTime: "6 min read",
    image: "/whyus.jpg",
    summary: "Critical insights into merger control regimes, anti-monopoly filings, and due diligence benchmarks in complex corporate consolidations.",
    author: {
      name: "Farah Al-Zahra",
      role: "Partner, Commercial Law & IP Protection",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "Navigating the Competition Law Regime",
        text: "With the promulgation of recent amendments to the UAE Competition Law, transactions resulting in significant market concentration must undergo rigorous pre-merger clearance with the Ministry of Economy. Identifying whether an acquisition triggers mandatory notification thresholds is a paramount first step before executing Binding Terms or Purchase Agreements."
      },
      {
        heading: "Foreign Direct Investment (FDI) and Ownership Liberalization",
        text: "Following the extensive deregulation of foreign ownership restrictions across hundreds of commercial business activities, foreign institutional acquirers can now hold 100% equity in mainland commercial enterprises without requiring a local commercial sponsor. However, strategic sectors—such as defense, banking, and utilities—continue to require rigorous Cabinet and regulatory scrutiny."
      },
      {
        heading: "Structuring Warranties and Indemnities (W&I) in Regional Deals",
        text: "In high-stakes cross-border transactions, allocating historical liabilities between buyers and sellers demands meticulously drafted representations and warranties. We strongly advocate incorporating localized W&I insurance arrangements coupled with escrow retainers to bridge valuation expectations while guaranteeing recourse for undisclosed tax or labor non-compliance."
      }
    ],
    takeaways: [
      "Mandatory competition pre-clearance is required when transaction valuation or market share exceeds strict national ratios.",
      "100% foreign ownership liberalization has vastly accelerated transnational corporate mergers and private equity acquisitions.",
      "Well-calibrated Indemnity escrow reserves protect acquiring conglomerates from legacy operational tax exposures."
    ]
  },
  {
    id: "white-collar-defense-compliance",
    title: "Proactive Anti-Money Laundering (AML) Compliance & Corporate Governance",
    category: "Criminal Defense",
    categoryKey: "criminal",
    date: "May 30, 2023",
    readTime: "9 min read",
    image: "/crimnal.jpg",
    summary: "Mitigating corporate liability through rigorous financial auditing, internal investigations, and robust compliance architectures.",
    author: {
      name: "Saeed Al Maktoum",
      role: "Senior Partner, Dispute Resolution & Arbitration",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "The Intensification of Regulatory Oversight",
        text: "The UAE has instituted an aggressive, technologically sophisticated financial intelligence infrastructure aimed at eliminating money laundering, terrorism financing, and systemic corporate fraud. Regulatory authorities actively oversee Designated Non-Financial Businesses and Professions (DNFBPs), including real estate brokers, accounting firms, and legal counselors, enforcing strict penalties for non-compliance."
      },
      {
        heading: "Developing Defensive Corporate Compliance Frameworks",
        text: "For enterprises engaged in international trade, commodity brokering, and investment banking, defensive governance begins with implementing proactive Know Your Customer (KYC) algorithms and continuous suspicious transaction monitoring. An effective corporate defense relies upon demonstrating clear institutional intent through documented compliance policies and frequent executive training."
      },
      {
        heading: "Managing Regulatory Investigations and Internal Audits",
        text: "When a financial intelligence query or administrative audit commences, swift legal intervention is essential to prevent operational paralysis or banking account freezes. Our White-Collar Defense practice works discreetly with regulatory task forces, conducting parallel forensic internal investigations to resolve regulatory disputes before formal penal adjudication arises."
      }
    ],
    takeaways: [
      "Designated Non-Financial Businesses (DNFBPs) face stringent compliance mandates with substantial financial non-compliance penalties.",
      "Proactive KYC protocols and documented corporate compliance manuals serve as primary legal shields during administrative audits.",
      "Immediate legal counseling during preliminary inquiry stages frequently results in discreet administrative settlement without public trial."
    ]
  }
];

export const arPublications = [
  {
    id: "corporate-tax-regime",
    title: "تصفح نظام ضريبة الشركات الجديد في دولة الإمارات العربية المتحدة",
    category: "قانون الشركات",
    categoryKey: "corporate",
    date: "12 أكتوبر 2023",
    readTime: "5 دقائق قراءة",
    image: "/Corporate.jpg",
    summary: "تحليل شامل ودقيق لإطار عمل ضريبة الشركات التاريخي في دولة الإمارات والاستراتيجيات الأساسية لإعادة هيكلة الشركات متعددة الجنسيات.",
    author: {
      name: "طارق المنصوري",
      role: "الشريك المديـر ورئيس قسم قضايا الشركات",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "الملخص التنفيذي",
        text: "يمثل صدور المرسوم بقانون اتحادي رقم (47) لسنة 2022 في شأن فرض ضريبة الشركات والأعمال نقلة نوعية وتاريخية في المنظومة الضريبية والمالية لدولة الإمارات العربية المتحدة. مع تطبيق معدل تنافسي وأساسي يبلغ 9% على الدخل الخاضع للضريبة الذي يجاوز 375,000 درهم، والإعفاء بنسبة 0% للأعمال الصغيرة والكيانات المؤهلة في المناطق الحرة، ينجح القانون في بلورة التوازن بين الامتثال للمعايير الدولية وتعزيز البيئة التجارية الجاذبة والمزدهرة."
      },
      {
        heading: "كيانات المناطق الحرة المؤهلة (QFZP)",
        text: "تعتبر مسألة الحفاظ على صفة (الكيان المؤهل في المنطقة الحرة) من أكثر التعقيدات الهيكلية أهمية أمام المجموعات والشركات العالمية في دبي. للاستفادة من نسبة 0% من ضريبة الشركات على الدخل المؤهل، يتعين على كيانات المناطق الحرة إثبات الحضور الفعلي والجوهر التجاري داخل دولة الإمارات، والالتزام الصارم بمتطلبات الشفافية وحوكمة الدفاتر المحاسبية، والفصل المحترم لأي إيرادات متأتية من البر الرئيسي لتجنب إسقاط الميزة الضريبية."
      },
      {
        heading: "التسعيـر التحويلي وإعادة الهيكلة للمجموعة",
        text: "بموجب النظام الجديد، يجب أن تمتثل كافة المعاملات المبرمة بين الأطراف ذات الصلة والأشخاص المرتبطين لمبدأ (الشخص المنفصل أو المحمّل المستقل - Arm's Length) كما هو معرف ومحدد في توجيهات منظمة التعاون الاقتصادي والتنمية (OECD). ونحن نوصي مجالس الإدارة والمديرين الماليين بضرورة إخضاع الاتفاقيات التمويلية ورسوم الترخيص والإدارة الداخلية لفنيص تشريعي ومحاسبي فوري."
      },
      {
        heading: "توجيهات وتوصيات استراتيجية للشركات",
        text: "لتخفيف مخاطر عدم الامتثال وتفادي الغرامات التنظيمية الصارمة، يجب على المؤسسات البدء الفوري في التطوير المحاسبي والتوثيقي. وسواء تعلق الأمر بتشكيل (مجموعة ضريبية) للتوحيد المحاسبي أو مراجعة تعديلات الصفقات مع الكيانات البرية (Mainland)، فإن التنظيم والهيكلة الاستباقية لم تعد اختيارية بل هي ركيزة حتميـة من ركائز الحوكمة التشريعية في دولة الإمارات."
      }
    ],
    takeaways: [
      "يطبق معدل الضريبة البالغ 9% حصرياً على الأرباح التشغيلية الصافية للشركات والتي تتجاوز حد 375,000 درهم.",
      "تتطلب شركات المناطق الحرة مراجعة دقيقة وفصل للمعاملات والصفقات مع البر الرئيسي للحفاظ على ميزة الإعفاء (0%).",
      "بروتوكولات التسعير التحويلي وفق معايير منظمة التعاون الاقتصادي والتنمية باتت ملزمة لكافة الاتفاقيات المالية داخل المجموعات."
    ]
  },
  {
    id: "arbitration-trends-dubai",
    title: "التحكيم التجاري في دبي: الاتجاهات الحالية والآفاق المستقبلية",
    category: "التحكيم وفض المنازعات",
    categoryKey: "arbitration",
    date: "28 سبتمبر 2023",
    readTime: "7 دقائق قراءة",
    image: "/Arbitration.jpg",
    summary: "أبرز التطورات في مركز دبي للتحكيم الدولي (DIAC) والهيئات التحكيمية الدولية التي تعيد صياغة فض المنازعات الكبرى عبر دول مجلس التعاون الخليجي.",
    author: {
      name: "سعيد آل مكتوب",
      role: "شريك أول، فض المنازعات والتحكيم الدولي",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "دمج وتوحيد المؤسسات ومراكز التحكيم في دبي",
        text: "أدى إلغاء هيئة (DIFC-LCIA) ودمج وتوحيد كافة أعمال التحكيم تحت سقف مركز دبي للتحكيم الدولي (DIAC) الموحد، إلى تأسيس كيان تحكيمي منفرد وقائم على أسس بالغة المتانة والصلابة، ذي قدرة على إدارة النزاعات الدولية ومتعددة الولايات القضائية. وقد جاءت قواعد DIAC الجديدة لتعرّف المنظومة الإجرائية من خلال الاستيعاب التشريعي لإجراءات التحكيم المعجل، وأحكام تمويل الطرف الثالث للمنازعات (Third-party funding)، وبروتوكولات الأدلة الجنائية الرقمية."
      },
      {
        heading: "تنفيذ أحكام المحاكم والقرارات التحكيمية بين المحاكم المحلية ومحاكم مركز دبي المالي",
        text: "تعتبر إمارة دبي المقر الحاضن والمحور الأبرز عالمياً لفض المنازعات التجارية الدولية نظراً للتكامل السلس والانسجام القانوني بين محاكم مركز دبي المالي العالمي (DIFC) القائمة على القانون العرفي الأنجلوسكسوني، ومحاكم دبي العادية المستندة للقانون المدني. إن مبدأ (الولاية الائتمانية أو المعرّفة) يمنح المستثمرين الدوليين طمأنينة بأن الأحكام الصادرة بموجب أنظمة DIAC أو ICC تتمتع بقوة نفاذ مطلقة وإجراءات تنفيذ مباشرة عبر منطقة مجلس التعاون الخليجي دون إعادة النظر في موضوع أو أدلة النزاع."
      },
      {
        heading: "الحد من الخلافات الإثباتية في عقود ومنازعات البنية التحتية والإنشاءات",
        text: "مع الانتشار الهائل للمنشآت والمشاريع الهندسية العملاقة في المنطقة، تتزايد اعتمادات هيئات التحكيم على الخبراء الفنيين ومحامي حسابات التكلفة والضرر (Quantum Experts) المزينين من الهيئات القضائية. لذا فإن صياغة شروط تحكيم واضحة ومتدرجة أثناء تكوين العقد الأولي تمثل عامل أمان جوهري لتلافي النزاعات الطويلة حول الاختصاص القضائي عند تعرض المشاريع لجداول زمنية طارئة أو تأخيرات غير محسوبة."
      }
    ],
    takeaways: [
      "توفر القواعد الجديدة لمركز دبي للتحكيم الدولي (DIAC) أدوات إجرائية متقدمة لجلسات الاستماع المعجلة وتقنين تمويل الطرف الثالث.",
      "الربط الإجرائي والتنفيذ بين المحاكم المحلية (المحاكم العادية) والمحاكم العالمية لمركز دبي المالي العالمي يعمل بتوافق كامل دون تعقيدات.",
      "تساهم الشروط التعاقدية متعددة المراحل لفض المنازعات (MTDR) بشكل ملموس في خفض التكاليف والمدة الزمنية للتقاضي التحكيمي."
    ]
  },
  {
    id: "protecting-ip-middle-east",
    title: "حماية الملكية الفكرية والعلامات التجارية في الشرق الأوسط",
    category: "القانون التجاري",
    categoryKey: "commercial",
    date: "15 أغسطس 2023",
    readTime: "6 دقائق قراءة",
    image: "/Commercial.jpg",
    summary: "استراتيجيات تحصين حقوق العلامات التجارية، وتجسير براءات الاختراع، والدفاع ضد الانتهاكات في المنظومات التشريعية سريعة التطور بالشرق الأوسط.",
    author: {
      name: "فرح الزهراء",
      role: "شريكة، القانون التجاري وحماية الملكية الفكرية",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "ثورة وتحديثات تشريعات الملكية الفكرية في دول الخليج",
        text: "شهدت الاقتصادات الخليجية في السنوات الأخيرة تحديثات تشريعية واسعة ومعتمدة لمواءمة أنظمة الملكية الفكرية المحلية مع أعلى معايير المنظمـة العالمية للملكية الفكرية (WIPO) واتفاقيات تريبس (TRIPs). بدءاً من تسريع فحص براءات الاختراع ووصولاً إلى تطبيق عقوبات وتدابير إدارية صارمة ضد جلب البضائع المقلدة، وصلت فعالية حماية الأصول المعنوية والعلامات إلى ومستويات قياسية في الخليج."
      },
      {
        heading: "بروتوكولات تسجيل العلامات وتوثيق السجل الجمركي",
        text: "إن مجرد إصدار شهادة التسجيل الأولية لدى وزارة الاقتصاد لا يعتبر حماية مطلقة أو كافية لمحاربة سرقة العلامات التجارية الكبرى. لبناء درع وقائي حازم ضد التقليد والاستنزاف التجاري، يتعين على المؤسسات والشركات تفعيل تسجيل علامتها بصفة رسمية في (سجلات سلطات الجمارك) بالموانئ والمنافذ الجوية والبحرية، مما يمنح ضباط ومفتشي الجمارك الصلاحية الفورية لمصادرة واحتجاز الشحنات المشبوهة عند نقطة العبور الأولى."
      },
      {
        heading: "قضايا الانتهاك الرقمي واختطاف أسماء النطاقات",
        text: "في عالم تتصاعد فيه تعاملات التجارة الإلكترونية، تتكاثر انتهاكات الأصول المعنوية العابرة للحدود عبر تزييف الصفحات الرقمية، والسطو الإلكتروني على الهويات (Cybersquatting)، والتقمص التجاري على منصات التواصل الاجتماعي. ويعتمد فريقنا المتخصص على استصدار أوامر استعجالية للحجب الفوري مقرونة بدراسة ملفات استرداد النطاقات عبر بروتوكولات (UDRP) الدولية لتحييد الانتهاكات خلال أيام معدودة."
      }
    ],
    takeaways: [
      "يعد التسجيل والتوثيق المباشر لدى دوائر الجمارك خط الدفاع الأسرع والأكثر نجاعة لوقف استيراد وتوريد البضائع المقلدة والمغشوشة.",
      "التعديلات القانونية الحديثة توفر مسارات تقاضي سريعة تسمح للملاك بالحصول على تعويضات مالية ضخمة عن الانتهاك العمدي.",
      "التدقيق والفنص المسبق للأصيل التجاري دولياً يمنع تأخيرات المعارضة الإدارية عند التوسع الجماهيري والتجاري بالشرق الأوسط."
    ]
  },
  {
    id: "real-estate-escrow-regulations",
    title: "هيكلة صفقات الممتلكات والعقارات الفاخرة لكبار المستثمرين في دبي",
    category: "العقارات والممتلكات",
    categoryKey: "realEstate",
    date: "22 يوليو 2023",
    readTime: "8 دقائق قراءة",
    image: "/RealEstate.jpg",
    summary: "التعامل مع حسابات الضمان (Escrow)، ونقل ملكية العقارات الفاخرة، والامتثال التنظيمي للمحافظ الاستثمارية والمؤسسية والشخصية الكبرى.",
    author: {
      name: "طارق المنصوري",
      role: "الشريك المديـر ورئيس قسم قضايا الشركات",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "الصرامة والقوة التنظيمية لدائرة الأراضي والأملاك (DLD)",
        text: "يواصل سوق العقارات الفاخرة في إمارة دبي تفوقه الصاروخي على الصنو والمنافسة العالمية، مستفيداِ من إحدى أكثر البيئات التنظيمية شفافيه وانضباطاً في تاريخ الملكية العقارية. وتتركز حماية رؤوس الأموال حول الصرامة التي تطبقها دائرة الأراضي والأملاك بدبي (DLD) ومؤسسة التنظيم العقاري (RERA)، اللتان تخضعان الحسابات البنكية الخاصة بضمان المشروعات لتدقيق أسبوعي ومراقبة مالية تمنع انحراف تدفقة أموال المستثمرين في عقود البيع على المخطط."
      },
      {
        heading: "الشركات ذات الغرض الخاص (SPVs) لتملـك العقارات الفاخرة",
        text: "تفضل العائلات الفخمة ذات الثروات العالية وصناديق الاستثمار المؤسسية تأسيس محافظ الملكية العقارية عبر إدراج شركات ذات غرض خاص (SPVs) في مراكز الاختصاصات المالية المعتمدة كـ (DIFC) أو سوق أبوظبي العالمي (ADGM). هذا الفصل المؤسسي المحصن لا يقتصر فقط على تسريع نقل الحصص المستقبلية دون الدخول في دهاليز وقضايا التركات الإجبارية المعقدة، بل ويضمن سلاسة توريث الأصول وحوكمة إدارتها عبر الأجيال باحترافية وسرية التامة."
      },
      {
        heading: "ضوابط حسابات الضمان والتدقيق القانوني للعقود (SPAs)",
        text: "عند الدخول في توقيع اتفاقيات البيع والشراء (SPAs) للصفقات المليونية، يتجاوز الفحص والتدقيق القانوني الحقيقي مجرد التأكد الروتينـي من وثائق الملكية. حيث يقوم قسم المحامين لدينا بتحليل ومراجعة الجداول الزمنية لمراحل البناء والربط بالتدفق المالي، وصياغة غرامات التأخير الصارمة، وبناء استرايچيات الدفاع عن الضمانات العيبية والهندسية للعقار لضمان حماية مطلقة لمصلحة موكلينا ضد أية تقلبات أو تأخيرات إضافية من جانب المطورين."
      }
    ],
    takeaways: [
      "هيكلة المحافظ العقارية عبر الشركات ذات الغرض الخاص (SPVs) في DIFC وADGM تسيل قضايا الوراثة والتركات وتحافظ على السرية.",
      "قوانين حسابات الضمان الصادرة عن مؤسسة التنظيم العقاري (RERA) توفر طمأنينة بأن دفعات العقارات على المخطط مرتبطة بتقدم الإنجاز الفعلي.",
      "الملاحق والشروط الخاصة في عقود الـ SPAs تحمي المشتري من أي محاولة للمماطله الزمنية أو التعديل الفردي للمساحات من قبل المطور."
    ]
  },
  {
    id: "cross-border-mergers-acquisitions",
    title: "الاندماج والاستحواذ العابر للحدود: إدارة الموافقات التنظيمية في دولة الإمارات",
    category: "قانون الشركات",
    categoryKey: "corporate",
    date: "14 يونيو 2023",
    readTime: "6 دقائق قراءة",
    image: "/whyus.jpg",
    summary: "رؤى حاسمة حول أنظمة الرقابة على الاندماجات، وتدقيق ممارسات منع الاحتكار، ومعايير العناية الواجبة في عمليات الدمج المؤسسي المعقدة.",
    author: {
      name: "فرح الزهراء",
      role: "شريكة، القانون التجاري وحماية الملكية الفكرية",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "الامتثال لأنظمة ومحددات قانون حماية المنافسة",
        text: "مع دخول التعديلات الصارمة لقانون حماية المنافسة ومكافحة الممارسات الاحتكارية في الإمارات حيز التنفيذ، باتت صفقات الاستحواذ التي تنتهي بالهيمنة والتركز في السوق خاضعة للمحاسبة والفحص المسبق والمشروطة بموافقة وزارة الاقتصاد. إن التحقق مما إذا كانت حصص المستحوذين أو قيم الصفقة تستدعي التبليغ التشريعي الإجباري هي الخطوة القانونية الأهم قبل التوقيع على الشروط الملزمة أو اتفاقيات نقل الحصص والملكية."
      },
      {
        heading: "تحرير الملكية الأجنبية والاستثمارات الخارجية المباشرة (FDI)",
        text: "عقب التطوير التاريخي والتحول الكلي لإلغاء قيود الملكية الأجنبية عبر آلاف الأنشطة التجارية والصناعية في البر الرئيسي للدولة، أصبح بإمكان الشركات العالمية والكيانات الاستثمارية التملك التام للأسهم بنسبة 100% في الشركات المؤسسة في دبي والإمارات دون الحاجة لتعيين شريك أو كفيل مواطن محلي. ومع ذلك، تبقى القطاعات المستثناة وذات البعد الاستراتيجي الوطني — مثل شؤون التسليح والأمن والخدمات المصرفية والاتصالات والنفط والغاز — خاضعة لمراجعات دقيقة لمجلس الوزراء والجهات الضابطة الميدانية."
      },
      {
        heading: "صياغة الضمانات والتعويضات (W&I) في صفقات الاستحواذ الإقليمية",
        text: "في الصفقات الدولية الكبرى والاندماجات عبر الحدود، تتطلب عملية الفصل وتوزيع المسؤوليات والأعباء التاريخية السابقة بين المشتري والبائع صياغة بنود دقيقة لإقرارات وضمانات البائع. ونحن ننصح دائماً بدمج نماذج التأمينات التعاقدية للضمانات (W&I Insurance) واقتطاع نسبة محتجزة في حساب ضمان ائتماني لتغطية أية التزامات عمالية أو ضريبية أو قضائية سابقة وغير مفصح عنها بالملف المالي للشركة."
      }
    ],
    takeaways: [
      "الموافقة المسبقة لجهات تنظيم المنافسة تعتبر إجبارية عند تجاوز نسب الحصص والسيطرة السوقية للحدود المعلنة من وزارة الاقتصاد.",
      "تعديلات تحرير الملكية الأجنبية بنسبة 100% أسهمت في مضاعفة صفقات صناديق الملكية الخاصة والاندماج المؤسسي العابر للحدود.",
      "حجز الأموال في حسابات تأمين ومطالبات الضمانات يحمي الكيانات المستحوذة من المفاجآت أو المطالبات المالية والضريبية السالفة."
    ]
  },
  {
    id: "white-collar-defense-compliance",
    title: "الامتثال الاستباقي لمكافحة غسل الأموال (AML) وحوكمة الشركات",
    category: "الدفاع الجنائي والقضايا المالية",
    categoryKey: "criminal",
    date: "30 مايو 2023",
    readTime: "9 دقائق قراءة",
    image: "/crimnal.jpg",
    summary: "الحد من المسؤولية القانونية للشركات من خلال التدقيق المالي الصارم، والتحقيقات الداخلية، وبناء هياكل امتثال محكمة ومؤسسية.",
    author: {
      name: "سعيد آل مكتوب",
      role: "شريك أول، فض المنازعات والتحكيم الدولي",
      image: "/hero-person.png"
    },
    content: [
      {
        heading: "تصاعد وتكثيف المراقبة والمساءلة الرقابية والمالية",
        text: "أسست دولة الإمارات العربية المتحدة منظومة استخبارات مالية ورقابة تقنية واصطناعية متطورة تهدف إلى اجتثاث ومكافحة جرائم غسل الأموال ومصادر تمويل الإرهاب والجرائم المالية والاحتيال المؤسسي. وتراقب الجهات الرقابية عن كثب ما يعرف بـ (الأعمال والمهن غير المالية المحددة - DNFBPs) والتي تشمل وسطاء ومكاتب العقارات، وشركات المحاسبة والتدقيق، ومكاتب الاستشارات القانونية والمحاماة، وتفرض عقوبات ومخالفات بالملايين في حال التقصر أو الإهمال بالتوثيق والتبليغ."
      },
      {
        heading: "بناء هياكل الحماية والامتثال الداخلي للشركات",
        text: "بالنسبة للكيانات النشطة في التجارة الدولية، ووساطة السلع والمعادن الثمينة، والمؤسسات الاستثمارية، فإن الحماية الوقائية تبدأ بتنفيذ آليات وأنظمة دقيقة لـ (معرفة العميل والتحقق من الهية - KYC) والمراقبة المؤمتة لكافة المعاملات المالية والمصرفية غير المألوفة أو المستحدثة. إن نجاح الدفاع المؤسسي أمام الجهات القضائية والرسمية يرتكز بالأساس على إبراز النيّة المهنية السليمة للشركة من خلال توثيق أدلة وأدوات حوكمة داخلية وبرامج تدريب متواصلة للتنفيذيين والموظفين."
      },
      {
        heading: "التعامل الفوري مع الاستجوابات والتفتيشات والتحقيق الداخلي",
        text: "عندما يرد إشعار باستفسار استقصائي أو تدقيق إداري من وحدات التحقيق المالي، يصبح التدخل والأداء القانوني العاجل ضرورة لا غنى عنها لتفادي إيقاف التراخيص أو تجميد الأرصدة المصرفية للشركات. ويعمل قسم جرائم الشركات والقوانين الجزائية لدينا بسرية ومهنية حادة جنباً إلى جنب مع الجهات التنظيمية، مع تفعيل تحقيقات تشخيصية وتدقيق داخلي جنائي لمعالجة وتلافي سوء الفهم وسداد الملاحظات وإغلاق التحقيق الإداري قبل وصوله إلى ساحات التقاضي في المحاكم الحنائية."
      }
    ],
    takeaways: [
      "المؤسسات المهنية وغير المالية المحددة (DNFBPs) خاضعة لمعايير امتثال وإجراءات فحص صارمة ترافقها عقوبات ومخالفات مالية باهظة.",
      "تطبيق أنظمة معرفة العميل (KYC) وتأصيل دلائل الامتثال المكتوبة يمثل الخطوط والدعاوى الوقائية الأولى لحماية الشركة ومدرائها أثناء التفتيش.",
      "التدخل الاستشاري القانوني السريع والذكي منذ الوهلة الأولى للاستفسارات يساهم بنجاح في حفظ التحقيق وتسويته إدارياً بسرية ومثابرة."
    ]
  }
];

export function usePublications() {
  const { i18n } = useTranslation();
  if (i18n && i18n.language && i18n.language.startsWith('ar')) {
    return arPublications;
  }
  return publications;
}
