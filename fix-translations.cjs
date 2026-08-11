const fs = require('fs');
const path = require('path');
const dir = path.join('c:', 'codes', 'LawHabibi', 'src', 'pages', 'expertise');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const mappings = {
  'title': 'heroTitle',
  'titleGold': 'heroTitleGold',
  'subtitle': 'heroSubtitle',
  'heading': 'mainHeading',
  'p1': 'p1',
  'p2': 'p2',
  'coreServicesTitle': 'coreServicesHeading',
  'service1': 'services.0',
  'service2': 'services.1',
  'service3': 'services.2',
  'service4': 'services.3',
  'service5': 'services.4',
  'p3': 'p3',
  'sidebarTitle': 'sidebarTitle',
  'sidebarDesc': 'sidebarDesc',
  'sidebarBtn': 'bookConsultation'
};

const fileToKeyMap = {
  'CorporateLaw.jsx': ['corporateLaw', 'corporate'],
  'CommercialLaw.jsx': ['commercialLaw', 'commercial'],
  'RealEstate.jsx': ['realEstate', 'realEstate'],
  'Arbitration.jsx': ['arbitration', 'arbitration'],
  'FamilyLaw.jsx': ['familyLaw', 'family'],
  'CriminalDefense.jsx': ['criminalDefense', 'criminal']
};

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const [oldKey, newKey] = fileToKeyMap[file];
  
  for (const [oldSuffix, newSuffix] of Object.entries(mappings)) {
    const oldStr = `expertise.${oldKey}.${oldSuffix}`;
    const newStr = `expertise.${newKey}.${newSuffix}`;
    content = content.split(oldStr).join(newStr);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
